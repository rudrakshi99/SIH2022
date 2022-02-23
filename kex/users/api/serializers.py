from datetime import datetime


from django.contrib.auth import get_user_model
from rest_framework import serializers

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.exceptions import AuthenticationFailed, ErrorDetail
from django.contrib import auth
from kex.core.utils import send_otp

User = get_user_model()


class MyTokenObtainPairSerializer:
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token["uuid"] = str(user.uuid)

        return token


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "first_name", "last_name"]

    # extra_kwargs = {"url": {"view_name": "api:user-detail", "lookup_field": "username"}}


class UserSignupSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
    pin_code = serializers.IntegerField(required=True)
    phone_number = serializers.IntegerField(required=True)
    email = serializers.EmailField(required=True)
    password = serializers.CharField(required=True, write_only=True)

    class Meta:
        model = User
        fields = [
            "email",
            "password",
            "first_name",
            "last_name",
            "address",
            "city",
            "state",
            "pin_code",
            "phone_number",
            "secondary_phone_number",
        ]

    def validate_email(self, email):
        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError(f"Email already exists!")
        return email

    def validate_phone_number(self, phone_number):
        if User.objects.filter(phone_number=phone_number).exists():
            raise serializers.ValidationError(f"Phone Number already exists!")
        return phone_number

    def create(self, validated_data):
        password = validated_data.pop("password")
        user = User.objects.create(**validated_data)
        user.set_password(password)
        user.is_active = True
        user.save()

        otp = send_otp(phone_number=user.phone_number)

        user.otp = otp
        user.otp_sent_at = datetime.now()
        user.save()

        return user


class UserSignUpOtpSerializer(serializers.ModelSerializer):
    otp = serializers.IntegerField(required=True, write_only=True)
    phone_number = serializers.CharField(required=True)
    email = serializers.EmailField(read_only=True)

    class Meta:
        model = User
        fields = ["phone_number", "otp", "first_name", "last_name", "email"]

    def validate(self, data):
        phone_number = data.get("phone_number", "")
        otp = data.get("otp")

        user = User.objects.get(phone_number=phone_number)

        if not user:
            raise AuthenticationFailed("Invalid credentials, try again")
        if not user.is_active:
            raise AuthenticationFailed("Account disabled, contact admin")
        if user.is_verified:
            raise AuthenticationFailed("Account already Verified")

        if user.otp_expired():
            raise AuthenticationFailed("Otp has been Expired. Try Again")
        elif user.otp == otp:
            user.is_verified = True
            user.otp = 1000
            user.save()
        else:
            raise AuthenticationFailed("Incorrect Otp, Try Again")

        return user


class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255, min_length=3)
    password = serializers.CharField(max_length=68, min_length=6, write_only=True)
    tokens = serializers.SerializerMethodField()

    def get_tokens(self, obj):

        user = User.objects.get(email=obj["email"])

        return {"refresh": user.tokens()["refresh"], "access": user.tokens()["access"]}

    class Meta:
        model = User
        fields = [
            "email",
            "password",
            "tokens",
            "first_name",
            "last_name",
            "email",
            "phone_number",
        ]

    def validate(self, attrs):
        email = attrs.get("email", "")
        password = attrs.get("password", "")
        user = User.objects.get(email=email)
        user = auth.authenticate(username=user.username, password=password)

        if not user:
            raise AuthenticationFailed("Invalid credentials, try again")
        if not user.is_active:
            raise AuthenticationFailed("Account disabled, contact admin")
        if not user.is_verified:
            raise AuthenticationFailed(
                "Please verify your email. Check your inbox for details."
            )
        return {
            "email": user.email,
            "tokens": user.tokens,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "phone_number": user.phone_number,
        }


class LoginWithOtpSerializer(serializers.Serializer):
    phone_number = serializers.CharField(required=True)

    def validate(self, attrs):
        user = User.objects.get(phone_number=attrs.get("phone_number", ""))
        otp = send_otp(user.phone_number)
        user.otp = otp
        user.otp_sent_at = datetime.now()
        user.save()
        return user


class LoginVerifyOtpSerializer(serializers.ModelSerializer):
    otp = serializers.IntegerField(required=True, write_only=True)
    phone_number = serializers.CharField(required=True)
    tokens = serializers.SerializerMethodField()
    email = serializers.EmailField(read_only=True)

    class Meta:
        model = User
        fields = ["phone_number", "tokens", "otp", "first_name", "last_name", "email"]

    def get_tokens(self, obj):

        user = User.objects.get(phone_number=obj["phone_number"])

        return {"refresh": user.tokens()["refresh"], "access": user.tokens()["access"]}

    def validate(self, data):
        phone_number = data.get("phone_number", "")
        otp = data.get("otp", "")

        user = User.objects.get(phone_number=phone_number)
        if not user:
            raise AuthenticationFailed("Invalid credentials, try again")
        if not user.is_active:
            raise AuthenticationFailed("Account disabled, contact admin")
        if not user.is_verified:
            raise AuthenticationFailed("User is not Verified.")

        if user.otp_expired():
            raise AuthenticationFailed("Otp has been Expired. Try Again")
        elif user.otp == otp:
            user.otp = 1000
            user.save()
        else:
            raise AuthenticationFailed("Incorrect Otp, Try Again")

        return {
            "tokens": user.tokens,
            "email": user.email,
            "phone_number": user.phone_number,
            "first_name": user.first_name,
            "last_name": user.last_name,
        }

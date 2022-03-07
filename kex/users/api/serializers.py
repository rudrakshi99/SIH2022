from datetime import datetime


from django.contrib.auth import get_user_model
from rest_framework import serializers

from rest_framework.exceptions import AuthenticationFailed
from django.contrib import auth
from kex.core.validators import validator_mobile_number
from kex.core.utils import response_payload
from kex.users.utils import TwilioHandler

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "id",
            "uuid",
            "user_id",
            "first_name",
            "last_name",
            "email",
            "address",
            "city",
            "state",
            "pin_code",
            "profile_picture",
            "phone_number",
        ]

    # extra_kwargs = {"url": {"view_name": "api:user-detail", "lookup_field": "username"}}


class UserUpdateSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=False)

    class Meta:
        model = User
        fields = [
            "id",
            "uuid",
            "user_id",
            "first_name",
            "last_name",
            "email",
            "address",
            "city",
            "state",
            "pin_code",
            "profile_picture",
        ]
        read_only_fields = ["uuid", "id", "user_id"]


class UserSignupSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
    pin_code = serializers.IntegerField(required=True)
    phone_number = serializers.IntegerField(
        required=True, validators=[validator_mobile_number]
    )
    email = serializers.EmailField(required=False)
    password = serializers.CharField(required=True, write_only=True)

    class Meta:
        model = User
        fields = [
            "id",
            "user_id",
            "uuid",
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
        read_only_fields = ["id", "user_id", "uuid"]

    def validate_email(self, email):
        if User.objects.filter(email=email).exists():
            raise serializers.ValidationError(
                response_payload(success=False, msg="Email already exists!")
            )
        return email

    def validate_phone_number(self, phone_number):
        if User.objects.filter(phone_number=phone_number).exists():
            raise serializers.ValidationError(
                response_payload(success=False, msg="Phone Number already exists!")
            )
        return phone_number

    def create(self, validated_data):
        password = validated_data.pop("password")
        user = User.objects.create(**validated_data)
        user.set_password(password)
        user.is_active = True
        user.save()

        twilio_handler = TwilioHandler()
        twilio_user_id = twilio_handler.create_or_get_user(
            email=user.email if user.email else "test@test.com",
            phone_number=user.phone_number,
        )

        user.twilio_user_id = twilio_user_id
        user.save()

        twilio_handler.send_otp(twilio_user_id)
        return user


class UserSignUpOtpSerializer(serializers.ModelSerializer):
    otp = serializers.IntegerField(required=True, write_only=True)
    phone_number = serializers.CharField(
        required=True, validators=[validator_mobile_number]
    )
    email = serializers.EmailField(read_only=True)

    class Meta:
        model = User
        fields = [
            "phone_number",
            "otp",
            "first_name",
            "last_name",
            "email",
            "uuid",
            "user_id",
            "id",
            "address",
            "city",
            "state",
            "pin_code",
            "secondary_phone_number",
        ]
        read_only_fields = [
            "uuid",
            "user_id",
            "id",
            "first_name",
            "last_name",
            "email",
            "address",
            "city",
            "state",
            "pin_code",
            "secondary_phone_number",
        ]

    def validate(self, data):
        phone_number = data.get("phone_number", "")
        otp = data.get("otp")

        user = User.objects.filter(phone_number=phone_number)
        if not user.exists():
            raise AuthenticationFailed(
                response_payload(success=False, msg="Invalid credentials, try again")
            )

        user = user.first()

        if not user.is_active:

            raise AuthenticationFailed(
                response_payload(success=False, msg="Account disabled, contact admin")
            )
        if user.is_verified:
            raise AuthenticationFailed(
                response_payload(success=False, msg="Account already Verified")
            )

        twilio_handler = TwilioHandler()
        otp_verified = twilio_handler.verify_otp(auth_id=user.twilio_user_id, otp=otp)

        if otp_verified:
            user.is_verified = True
            user.save()
        else:
            raise AuthenticationFailed(
                response_payload(success=False, msg="Incorrect Otp, Try Again")
            )

        return user


class LoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255, min_length=3)
    password = serializers.CharField(max_length=68, min_length=6, write_only=True)
    tokens = serializers.SerializerMethodField()

    def get_tokens(self, obj):
        try:
            user = User.objects.get(email=obj["email"])
        except:
            raise serializers.ValidationError(
                f"User with email {obj['email']} doesn't exists."
            )

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
            "uuid",
            "user_id",
            "id",
        ]

    def validate(self, attrs):
        email = attrs.get("email", "")
        password = attrs.get("password", "")
        try:
            user = User.objects.get(email=email)
        except:
            raise serializers.ValidationError(
                f"User with email {email} doesn't exists."
            )
        user = auth.authenticate(username=user.username, password=password)

        if not user:
            raise AuthenticationFailed(
                response_payload(success=False, msg="Invalid Email or Password")
            )
        if not user.is_active:
            raise AuthenticationFailed(
                response_payload(success=False, msg="Account disabled, contact admin")
            )
        if not user.is_verified:
            raise AuthenticationFailed(
                response_payload(
                    success=False,
                    msg="Please verify your email. Check your inbox for details.",
                )
            )
        return {
            "email": user.email,
            "tokens": user.tokens,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "phone_number": user.phone_number,
            "uuid": user.uuid,
            "user_id": user.user_id,
            "id": user.id,
        }


class LoginWithOtpSerializer(serializers.Serializer):
    phone_number = serializers.CharField(required=True)

    def validate(self, attrs):
        try:
            user = User.objects.get(phone_number=attrs.get("phone_number", ""))
        except:
            raise serializers.ValidationError(
                f"User with phone_number {attrs.get('phone_number', '')} doesn't exists."
            )
        twilio_handler = TwilioHandler()
        twilio_handler.send_otp(auth_id=user.twilio_user_id)
        return user


class LoginVerifyOtpSerializer(serializers.ModelSerializer):
    otp = serializers.IntegerField(required=True, write_only=True)
    phone_number = serializers.CharField(required=True)
    tokens = serializers.SerializerMethodField()
    email = serializers.EmailField(read_only=True)

    class Meta:
        model = User
        fields = [
            "phone_number",
            "tokens",
            "otp",
            "first_name",
            "last_name",
            "email",
            "user_id",
            "uuid",
            "id",
        ]
        read_only_fields = ["user_id", "uuid", "id", "email"]

    def get_tokens(self, obj):
        try:
            user = User.objects.get(phone_number=obj["phone_number"])
        except:
            raise serializers.ValidationError(
                f"User with phone_number {obj['phone_number']} doesn't exists."
            )

        return {"refresh": user.tokens()["refresh"], "access": user.tokens()["access"]}

    def validate(self, data):
        phone_number = data.get("phone_number", "")
        otp = data.get("otp", "")

        user = User.objects.filter(phone_number=phone_number)
        if not user.exists():
            raise AuthenticationFailed(
                response_payload(success=False, msg="Invalid credentials, try again")
            )
        user = user.first()
        if not user.is_active:
            raise AuthenticationFailed(
                response_payload(success=False, msg="Account disabled, contact admin")
            )
        if not user.is_verified:
            raise AuthenticationFailed(
                response_payload(success=False, msg="User is not Verified.")
            )
        twilio_handler = TwilioHandler()
        otp_verified = twilio_handler.verify_otp(auth_id=user.twilio_user_id, otp=otp)
        # if user.otp == 1000:
        #     raise AuthenticationFailed(
        #         response_payload(success=False, msg="Try Resending the otp.")
        #     )
        # elif user.otp_expired():
        #     raise AuthenticationFailed(
        #         response_payload(success=False, msg="Otp has been Expired. Try Again")
        #     )
        # if user.otp == otp:
        #     user.otp = 1000
        #     user.save()
        if not otp_verified:
            raise AuthenticationFailed(
                response_payload(success=False, msg="Incorrect Otp, Try Again")
            )

        return {
            "tokens": user.tokens,
            "email": user.email,
            "phone_number": user.phone_number,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "uuid": user.uuid,
            "user_id": user.user_id,
            "id": user.id,
        }

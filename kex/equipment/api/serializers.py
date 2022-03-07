from django.forms import ValidationError
from rest_framework.serializers import (
    HyperlinkedIdentityField,
    ModelSerializer,
    SerializerMethodField,
)
from kex.booking.models import Booking
from kex.equipment.models import Equipment, EquipmentRating
from kex.equipment_type.api.serializers import EquipmentTypeListSerializer
from kex.users.api.serializers import UserSerializer
from kex.brand.api.serializers import BrandSerializer


class EquipmentListSerializer(ModelSerializer):
    image = SerializerMethodField()
    url = HyperlinkedIdentityField(view_name="equipment-api:detail", lookup_field="id")
    manufacturer = SerializerMethodField()

    class Meta:
        model = Equipment
        fields = [
            "id",
            "eq_id",
            "url",
            "manufacturer",
            "title",
            "image",
            "daily_rental",
            "hourly_rental",
            "is_available",
            "equipment_type",
        ]

    def get_manufacturer(self, obj):
        return obj.manufacturer.name

    def get_image(self, obj):
        try:
            image = obj.image_1.url
        except:
            image = None
        return image


class EquipmentDetailSerializer(ModelSerializer):
    url = HyperlinkedIdentityField(view_name="equipment-api:detail", lookup_field="id")
    # owner = UserSerializer(read_only=True)
    owner = SerializerMethodField()
    image_1 = SerializerMethodField()
    image_2 = SerializerMethodField()
    image_3 = SerializerMethodField()
    image_4 = SerializerMethodField()
    image_5 = SerializerMethodField()
    manufacturer = SerializerMethodField()
    equipment_type = EquipmentTypeListSerializer(read_only=True)

    class Meta:
        model = Equipment
        fields = [
            "id",
            "url",
            "owner",
            "manufacturer",
            "title",
            "description",
            "daily_rental",
            "hourly_rental",
            "image_1",
            "image_2",
            "image_3",
            "image_4",
            "image_5",
            "equipment_type",
            "equipment_location",
            "manufacturing_year",
            "model",
            "condition",
            "horsepower",
            "width",
            "height",
            "is_available",
            "available_start_time",
            "available_end_time",
            "show_phone_number",
            "created_at",
        ]

    def get_manufacturer(self, obj):
        return obj.manufacturer.name

    def get_image_1(self, obj):
        try:
            image = obj.image_1.url
        except:
            image = None
        return image

    def get_image_2(self, obj):
        try:
            image = obj.image_2.url
        except:
            image = None
        return image

    def get_image_3(self, obj):
        try:
            image = obj.image_3.url
        except:
            image = None
        return image

    def get_image_4(self, obj):
        try:
            image = obj.image_4.url
        except:
            image = None
        return image

    def get_image_5(self, obj):
        try:
            image = obj.image_5.url
        except:
            image = None
        return image

    def get_owner(self, obj):
        owner = obj.owner
        detail = {
            "first_name": owner.first_name,
            "last_name": owner.last_name,
            "address": owner.address,
            "city": owner.city,
            "state": owner.state,
            "pin_code": owner.pin_code,
        }
        if obj.show_phone_number:
            detail["phone_number"] = owner.phone_number

        return detail


class EquipmentCreateSerializer(ModelSerializer):
    image_1 = SerializerMethodField()
    image_2 = SerializerMethodField()
    image_3 = SerializerMethodField()
    image_4 = SerializerMethodField()
    image_5 = SerializerMethodField()

    class Meta:
        model = Equipment
        fields = [
            "id",
            "owner",
            "manufacturer",
            "title",
            "description",
            "daily_rental",
            "hourly_rental",
            "image_1",
            "image_2",
            "image_3",
            "image_4",
            "image_5",
            "equipment_type",
            "equipment_location",
            "manufacturing_year",
            "model",
            "condition",
            "horsepower",
            "width",
            "height",
            "is_available",
            "available_start_time",
            "available_end_time",
            "show_phone_number",
            "created_at",
        ]

    def get_image_1(self, obj):
        try:
            image = obj.image_1.url
        except:
            image = None
        return image

    def get_image_2(self, obj):
        try:
            image = obj.image_2.url
        except:
            image = None
        return image

    def get_image_3(self, obj):
        try:
            image = obj.image_3.url
        except:
            image = None
        return image

    def get_image_4(self, obj):
        try:
            image = obj.image_4.url
        except:
            image = None
        return image

    def get_image_5(self, obj):
        try:
            image = obj.image_5.url
        except:
            image = None
        return image


class EquipmentRatingSerializer(ModelSerializer):
    class Meta:
        model = EquipmentRating
        fields = "__all__"
        read_only_fields = ["user"]

    def validate_equipment(self, equipment):
        if not Booking.objects.filter(
            customer=self.context["user"], status="Completed", equipment=equipment
        ).exists():
            raise ValidationError("No Booking with this Equipment")

        return equipment

    def create(self, validated_data):
        equipment_rating = EquipmentRating.objects.create(
            **validated_data, user=self.context["user"]
        )
        return equipment_rating
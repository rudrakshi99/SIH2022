from rest_framework import serializers
from kex import equipment
from datetime import datetime, date, time

from kex.booking.models import Booking, booking_status_choice
from kex.equipment.api.serializers import EquipmentListSerializer
from kex.users.api.serializers import UserSerializer


class BookingListSerializer(serializers.ModelSerializer):
    equipment = EquipmentListSerializer()

    class Meta:
        model = Booking
        fields = ["id", "booking_id", "equipment", "status", "created_at"]


class BookingSerializer(serializers.ModelSerializer):
    """
    Serializer for Booking model
    """

    equipment_type = serializers.SerializerMethodField()
    brand = serializers.SerializerMethodField()
    equipment = EquipmentListSerializer()
    customer = UserSerializer()

    class Meta:
        model = Booking
        fields = [
            "id",
            "booking_id",
            "customer",
            "equipment",
            "equipment_type",
            "brand",
            "start_date",
            "end_date",
            "status",
            "created_at",
            "start_time",
            "end_time",
        ]
        read_only_fields = [
            "booking_id",
            # "customer",
            # "equipment",
            "equipment_type",
            "brand",
            "created_at",
            "status",
        ]

    def get_equipment_type(self, obj):
        return obj.equipment.equipment_type.name

    def get_brand(self, obj):
        return obj.equipment.manufacturer.name


class BookingCreateSerializer(serializers.ModelSerializer):
    """
    Serializer for Booking model
    """

    equipment_type = serializers.SerializerMethodField()
    brand = serializers.SerializerMethodField()

    class Meta:
        model = Booking
        fields = [
            "id",
            "booking_id",
            "equipment",
            "equipment_type",
            "brand",
            "start_date",
            "end_date",
            "status",
            "created_at",
            "start_time",
            "end_time",
            "customer",
        ]
        read_only_fields = [
            "booking_id",
            "customer",
            # "equipment",
            "equipment_type",
            "brand",
            "created_at",
            "status",
        ]

    def create(self, validated_data):
        booking = Booking.objects.create(
            **validated_data, customer=self.context["user"]
        )

        return booking

    def get_equipment_type(self, obj):
        return obj.equipment.equipment_type.name

    def get_brand(self, obj):
        return obj.equipment.manufacturer.name


class BookingUpdateSerializer(serializers.Serializer):
    status = serializers.ChoiceField(choices=booking_status_choice, required=True)

    def update(self, instance, validated_data):
        status = validated_data.get("status")
        if instance.status == "Pending" and (
            status == "Accepted" or status == "Rejected"
        ):
            instance.status = status
            instance.save()
            return instance
        else:
            raise serializers.ValidationError(
                {"status": False, "message": "Not a valid choice"}
            )


class BookingDetailSerializer(serializers.ModelSerializer):
    equipment = EquipmentListSerializer()
    total_daily_rent = serializers.SerializerMethodField()
    total_hourly_rent = serializers.SerializerMethodField()
    number_of_days = serializers.SerializerMethodField()
    owner = serializers.SerializerMethodField()
    customer = UserSerializer()

    class Meta:
        model = Booking
        fields = [
            "customer",
            "created_at",
            "booking_id",
            "equipment",
            "start_date",
            "end_date",
            "total_hourly_rent",
            "total_daily_rent",
            "status",
            "number_of_days",
            "owner",
        ]

    def get_total_daily_rent(self, obj):
        return obj.equipment.daily_rental * (obj.start_date - obj.end_date).days

    def get_total_hourly_rent(self, obj):

        diff = (
            datetime.combine(date.today(), obj.end_time)
            - datetime.combine(date.today(), obj.start_time)
        ).total_seconds() / 3600

        return obj.equipment.hourly_rental * diff

    def get_number_of_days(self, obj):
        return (
            obj.equipment.available_end_time - obj.equipment.available_start_time
        ).days

    def get_owner(self, obj):
        owner = obj.equipment.owner
        detail = {
            "first_name": owner.first_name,
            "last_name": owner.last_name,
            "address": owner.address,
            "city": owner.city,
            "state": owner.state,
            "pin_code": owner.pin_code,
        }
        if obj.equipment.show_phone_number:
            detail["phone_number"] = owner.phone_number

        return detail

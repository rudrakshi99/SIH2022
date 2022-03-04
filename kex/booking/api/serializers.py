from rest_framework import serializers
from kex import equipment

from kex.booking.models import Booking
from kex.equipment.api.serializers import EquipmentListSerializer


class BookingSerializer(serializers.ModelSerializer):
    """
    Serializer for Booking model
    """

    equipment_type = serializers.SerializerMethodField()
    brand = serializers.SerializerMethodField()
    equipment = EquipmentListSerializer()

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

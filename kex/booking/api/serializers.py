from rest_framework import serializers
from kex import equipment

from kex.booking.models import Booking


class BookingSerializer(serializers.Serializer):
    """
    Serializer for Booking model
    """

    class Meta:
        model = Booking
        fields = [
            "id",
            "owner",
            "equipment",
            "equipment_type",
            "brand",
            "start_date",
            "end_date",
            "status",
            "created_at",
        ]
        read_only_fields = [
            "owner",
            "equipment",
            "equipment_type",
            "brand",
            "created_at",
        ]

        def get_equipment_type(self, obj):
            return obj.equipment.equipment_type.name

        def get_brand(self, obj):
            return obj.equipment.manufacturer.name

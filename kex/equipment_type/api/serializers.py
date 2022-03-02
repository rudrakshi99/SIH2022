from rest_framework import serializers

from kex.equipment_type.models import EquipmentType


class EquipmentTypeListSerializer(serializers.ModelSerializer):
    class Meta:
        model = EquipmentType
        fields = "__all__"

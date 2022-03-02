from attr import field
from rest_framework import serializers
from kex.brand.models import Brand
from kex.equipment_type.api.serializers import EquipmentTypeListSerializer


class BrandSerializer(serializers.ModelSerializer):
    equipment_type = EquipmentTypeListSerializer(many=True, read_only=True)

    class Meta:
        model = Brand
        fields = "__all__"

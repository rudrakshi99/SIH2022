from rest_framework.serializers import (
    HyperlinkedIdentityField,
    ModelSerializer,
    SerializerMethodField,
)
from kex.equipment.models import Equipment
from kex.users.api.serializers import UserSerializer
from kex.brand.api.serializers import BrandSerializer


class EquipmentListSerializer(ModelSerializer):
    image = SerializerMethodField()
    url = HyperlinkedIdentityField(view_name="equipment-api:detail", lookup_field="id")
    owner = UserSerializer(read_only=True)
    brand = BrandSerializer(read_only=True)

    class Meta:
        model = Equipment
        fields = [
            "id",
            "owner",
            "url",
            "brand",
            "title",
            "image",
            "price",
            "is_available",
        ]

    def get_image(self, obj):
        try:
            image = obj.image_1.url
        except:
            image = None
        return image


class EquipmentDetailSerializer(ModelSerializer):
    url = HyperlinkedIdentityField(view_name="equipment-api:detail", lookup_field="id")
    owner = UserSerializer(read_only=True)
    image_1 = SerializerMethodField()
    image_2 = SerializerMethodField()
    image_3 = SerializerMethodField()
    image_4 = SerializerMethodField()
    image_5 = SerializerMethodField()
    brand = BrandSerializer(read_only=True)

    class Meta:
        model = Equipment
        fields = [
            "id",
            "url",
            "owner",
            "brand",
            "title",
            "description",
            "price",
            "image_1",
            "image_2",
            "image_3",
            "image_4",
            "image_5",
            "is_available",
            "available_start_time",
            "available_end_time",
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

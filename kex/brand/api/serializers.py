from attr import field
from rest_framework import serializers
from kex.brand.models import Brand


class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = "__all__"

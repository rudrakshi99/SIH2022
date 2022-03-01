from rest_framework.filters import (
    SearchFilter,
    OrderingFilter,
)
from rest_framework.generics import (
    CreateAPIView,
    ListAPIView,
    UpdateAPIView,
)


from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
)

from kex.equipment_type.api.serializers import EquipmentTypeListSerializer
from django_filters import rest_framework as filters
from kex.equipment_type.models import EquipmentType


class EquipmentTypeCreateAPIView(CreateAPIView):
    queryset = EquipmentType.objects.all()
    serializer_class = EquipmentTypeListSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class EquipmentTypeUpdateAPIView(UpdateAPIView):
    queryset = EquipmentType.objects.all()
    serializer_class = EquipmentTypeListSerializer
    lookup_field = "id"
    permission_classes = [IsAuthenticated]

    def perform_update(self, serializer):
        serializer.save(user=self.request.user)


class EquipmentTypeListAPIView(ListAPIView):
    queryset = EquipmentType.objects.all()
    serializer_class = EquipmentTypeListSerializer
    filter_backends = [SearchFilter, OrderingFilter, filters.DjangoFilterBackend]
    permission_classes = [AllowAny]
    search_fields = ["name", "brand__name"]

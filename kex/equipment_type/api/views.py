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
from kex.core.utils import response_payload

from kex.equipment_type.api.serializers import EquipmentTypeListSerializer
from django_filters import rest_framework as filters
from kex.equipment_type.models import EquipmentType
from rest_framework import status
from rest_framework.response import Response
from rest_framework.exceptions import NotFound


class EquipmentTypeCreateAPIView(CreateAPIView):
    queryset = EquipmentType.objects.all()
    serializer_class = EquipmentTypeListSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        equipment_type = serializer.create(serializer.validated_data)
        return Response(
            response_payload(
                success=True,
                data=EquipmentTypeListSerializer(equipment_type).data,
                msg="Equipment Type has been created",
            ),
            status=status.HTTP_200_OK,
        )


class EquipmentTypeUpdateAPIView(UpdateAPIView):
    queryset = EquipmentType.objects.all()
    serializer_class = EquipmentTypeListSerializer
    lookup_field = "id"
    permission_classes = [IsAuthenticated]

    def get_queryset(self, *args, **kwargs):
        try:
            equipment_type = self.queryset.get(pk=kwargs.get("pk"))
            return equipment_type
        except EquipmentType.DoesNotExist:
            raise NotFound(f"Equipment Type with id {kwargs.get('pk')} doesn't exist")

    def patch(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        brand = serializer.update(
            self.get_queryset(*args, **kwargs), serializer.validated_data
        )
        return Response(
            response_payload(
                success=True,
                data=EquipmentTypeListSerializer(brand).data,
                msg="Equipment Type has been updated",
            ),
            status=status.HTTP_200_OK,
        )


class EquipmentTypeListAPIView(ListAPIView):
    queryset = EquipmentType.objects.all()
    serializer_class = EquipmentTypeListSerializer
    filter_backends = [SearchFilter, OrderingFilter, filters.DjangoFilterBackend]
    permission_classes = [AllowAny]
    search_fields = ["name", "brand__name"]

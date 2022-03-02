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

from kex.brand.api.serializers import BrandSerializer
from django_filters import rest_framework as filters
from kex.brand.models import Brand
from rest_framework import status
from rest_framework.response import Response

from kex.core.utils import response_payload
from rest_framework.exceptions import NotFound


class BrandCreateAPIView(CreateAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        brand = serializer.create(serializer.validated_data)
        return Response(
            response_payload(
                success=True,
                data=BrandSerializer(brand).data,
                msg="Brand has been created",
            ),
            status=status.HTTP_200_OK,
        )


class BrandUpdateAPIView(UpdateAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    lookup_field = "id"
    permission_classes = [IsAuthenticated]

    def get_queryset(self, *args, **kwargs):
        try:
            brand = self.queryset.get(pk=kwargs.get("pk"))
            return brand
        except Brand.DoesNotExist:
            raise NotFound(f"Brand with id {kwargs.get('pk')} doesn't exist")

    def patch(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        brand = serializer.update(
            self.get_queryset(*args, **kwargs), serializer.validated_data
        )
        return Response(
            response_payload(
                success=True,
                data=BrandSerializer(brand).data,
                msg="Brand has been updated",
            ),
            status=status.HTTP_200_OK,
        )


class BrandListAPIView(ListAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    filter_backends = [SearchFilter, OrderingFilter, filters.DjangoFilterBackend]
    permission_classes = [AllowAny]
    search_fields = ["name", "equipment_type__name"]

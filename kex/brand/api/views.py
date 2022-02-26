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


class BrandCreateAPIView(CreateAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class BrandUpdateAPIView(UpdateAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    lookup_field = "id"
    permission_classes = [IsAuthenticated]

    def perform_update(self, serializer):
        serializer.save(user=self.request.user)


class BrandListAPIView(ListAPIView):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    filter_backends = [SearchFilter, OrderingFilter, filters.DjangoFilterBackend]
    permission_classes = [AllowAny]
    search_fields = ["name"]

from django.db.models import Q
from rest_framework.filters import (
    SearchFilter,
    OrderingFilter,
)
from rest_framework.generics import (
    CreateAPIView,
    DestroyAPIView,
    ListAPIView,
    UpdateAPIView,
    RetrieveAPIView,
)


from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAuthenticatedOrReadOnly,
)

from kex.equipment.api.serializers import (
    EquipmentListSerializer,
    EquipmentDetailSerializer,
)
from .pagination import LimitOffsetPagination
from .permissions import IsOwnerOrReadOnly
from django_filters import rest_framework as filters
from .filters import EquipmentFilter
from kex.equipment.models import Equipment


class EquipmentDetailAPIView(RetrieveAPIView):
    queryset = Equipment.objects.all()
    serializer_class = EquipmentDetailSerializer
    lookup_field = "id"
    permission_classes = [AllowAny]


class EquipmentCreateAPIView(CreateAPIView):
    queryset = Equipment.objects.all()
    serializer_class = EquipmentDetailSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class EquipmentUpdateAPIView(UpdateAPIView):
    queryset = Equipment.objects.all()
    serializer_class = EquipmentDetailSerializer
    lookup_field = "id"
    permission_classes = [IsOwnerOrReadOnly, IsAuthenticated]

    def perform_update(self, serializer):
        serializer.save(user=self.request.user)


class EquipmentDeleteAPIView(DestroyAPIView):
    queryset = Equipment.objects.all()
    serializer_class = EquipmentDetailSerializer
    lookup_field = "id"
    permission_classes = [IsOwnerOrReadOnly, IsAuthenticated]


class EquipmentListAPIView(ListAPIView):
    serializer_class = EquipmentListSerializer
    filter_backends = [SearchFilter, OrderingFilter, filters.DjangoFilterBackend]
    permission_classes = [AllowAny]
    search_fields = [
        "title",
        "description",
        "manufacturer__name",
        "equipment_type__name",
        "horsepower",
        "hourly_rental",
        "daily_rental",
        "owner__username",
        "owner__first_name",
        "owner__last_name",
    ]
    filterset_class = EquipmentFilter
    pagination_class = LimitOffsetPagination

    def get_queryset(self, *args, **kwargs):
        queryset_list = Equipment.objects.all()  # filter(user=self.request.user)
        query = self.request.GET.get("q")
        if query:
            queryset_list = queryset_list.filter(
                Q(title__icontains=query)
                | Q(description__icontains=query)
                | Q(manufacturer__name__icontains=query)
                | Q(equipment_type__name__icontains=query)
                | Q(horsepower__icontains=query)
            ).distinct()
        return queryset_list

from rest_framework.filters import (
    SearchFilter,
    OrderingFilter,
)
from rest_framework.generics import (
    CreateAPIView,
    ListAPIView,
    UpdateAPIView,
    RetrieveAPIView,
)
from django.db.models import Q

from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
)
from kex.booking.api.serializers import (
    BookingCreateSerializer,
    BookingDetailSerializer,
    BookingListSerializer,
    BookingSerializer,
    BookingUpdateSerializer,
)

from kex.booking.models import Booking
from rest_framework import status
from rest_framework.response import Response

from kex.core.utils import response_payload
from rest_framework.exceptions import NotFound
from kex.equipment.api.pagination import LimitOffsetPagination
from kex.equipment.api.permissions import IsOwnerOrReadOnly


class BookingListAPIView(ListAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingListSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [SearchFilter, OrderingFilter]
    pagination_class = LimitOffsetPagination

    search_fields = [
        "equipment__title",
        "equipment__equipment_type__name",
        "equipment__manufacturer__name",
        "customer__username",
        "equipment__eq_id",
        "customer__first_name",
        "customer__last_name",
    ]

    def get_queryset(self, *args, **kwargs):
        queryset_list = self.queryset.filter(customer=self.request.user)
        return queryset_list


class BookingCreateAPIView(CreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingCreateSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        serializer = self.serializer_class(
            data=request.data, context={"user": request.user}
        )
        serializer.is_valid(raise_exception=True)
        booking = serializer.create(serializer.validated_data)
        return Response(
            response_payload(
                success=True,
                data=BookingCreateSerializer(booking).data,
                msg="Booking has been created",
            ),
            status=status.HTTP_200_OK,
        )


class BookingUpdateAPIView(UpdateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingUpdateSerializer
    lookup_field = "id"
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]

    def get_queryset(self, *args, **kwargs):
        try:
            booking = self.queryset.get(
                pk=kwargs.get("pk"), equipment__owner=self.request.user
            )
            return booking
        except Booking.DoesNotExist:
            raise NotFound(
                f"Booking with id {kwargs.get('pk')} doesn't exist for this user"
            )

    def patch(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        booking = serializer.update(
            self.get_queryset(*args, **kwargs), serializer.validated_data
        )
        return Response(
            response_payload(
                success=True,
                data=BookingSerializer(booking, context={"request": request}).data,
                msg="Booking has been updated",
            ),
            status=status.HTTP_200_OK,
        )


class BookingRetrieveAPIView(RetrieveAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingDetailSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self, *args, **kwargs):
        queryset_list = self.queryset.filter(
            Q(customer=self.request.user) | Q(equipment__owner=self.request.user)
        )
        return queryset_list


class BookingRequestListAPIView(ListAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingListSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [SearchFilter, OrderingFilter]
    pagination_class = LimitOffsetPagination

    search_fields = [
        "equipment__title",
        "equipment__equipment_type__name",
        "equipment__manufacturer__name",
        "customer__username",
        "equipment__eq_id",
        "customer__first_name",
        "customer__last_name",
    ]

    def get_queryset(self, *args, **kwargs):
        queryset_list = self.queryset.filter(equipment__owner=self.request.user)
        return queryset_list

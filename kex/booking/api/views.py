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
from kex.booking.api.serializers import BookingSerializer

from kex.booking.models import Booking
from rest_framework import status
from rest_framework.response import Response

from kex.core.utils import response_payload
from rest_framework.exceptions import NotFound
from kex.equipment.api.pagination import LimitOffsetPagination
from kex.equipment.api.permissions import IsOwnerOrReadOnly


class BookingListAPIView(ListAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [SearchFilter, OrderingFilter]
    pagination_class = LimitOffsetPagination

    search_fields = [
        "equipment__name",
        "equipment__equipment_type__name",
        "equipment__manufacturer__name",
        "equipment__owner__username",
        "equipment__eq_id",
        "equipment__owner__first_name",
        "equipment__owner__last_name",
    ]

    def get_queryset(self, *args, **kwargs):
        queryset_list = self.queryset.filter(owner=self.request.user)
        return queryset_list


class BookingCreateAPIView(CreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        booking = serializer.create(serializer.validated_data)
        return Response(
            response_payload(
                success=True,
                data=BookingSerializer(booking).data,
                msg="Booking has been created",
            ),
            status=status.HTTP_200_OK,
        )


class BookingUpdateAPIView(UpdateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    lookup_field = "id"
    permission_classes = [IsAuthenticated, IsOwnerOrReadOnly]

    def get_queryset(self, *args, **kwargs):
        try:
            booking = self.queryset.get(pk=kwargs.get("pk"))
            return booking
        except Booking.DoesNotExist:
            raise NotFound(f"Booking with id {kwargs.get('pk')} doesn't exist")

    def patch(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        booking = serializer.update(
            self.get_queryset(*args, **kwargs), serializer.validated_data
        )
        return Response(
            response_payload(
                success=True,
                data=BookingSerializer(booking).data,
                msg="Booking has been updated",
            ),
            status=status.HTTP_200_OK,
        )

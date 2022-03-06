from django.urls.conf import path, include
from kex.booking.api.views import (
    BookingCreateAPIView,
    BookingRequestListAPIView,
    BookingRetrieveAPIView,
    BookingUpdateAPIView,
    BookingListAPIView,
)

app_name = "brand"

urlpatterns = [
    path("", BookingListAPIView.as_view(), name="booking-list"),
    path("create/", BookingCreateAPIView.as_view(), name="booking-create"),
    path("update/<int:pk>/", BookingUpdateAPIView.as_view(), name="booking-update"),
    path("detail/<int:pk>/", BookingRetrieveAPIView.as_view(), name="booking-detail"),
    path("request/", BookingRequestListAPIView.as_view(), name="booking-list-request"),
]

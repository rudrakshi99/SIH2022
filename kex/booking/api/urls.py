from django.urls.conf import path, include
from kex.booking.api.views import (
    BookingCreateAPIView,
    BookingUpdateAPIView,
    BookingListAPIView,
)

app_name = "brand"

urlpatterns = [
    path("", BookingListAPIView.as_view(), name="booking-list"),
    path("create/", BookingCreateAPIView.as_view(), name="booking-create"),
    path("update/<int:pk>/", BookingUpdateAPIView.as_view(), name="booking-update"),
]

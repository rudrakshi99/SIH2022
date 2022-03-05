from django.contrib import admin
from django.urls.conf import path, include
from kex.equipment.api.views import (
    EquipmentListAPIView,
    EquipmentCreateAPIView,
    EquipmentRatingView,
    EquipmentUpdateAPIView,
    EquipmentDeleteAPIView,
    EquipmentDetailAPIView,
)

app_name = "equipment"

urlpatterns = [
    path("", EquipmentListAPIView.as_view(), name="equipment-list"),
    path("<int:id>", EquipmentDetailAPIView.as_view(), name="detail"),
    path("create/", EquipmentCreateAPIView.as_view(), name="equipment-create"),
    path("update/<int:pk>/", EquipmentUpdateAPIView.as_view(), name="equipment-update"),
    path("update/<int:pk>/", EquipmentUpdateAPIView.as_view(), name="equipment-update"),
    path("rating/", EquipmentRatingView.as_view(), name="equipment-rating"),
]

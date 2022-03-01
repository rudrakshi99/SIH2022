from django.urls.conf import path, include
from kex.equipment_type.api.views import (
    EquipmentTypeCreateAPIView,
    EquipmentTypeListAPIView,
    EquipmentTypeUpdateAPIView,
)

app_name = "equipment_type"

urlpatterns = [
    path("", EquipmentTypeListAPIView.as_view(), name="equipment_type-list"),
    path("create/", EquipmentTypeCreateAPIView.as_view(), name="equipment_type-create"),
    path(
        "update/<int:pk>/",
        EquipmentTypeUpdateAPIView.as_view(),
        name="equipment_type-update",
    ),
]

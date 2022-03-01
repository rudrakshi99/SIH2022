from django.urls.conf import path, include
from kex.equipment_type.api.views import (
    EquipmentTypeCreateAPIView,
    EquipmentTypeListSerializer,
    EquipmentTypeUpdateAPIView,
)

app_name = "equipment_type"

urlpatterns = [
    path("", EquipmentTypeUpdateAPIView.as_view(), name="equipment_type-list"),
    path("create/", EquipmentTypeCreateAPIView.as_view(), name="equipment_type-create"),
    path(
        "update/<int:pk>/",
        EquipmentTypeListSerializer.as_view(),
        name="equipment_type-update",
    ),
]

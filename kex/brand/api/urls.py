from django.urls.conf import path, include
from kex.brand.api.views import (
    BrandCreateAPIView,
    BrandCreateAPIView,
    BrandUpdateAPIView,
    BrandListAPIView,
)

app_name = "brand"

urlpatterns = [
    path("", BrandListAPIView.as_view(), name="brand-list"),
    path("create/", BrandCreateAPIView.as_view(), name="brand-create"),
    path("update/<int:pk>/", BrandUpdateAPIView.as_view(), name="brand-update"),
]

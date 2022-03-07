from django.contrib import admin
from django.urls.conf import path, include
from kex.recommendations.views import NewUserRecommendation
app_name = "equipment"

urlpatterns = [
    path("recommend", NewUserRecommendation.as_view(), name="equipment-list"),
]

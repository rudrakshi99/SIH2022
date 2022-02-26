from django.contrib import admin
from kex.brand.models import Brand


class BrandAdmin(admin.ModelAdmin):
    search_fields = ["name"]


admin.site.register(Brand, BrandAdmin)

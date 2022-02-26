import django_filters as filters
from kex.equipment.models import Equipment


class EquipmentFilter(filters.FilterSet):
    date_gte = filters.DateFilter(field_name="available_start_time", lookup_expr="gte")
    date_lte = filters.DateFilter(field_name="available_end_time", lookup_expr="lte")
    price_gte = filters.NumberFilter(field_name="price", lookup_expr="gte")
    price_lte = filters.NumberFilter(field_name="price", lookup_expr="lte")

    class Meta:
        model = Equipment
        fields = [
            "id",
            "owner",
            "title",
        ]

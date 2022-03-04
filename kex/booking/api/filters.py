import django_filters as filters

from kex.booking.models import Booking


class BookingFilter(filters.FilterSet):
    start_date_gte = filters.DateFilter(field_name="start_date", lookup_expr="gte")
    end_date_lte = filters.DateFilter(field_name="end_date", lookup_expr="lte")
    start_time_gte = filters.TimeFilter(field_name="start_time", lookup_expr="gte")
    end_time_lte = filters.TimeFilter(field_name="end_time", lookup_expr="lte")

    class Meta:
        model = Booking
        fields = [
            "id",
            "user",
            "equipment",
            "start_time",
            "end_time",
            "start_date",
            "end_date",
            "status",
        ]

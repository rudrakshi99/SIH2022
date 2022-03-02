from rest_framework.pagination import (
    LimitOffsetPagination,
)


class PostPageNumberPagination(LimitOffsetPagination):
    default_limit = 5

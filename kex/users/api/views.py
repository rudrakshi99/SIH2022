from rest_framework import generics
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.response import Response

from rest_framework.permissions import IsAuthenticated

from kex.core.utils import response_payload
from kex.users.api.serializers import UserUpdateSerializer
from rest_framework.exceptions import AuthenticationFailed, NotFound

User = get_user_model()


class UserRetrieveUpdateView(generics.RetrieveUpdateAPIView):
    queryset = User.objects.filter(is_verified=True, is_superuser=False)
    serializer_class = UserUpdateSerializer
    permission_class = [IsAuthenticated]
    lookup_field = "uuid"

    def get_queryset(self, *args, **kwargs):
        try:
            user = self.queryset.get(uuid=kwargs.get("uuid"))
            return user
        except User.DoesNotExist:
            raise NotFound("User doesn't exists")

    def update(self, request, *args, **kwargs):
        user = self.get_queryset(*args, **kwargs)
        if user.user_id != request.user.user_id:
            raise AuthenticationFailed(f"Invalid token for uuid {kwargs.get('uuid')}")

        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.update(user, serializer.validated_data)

        return Response(
            response_payload(
                success=True,
                data=self.serializer_class(user).data,
                msg="User has been updated",
            )
        )

    def retrieve(self, request, *args, **kwargs):
        user = self.get_queryset(*args, **kwargs)
        if user.user_id != request.user.user_id:
            raise AuthenticationFailed(f"Invalid token for uuid {kwargs.get('uuid')}")

        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        return Response(
            response_payload(
                success=True,
                data=self.serializer_class(user).data,
                msg="User detail",
            )
        )
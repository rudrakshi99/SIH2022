from django.contrib import admin
from django.contrib.auth import admin as auth_admin
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _

from kex.users.forms import UserAdminChangeForm, UserAdminCreationForm

User = get_user_model()


@admin.register(User)
class UserAdmin(auth_admin.UserAdmin):

    form = UserAdminChangeForm
    add_form = UserAdminCreationForm
    fieldsets = (
        (
            None,
            {
                "fields": (
                    "profile_picture",
                    "username",
                    "password",
                    "is_verified",
                )
            },
        ),
        (
            _("Personal info"),
            {"fields": ("first_name", "last_name", "email", "phone_number")},
        ),
        (
            _("Secondary info"),
            {
                "fields": (
                    "secondary_phone_number",
                    "address",
                    "city",
                    "state",
                    "pin_code",
                )
            },
        ),
        (
            _("Permissions"),
            {
                "fields": (
                    "is_active",
                    "is_staff",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                ),
            },
        ),
        (_("Important dates"), {"fields": ("last_login", "date_joined")}),
    )
    list_display = [
        "uuid",
        "user_id",
        "username",
        "first_name",
        "last_name",
        "is_verified",
        "phone_number",
    ]
    search_fields = ["first_name", "last_name", "uuid"]

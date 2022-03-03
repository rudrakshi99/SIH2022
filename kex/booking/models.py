from django.db import models
from kex.equipment.models import Equipment
from kex.users.models import User

booking_status_choice = (
    ("Pending", "Pending"),
    ("Accepted", "Accepted"),
    ("Rejected", "Rejected"),
    ("Cancelled", "Cancelled"),
    ("Inprogress", "Inprogress"),
    ("Completed", "Completed"),
)


class Booking(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    equipment = models.ForeignKey(Equipment, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    start_time = models.TimeField()
    end_time = models.TimeField()
    status = models.CharField(
        choices=booking_status_choice, max_length=20, default="Pending"
    )
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username + " - " + self.equipment.title

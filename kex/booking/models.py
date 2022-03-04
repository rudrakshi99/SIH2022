from django.db import models
from kex.equipment.models import Equipment
from kex.users.models import User
from django.db.models import Max

booking_status_choice = (
    ("Pending", "Pending"),
    ("Accepted", "Accepted"),
    ("Rejected", "Rejected"),
    ("Cancelled", "Cancelled"),
    ("Inprogress", "Inprogress"),
    ("Completed", "Completed"),
)


class Booking(models.Model):
    booking_id = models.CharField(editable=False, max_length=10)
    customer = models.ForeignKey(User, on_delete=models.CASCADE)
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
        return self.customer.username + " - " + self.equipment.title

    def save(self, *args, **kwargs):
        if not self.booking_id:
            max = Booking.objects.aggregate(id_max=Max("id"))["id_max"]
            self.booking_id = "{}{:05d}".format(
                "BK", (max + 1) if max is not None else 1
            )
        super().save(*args, **kwargs)

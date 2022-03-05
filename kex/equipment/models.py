from django.db import models
from kex.brand.models import Brand
from kex.equipment_type.models import EquipmentType
from kex.users.models import User
from django.urls import reverse
from django.db.models import Max
from django.core.validators import MaxValueValidator, MinValueValidator


def upload_location(instance, filename):
    return "/".join(["EquipmentImages", str(instance.title), filename])


condition_choice = (
    ("New", "New"),
    ("Used", "Used"),
)


class Equipment(models.Model):
    title = models.CharField(max_length=200)
    eq_id = models.CharField(editable=False, max_length=10)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    manufacturer = models.ForeignKey(Brand, on_delete=models.CASCADE)
    equipment_type = models.ForeignKey(EquipmentType, on_delete=models.CASCADE)
    equipment_location = models.CharField(max_length=200)
    description = models.TextField()
    daily_rental = models.IntegerField(default=0)
    hourly_rental = models.IntegerField(default=0)
    image_1 = models.ImageField(blank=True, upload_to=upload_location, null=True)
    image_2 = models.ImageField(blank=True, upload_to=upload_location, null=True)
    image_3 = models.ImageField(blank=True, upload_to=upload_location, null=True)
    image_4 = models.ImageField(blank=True, upload_to=upload_location, null=True)
    image_5 = models.ImageField(blank=True, upload_to=upload_location, null=True)
    available_start_time = models.DateField()
    available_end_time = models.DateField()
    model = models.CharField(max_length=200, blank=True)
    manufacturing_year = models.IntegerField(default=0)
    condition = models.CharField(
        max_length=200, choices=condition_choice, default="New"
    )
    horsepower = models.IntegerField(default=0)
    width = models.IntegerField(default=0)
    height = models.IntegerField(default=0)
    is_available = models.BooleanField(default=True)
    show_phone_number = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("equipment:detail", kwargs={"id": self.id})

    def save(self, *args, **kwargs):
        if not self.eq_id:
            max = Equipment.objects.aggregate(id_max=Max("id"))["id_max"]
            self.eq_id = "{}{:05d}".format("EQ", (max + 1) if max is not None else 1)
        super().save(*args, **kwargs)


class EquipmentRating(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    equipment = models.ForeignKey(Equipment, on_delete=models.CASCADE)
    rating = models.IntegerField(
        validators=[MaxValueValidator(5), MinValueValidator(1)], blank=True
    )

    def __str__(self):
        return f"{self.user.first_name} - {self.equipment.title} : {self.rating}"

    class Meta:
        unique_together = ("user", "equipment")

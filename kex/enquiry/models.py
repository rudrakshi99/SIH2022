# Django imports
from django.db import models
from django.utils.translation import ugettext_lazy as _
from kex.equipment.models import Equipment

from kex.users.admin import User

# Third party imports


class HelpCentre(models.Model):
    name = models.CharField(_("Name"), max_length=50, blank=False)
    email = models.EmailField(_("Email"), blank=True, null=True)
    phone_number = models.CharField(
        _("Phone Number"),
        max_length=10,
    )
    title = models.CharField(_("Title"), max_length=50, blank=True)
    reason = models.TextField(_("Enquiry Reason"), blank=False)

    def __str__(self):
        return str(self.name)


class PartnerDispute(models.Model):
    name = models.CharField(_("Name"), max_length=50, blank=False)
    email = models.EmailField(_("Email"), blank=True, null=True)
    phone_number = models.CharField(
        _("Phone Number"),
        max_length=10,
    )
    equipment_id = models.CharField(_("Product Id"), max_length=10)
    partner_id = models.CharField(_("Partner Id"), max_length=10)
    TOPIC = (
        (10, "Financial related"),
        (20, "Commercial and product related"),
        (30, "Breach of contract related"),
    )
    topic = models.PositiveIntegerField(choices=TOPIC)
    description = models.TextField(_("Description"), blank=False)

    def __str__(self):
        return str(self.name)

class CancelForm(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    booking_id = models.CharField(max_length=10)
    CANCEL_REASON = (
        (10, "Others"),
        (20, "Quality Related"),
        (30, "Found a better deal"),
        (40, "Owner Related"),
    )
    cancel_reason = models.PositiveIntegerField(choices=CANCEL_REASON)
    description = models.TextField(_("Description"), blank=True)
    
    def __str__(self):
        return str(self.booking_id)


class ReportEquipment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    equipment = models.ForeignKey(Equipment, on_delete=models.CASCADE)
    REPORT_REASON = (
        (10, "Others"),
        (20, "Belongs to another person"),
        (30, "Is misleading in any way"),
        (40, "harasses or advocates harassment of another person;"),
    )
    report_reason = models.PositiveIntegerField(choices=REPORT_REASON)
    description = models.TextField(_("Description"), blank=True)
    def __str__(self):
        return str(self.user.first_name)


class FeedbackForm(models.Model):
    name = models.CharField(_("Name"), max_length=50, blank=False)
    phone_number = models.CharField(
        _("Phone Number"),
        max_length=10,
    )
    description = models.TextField(_("Description"), blank=False)
    def __str__(self):
        return str(self.name)
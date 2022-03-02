# Django imports
from django.db import models
from django.utils.translation import ugettext_lazy as _

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
    partner_id = models.CharField(_("Partner Id"), max_length=10)
    TOPIC = (
        (10, "Financial related"),
        (20, "Commercial and product related"),
        (30, "Breach of contract related"),
    )
    topic = models.PositiveIntegerField(choices=TOPIC)
    description = models.TextField(_("Description"), blank=False)

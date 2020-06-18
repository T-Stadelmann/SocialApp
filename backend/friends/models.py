from django.db import models


status_choices = [
    ("OPEN", "OPEN"),
    ("ACCEPTED", "ACCEPTED"),
    ("REJECTED", "REJECTED")
]


class Friends(models.Model):
    status = models.CharField(
        verbose_name='status',
        max_length=100,
        choices=status_choices
    )
    created_date = models.DateTimeField(
        auto_now=True,
    )

    sent_from = models.IntegerField()

    sent_to = models.IntegerField()





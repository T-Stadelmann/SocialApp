# Create your views here.
from django.db import models


class ThingsUserLikes(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=100,
    )

    def __str__(self):
        return self.name


from django.db import models
from django.contrib.auth import get_user_model


User = get_user_model()

class Images(models.Model):
    image_title = models.CharField(
        verbose_name='image_title',
        max_length=100,
        null=True,
        blank=True
    )
    image = models.ImageField(
        upload_to='images',
        blank=True,
        null=True
    )
    image_author = models.ForeignKey(to=User, related_name='image_author', on_delete=models.CASCADE)



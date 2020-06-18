from django.db import models
from django.contrib.auth import get_user_model

from images.models import Images

User = get_user_model()


class Posts(models.Model):
    title = models.CharField(
        verbose_name='title',
        max_length=100,
    )
    text_content = models.CharField(
        verbose_name="text_content",
        max_length=500,
    )
    liked_count = models.IntegerField(
        verbose_name="liked_count",
        default=0,
    )
    posted_date = models.DateTimeField(
        auto_now=True,
    )

    external_link_content = models.CharField(
        verbose_name="external_link_content",
        max_length=255,
        null=True,
        blank=True,
    )

    author = models.ForeignKey(to=User, related_name='author', on_delete=models.CASCADE)
    likes = models.ManyToManyField(to=User, related_name="likes", blank=True)
    shared = models.ManyToManyField(to=User, related_name="shared", blank=True)
    images = models.ManyToManyField(to=Images, related_name="images", blank=True)

    def __str__(self):
        return self.title

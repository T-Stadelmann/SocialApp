from django.contrib.auth import get_user_model
from django.db import models

from posts.models import Posts

User = get_user_model()


class Comments(models.Model):
    comment_content = models.CharField(
        verbose_name="comment_content",
        max_length=500,
    )

    author = models.ForeignKey(to=User, related_name='cauthor', on_delete=models.CASCADE)
    posts = models.ForeignKey(to=Posts, related_name="cposts", on_delete=models.CASCADE)

    def __str__(self):
        return self.comment_content

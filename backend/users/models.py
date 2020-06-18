from django.contrib.auth.models import AbstractUser
from django.db import models

from things_user_likes.models import ThingsUserLikes


class User(AbstractUser):
    # Field used for authentication
    USERNAME_FIELD = 'email'

    # Additional fields required when using createsuperuser (USERNAME_FIELD and passwords are always required)
    REQUIRED_FIELDS = ['username', 'first_name']

    email = models.EmailField(unique=True)
    username = models.CharField(max_length=255, null=True, blank=True)
    avatar = models.ImageField(upload_to='avatar', blank=True, null=True)
    banner = models.ImageField(upload_to='banner', blank=True, null=True)
    location = models.CharField(max_length=255, null=True, blank=True)
    about_me = models.CharField(max_length=255, null=True, blank=True)
    things_user_likes = models.ManyToManyField(to=ThingsUserLikes, related_name='things_user_likes')
    following = models.ManyToManyField('self', blank=True, symmetrical=False)
    friends = models.ManyToManyField('self', blank=True, symmetrical=True)

    def __str__(self):
        return f'{self.first_name} {self.last_name} ({self.username})'

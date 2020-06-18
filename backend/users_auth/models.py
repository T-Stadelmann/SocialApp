from django.contrib.auth.models import AbstractUser
from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

token_choices = [
    ("PASSWORD", "PASSWORD"),
    ("SIGNUP", "SIGNUP")
]


class UserAuth(models.Model):
    token = models.CharField(max_length=6, null=True, blank=True)
    token_type = models.CharField(max_length=20, blank=True, null=True, choices=token_choices)
    user = models.ForeignKey(to=User, blank=True, related_name="usertoken", on_delete=models.CASCADE)


from rest_framework import serializers
from users_auth.models import UserAuth


class UserAuthSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserAuth
        fields = ['token', 'token_type', 'user']
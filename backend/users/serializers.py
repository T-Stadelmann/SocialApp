from django.contrib.auth import get_user_model
from rest_framework import serializers

from things_user_likes.serializers import ThingsUserLikesSerializer

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username', 'first_name', 'last_name','avatar']

    def __str__(self):
        return self.first_name + " " + self.last_name + " (" + self.username + ")"


class UserProfileSerializer(serializers.ModelSerializer):
    things_user_likes = ThingsUserLikesSerializer(many=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'location', 'about_me', 'things_user_likes', 'friends', 'following', 'avatar', 'banner']


class UserPublicSerializer(serializers.ModelSerializer):
    things_user_likes = ThingsUserLikesSerializer(many=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'location', 'about_me', 'things_user_likes', 'avatar', 'banner', 'friends', 'following']
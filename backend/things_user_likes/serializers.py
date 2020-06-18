from rest_framework import serializers

from things_user_likes.models import ThingsUserLikes


class ThingsUserLikesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ThingsUserLikes
        fields = ['name']

from rest_framework import serializers
from friends.models import Friends


class FriendSerializer(serializers.ModelSerializer):

    class Meta:
        model = Friends
        fields = ['sent_from', 'sent_to', 'created_date', 'status']

class FriendRequestSerializer(serializers.ModelSerializer):

    class Meta:
        model = Friends
        fields = ['status']

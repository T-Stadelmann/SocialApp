from rest_framework import serializers
from images.models import Images

class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Images
        fields = ['image_title', 'image', 'image_author']

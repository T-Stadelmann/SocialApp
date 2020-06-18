from rest_framework import serializers
from posts.models import Posts
from users.serializers import UserSerializer


class PostSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    liked_count = serializers.SerializerMethodField()
    logged_in_user_liked = serializers.SerializerMethodField()

    class Meta:
        model = Posts
        fields = ['id', 'title', 'text_content', 'liked_count', 'posted_date', 'author', 'likes', 'shared', 'images', 'external_link_content', 'logged_in_user_liked']

    def get_liked_count(self, obj):
        return obj.likes.count()

    def get_logged_in_user_liked(self,obj):
        if obj.author.id in obj.likes.related_val:
            return True
        else:
            return False


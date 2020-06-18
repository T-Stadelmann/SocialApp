from rest_framework import serializers
from comments.models import Comments
from posts.serializers import PostSerializer
from users.serializers import UserSerializer


class CommentSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)
    post = PostSerializer(read_only=True)

    class Meta:
        model = Comments
        fields = ['comment_content', 'post', 'author']

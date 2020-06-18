# Create your views here.
from rest_framework import status
from rest_framework.generics import ListCreateAPIView, GenericAPIView
from rest_framework.response import Response

from comments.models import Comments
from comments.serializers import CommentSerializer
from comments.permissions import IsOwnerOrReadOnly


class GetCreateAllComments(GenericAPIView):
    serializer_class = CommentSerializer
    queryset = Comments.objects.all()
    permission_classes = [IsOwnerOrReadOnly]

    def get(self, request, pk):
        post_comments = self.queryset.filter(posts_id=pk)
        serializer = self.get_serializer(post_comments, many=True)
        return Response(serializer.data)

    def post(self, request, pk):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(author=self.request.user, posts_id=pk)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

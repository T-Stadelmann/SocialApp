# Create your views here.
from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView
from rest_framework.response import Response
from django.db.models import Q

from posts.models import Posts
from posts.serializers import PostSerializer
from posts.permissions import IsOwnerOrReadOnly


User = get_user_model()

send_mail(
    'Subject here',
    'Here is the message.',
    'from@example.com',
    ['to@example.com'],
    fail_silently=False,
    )


class GetCreateAllPosts(ListCreateAPIView):
    serializer_class = PostSerializer
    queryset = Posts.objects.all()

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)
        to_email = []
        current_user = self.request.user
        current_user_friends = current_user.friends.all()
        for friend in current_user_friends:
            to_email.append(friend.email)
        current_user_first_name = current_user.first_name
        current_user_last_name = current_user.last_name
        current_user_username = current_user.username
        from_email = "email@email.com"
        header = current_user_first_name + " " + current_user_last_name + " made a new post.."
        html_message = "<h1>Hi!</h1><br><h2>" + current_user_first_name + " " + current_user_last_name + " (" + current_user_username + ") made a new post. <br> You should probably go check it out..</h2>"
        send_mail(header, "", from_email, to_email, html_message=html_message)


class GetUpdateDeletePost(RetrieveUpdateDestroyAPIView):
    queryset = Posts.objects.all()
    serializer_class = PostSerializer
    permission_classes = [IsOwnerOrReadOnly]



class TogglePostLike(GenericAPIView):
    queryset = Posts.objects.all()
    serializer_class = PostSerializer

    def post(self, request, *args, **kwargs):
        post = self.get_object()
        user = self.request.user
        user_likes_post = user in post.likes.all()
        if user_likes_post:
            post.likes.remove(user)
        else:
            post.likes.add(user)
        return Response(self.get_serializer(post).data)


class GetAllLikedPosts(ListCreateAPIView):
    serializer_class = PostSerializer
    queryset = Posts.objects.all()
    permission_classes = [IsOwnerOrReadOnly]

    def list(self, request, *args, **kwargs):
        user = self.request.user
        user_id = user.id
        posts = self.queryset.filter(likes=user_id)
        serializer = self.get_serializer(posts, many=True)
        return Response(serializer.data)


class GetAllUserPosts(ListCreateAPIView):
    serializer_class = PostSerializer
    queryset = Posts.objects.all()
    permission_classes = [IsOwnerOrReadOnly]

    def list(self, request, pk):
        queryset = self.filter_queryset(self.get_queryset())
        new_queryset = queryset.filter(author_id=pk)

        serializer = self.get_serializer(new_queryset, many=True)
        return Response(serializer.data)


class GetALlFollowingPosts(ListCreateAPIView):
    serializer_class = PostSerializer
    queryset = Posts.objects.all()
    permission_classes = [IsOwnerOrReadOnly]

    def list(self, request, *args, **kwargs):
        user = self.request.user
        current_user_following = user.following.all()
        following_users_id = []
        for following in current_user_following:
            following_users_id.append(following.id)
        posts = self.queryset.filter(author_id__in=following_users_id)
        serializer = self.get_serializer(posts, many=True)
        return Response(serializer.data)


class GetALlFriendPosts(ListCreateAPIView):
    serializer_class = PostSerializer
    queryset = Posts.objects.all()
    permission_classes = [IsOwnerOrReadOnly]

    def list(self, request, *args, **kwargs):
        current_user = self.request.user
        posts = self.queryset.filter(author__in=current_user.friends.all()).order_by('posted_date')
        serializer = self.get_serializer(posts, many=True)
        return Response(serializer.data)


class SearchAllPosts(GenericAPIView):
    serializer_class = PostSerializer
    queryset = Posts.objects.all()
    permission_classes = [IsOwnerOrReadOnly]

    def get(self, request, pk):
        posts = self.queryset.filter(Q(text_content__contains=pk) | Q(title__contains=pk)).order_by('posted_date')
        serializer = self.get_serializer(posts, many=True)
        return Response(serializer.data)

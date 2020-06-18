# Create your views here.
from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from rest_framework.generics import ListCreateAPIView, GenericAPIView
from rest_framework.response import Response

from users.serializers import UserProfileSerializer
from followers.permissions import IsOwnerOrReadOnly

User = get_user_model()

send_mail(
    'Subject here',
    'Here is the message.',
    'from@example.com',
    ['to@example.com'],
    fail_silently=False,
    )


class ToggleUserFollow(GenericAPIView):
    queryset = get_user_model()
    serializer_class = UserProfileSerializer

    def post(self, request, *args, **kwargs):
        user_to_follow = self.get_object()
        current_user = self.request.user
        current_user_following = user_to_follow in current_user.following.all()

        if current_user_following:
            current_user.following.remove(user_to_follow)
        else:
            current_user.following.add(user_to_follow)
            to_email = [user_to_follow.email]
            following_first_name = user_to_follow.first_name
            current_user_first_name = current_user.first_name
            current_user_last_name = current_user.last_name
            current_user_username = current_user.username
            from_email = "email@email.com"
            header = "You're being followed.."
            html_message = "<h1>Don't worry " + following_first_name + " its good!</h1><br><br><h2>" + current_user_first_name + " " + current_user_last_name + " (" + current_user_username + ") started following you!</h2><br><br>" + "<h2>" + "ohhh so popular!</h2>"
            send_mail(header, "", from_email, to_email, html_message=html_message)

        return Response(status=200)


class GetAllFollowing(ListCreateAPIView):
    queryset = get_user_model()
    serializer_class = UserProfileSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get(self, request):
        current_user = self.request.user
        current_user_following = current_user.following.all()
        serializer = self.get_serializer(current_user_following, many=True)
        return Response(serializer.data)


class GetAllFollowers(ListCreateAPIView):
    queryset = get_user_model()
    serializer_class = UserProfileSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def list(self, request):
        user = self.request.user
        user_id = user.id
        all_users = get_user_model()
        following_users = all_users.objects.filter(following=user_id)
        following_users_id = []
        for following_user in following_users:
            following_users_id.append(following_user.id)

        followers = all_users.objects.filter(id__in=following_users_id)
        serializer = self.get_serializer(followers, many=True)
        return Response(serializer.data)

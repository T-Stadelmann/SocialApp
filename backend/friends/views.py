# Create your views here.
from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from django.db.models import Q
from rest_framework import status
from rest_framework.generics import ListCreateAPIView, GenericAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.response import Response

from .permissions import IsOwnerOrReadOnly
from .models import Friends
from .serializers import FriendSerializer
from users.serializers import UserProfileSerializer

User = get_user_model()

send_mail(
    'Subject here',
    'Here is the message.',
    'from@example.com',
    ['to@example.com'],
    fail_silently=False,
    )


class SendFriendRequest(GenericAPIView):
    queryset = get_user_model()
    serializer_class = FriendSerializer

    def post(self, request, pk):
        data = {
            "sent_from": self.request.user.id,
            "status": "OPEN",
            "sent_to": pk,
        }
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        current_user = self.request.user
        user_to_friend = self.get_object()

        to_email = [user_to_friend.email]
        friend_first_name = user_to_friend.first_name
        current_user_first_name = current_user.first_name
        current_user_last_name = current_user.last_name
        current_user_username = current_user.username
        from_email = "email@email.com"
        header = "Someone wants to be your friend!.."
        html_message = "<h1>Hi  " + friend_first_name + "!</h1><br><h2>" + current_user_first_name + " " + current_user_last_name + " (" + current_user_username + ") wants to be your friend. <br> Sign in to Motion to accept!</h2>"
        send_mail(header, "", from_email, to_email, html_message=html_message)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class GetUpdateDeleteFriendRequests(RetrieveUpdateDestroyAPIView):
    queryset = Friends.objects.all()
    serializer_class = FriendSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def patch(self, request, *args, **kwargs):
        instance = self.get_object()
        sent_from = instance.sent_from
        sent_to = instance.sent_to
        request_status = request.data['status']
        data = {"sent_from": sent_from, "sent_to": sent_to, "status": request_status}
        serializer = self.get_serializer(instance, data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        if request_status == "ACCEPTED":
            current_user = self.request.user
            friend_user = sent_to
            current_user.friends.add(friend_user)

            user_to_friend = User.objects.get(id=sent_to)

            to_email = [user_to_friend.email]
            friend_first_name = user_to_friend.first_name
            current_user_first_name = current_user.first_name
            current_user_last_name = current_user.last_name
            current_user_username = current_user.username
            from_email = "email@email.com"
            header = "Someone likes you back!.."
            html_message = "<h1>Hi  " + friend_first_name + "!</h1><br><h2>You and " + current_user_first_name + " " + current_user_last_name + " (" + current_user_username + ") are now friends. <br> Go say hi..</h2>"
            send_mail(header, "", from_email, to_email, html_message=html_message)

        return Response(serializer.data)


class GetAllFriends(ListCreateAPIView):
    queryset = get_user_model()
    serializer_class = UserProfileSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get(self, request):
        current_user = self.request.user
        current_user_friends = current_user.friends.all()
        serializer = self.get_serializer(current_user_friends, many=True)
        return Response(serializer.data)


class GetAllFriendRequests(ListAPIView):
    queryset = Friends.objects.all()
    serializer_class = FriendSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get(self, request):
        current_user = self.request.user
        your_requests = self.queryset.filter(Q(sent_to=current_user.id) | Q(sent_from=current_user.id))
        serializer = self.get_serializer(your_requests, many=True)
        return Response(serializer.data)
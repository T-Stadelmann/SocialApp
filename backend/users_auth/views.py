# Create your views here.
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from django.core.mail import send_mail
from random import randint

from users_auth.serializers import UserAuthSerializer
from users_auth.models import UserAuth


User = get_user_model()

send_mail(
    'Subject here',
    'Here is the message.',
    'from@example.com',
    ['to@example.com'],
    fail_silently=False,
    )


class SendRegisterEmail(GenericAPIView):
    serializer_class = UserAuthSerializer
    queryset = User.objects.all()
    authentication_classes = []
    permission_classes = []

    def post(self, request):
        user_email = self.request.data['email']

        try:
            new_user = User.objects.get(username=user_email)
            if new_user and new_user.is_active == 1:
                return Response("User already exists")
            if new_user and new_user.is_active == 0:
                new_user.delete()
        except:
            pass
        new_user = User.objects.create_user(username=user_email, email=user_email, is_active=0)
        new_user.save()

        verify_token = str(randint(100000, 999999))
        new_token_request = UserAuth(token=verify_token, token_type="SIGNUP", user=new_user)
        new_token_request.save()

        to_email = [user_email]
        from_email = "email@email"
        header = "Please verify your account with Motion"
        html_message = "<h1>Welcome to Motion!</h1><br><br><h2>To verify your account use this code:</h2><br><br>" +"<h2>" + verify_token + "</h2>"
        send_mail(header, "", from_email, to_email, html_message=html_message)

        return Response(status=200)


class RegisterUser(GenericAPIView):
    serializer_class = UserAuthSerializer
    queryset = User.objects.all()
    authentication_classes = []
    permission_classes = []

    def post(self, request):
        verify_token = self.request.data['verify_token']
        email = self.request.data['email']
        try:
            new_user = User.objects.get(username=email)
            if new_user and new_user.is_active == 1:
                return Response("User already verified")
        except:
            return Response("User already verified or doesn't exist")

        user_id = new_user.id
        user_auth_object = UserAuth.objects.filter(user__id=user_id, token_type="SIGNUP")

        serializer = self.get_serializer(user_auth_object, many=True)
        user_auth_data = list(serializer.data)
        db_token = user_auth_data[0]['token']
        if verify_token == db_token:
            user_auth_object.delete()
            username = self.request.data['username']
            first_name = self.request.data['first_name']
            last_name = self.request.data['last_name']
            password = self.request.data['password']
            new_user = User.objects.get(username=email)

            new_user.set_password(password)
            new_user.is_active = 1
            new_user.first_name = first_name
            new_user.last_name = last_name
            new_user.username = username
            new_user.save()

            return Response("Success!")
        else:
            return Response("Invalid token")


class SendPasswordReset(GenericAPIView):
    serializer_class = UserAuthSerializer
    queryset = User.objects.all()
    authentication_classes = []
    permission_classes = []

    def post(self, request):
        user_email = self.request.data['email']

        try:
            current_user = User.objects.get(email=user_email)
        except:
            return Response("User doesn't exist")

        user_id = current_user.id
        try:
            user_auth_object = UserAuth.objects.filter(user__id=user_id, token_type="PASSWORD")
            if user_auth_object:
                user_auth_object.delete()
        except:
            pass

        password_token = str(randint(100000, 999999))
        new_pw_request = UserAuth(token=password_token, token_type="PASSWORD", user=current_user)
        new_pw_request.save()

        name = current_user.first_name
        to_email = [user_email]
        from_email = "email@pemail.com"
        header = "Motion Password Reset"
        html_message = "<h1>Forgot your password, " + name + "?</h1><br><br><h2>To reset it use this code:</h2><br><br>" +"<h2>" + password_token + "</h2>"
        send_mail(header, "", from_email, to_email, html_message=html_message)

        return Response(status=200)


class ResetPassword(GenericAPIView):
    serializer_class = UserAuthSerializer
    queryset = User.objects.all()
    authentication_classes = []
    permission_classes = []

    def post(self, request):
        password_token = self.request.data['password_token']
        email = self.request.data['email']
        try:
            current_user = User.objects.get(email=email)
        except:
            return Response("User already verified or doesn't exist")

        try:
            user_id = current_user.id
            user_auth_object = UserAuth.objects.filter(user__id=user_id, token_type="PASSWORD")
        except:
            return Response("Invalid request")

        serializer = self.get_serializer(user_auth_object, many=True)
        user_auth_data = list(serializer.data)
        db_token = user_auth_data[0]['token']
        if password_token == db_token:
            user_auth_object.delete()
            password = self.request.data['password']
            new_user = User.objects.get(id=user_id)
            new_user.set_password(password)
            new_user.save()
            return Response("Success! Password was reset")
        else:
            return Response("Invalid token")

from rest_framework_simplejwt import views as jwt_views
from django.urls import path

from users_auth.views import SendRegisterEmail, RegisterUser, SendPasswordReset, ResetPassword

urlpatterns = [
    path('token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', jwt_views.TokenVerifyView.as_view(), name='token_refresh'),
    path('registration/', SendRegisterEmail.as_view()),
    path('registration/validation/', RegisterUser.as_view()),
    path('password-reset/', SendPasswordReset.as_view()),
    path('password-reset/validation/', ResetPassword.as_view()),
]
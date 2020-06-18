from django.urls import path

from users.views import GetAllUsers, GetUpdateProfile, GetSingleUser, SearchAllUsers

urlpatterns = [
    path('', GetAllUsers.as_view()),
    path('me/', GetUpdateProfile.as_view()),
    path('<int:pk>/', GetSingleUser.as_view()),
    path('search=<str:pk>/', SearchAllUsers.as_view())

]
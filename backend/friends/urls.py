from django.urls import path

from friends.views import SendFriendRequest, GetUpdateDeleteFriendRequests, GetAllFriends, GetAllFriendRequests

urlpatterns = [
    path('requests/', GetAllFriendRequests),
    path('request/<int:pk>/', SendFriendRequest.as_view()),
    path('requests/<int:pk>/', GetUpdateDeleteFriendRequests.as_view()),
    path('', GetAllFriends.as_view()),

]
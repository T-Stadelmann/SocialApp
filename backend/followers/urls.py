from django.urls import path

from followers.views import ToggleUserFollow, GetAllFollowers, GetAllFollowing

urlpatterns = [
    path('toggle-follow/<int:pk>/', ToggleUserFollow.as_view()),
    path('followers/', GetAllFollowers.as_view()),
    path('following/', GetAllFollowing.as_view()),

]
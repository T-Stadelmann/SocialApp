from django.urls import path

from posts.views import GetCreateAllPosts, GetUpdateDeletePost, TogglePostLike, GetAllLikedPosts, GetAllUserPosts, \
    GetALlFollowingPosts, SearchAllPosts, GetALlFriendPosts

urlpatterns = [
    path('', GetCreateAllPosts.as_view()),
    path('<int:pk>/', GetUpdateDeletePost.as_view()),
    path('toggle-like/<int:pk>/', TogglePostLike.as_view()),
    path('likes/', GetAllLikedPosts.as_view()),
    path('friends/', GetALlFriendPosts.as_view()),
    path('following/', GetALlFollowingPosts.as_view()),
    path('user/<int:pk>/', GetAllUserPosts.as_view()),
    path('search=<str:pk>/', SearchAllPosts.as_view())
]
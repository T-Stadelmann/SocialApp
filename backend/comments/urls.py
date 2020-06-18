from django.urls import path
from comments.views import GetCreateAllComments

urlpatterns = [
    path('<int:pk>/', GetCreateAllComments.as_view())
]
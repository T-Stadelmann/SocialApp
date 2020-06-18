from django.conf import settings
from django.conf.urls.static import static

from django.contrib import admin
from django.urls import path, include
from rest_framework.documentation import include_docs_urls


api_patterns = [
    path('admin/', admin.site.urls),
    path('social/posts/', include('posts.urls')),
    path('social/followers/', include('followers.urls')),
    path('social/comments/', include('comments.urls')),
    path('social/friends/', include('friends.urls')),
    path('users/', include('users.urls')),
    path('docs/', include_docs_urls(title='Django Template', schema_url='/', permission_classes=[])),
    path('auth/', include('users_auth.urls'))
]

urlpatterns = [
    path('backend/api/', include(api_patterns)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

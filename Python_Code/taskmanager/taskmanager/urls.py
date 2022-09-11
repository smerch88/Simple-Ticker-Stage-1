from django.contrib import admin
from django.urls import path, include, re_path

urlpatterns = [
    path('backend/admin/', admin.site.urls),
    path('backend/', include('main.urls')),
    path('backend/auth/', include('djoser.urls')),
    re_path(r'^auth/', include('djoser.urls.authtoken'))  # /token/login/ to get token, /logout/
]

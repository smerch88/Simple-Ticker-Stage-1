from django.contrib import admin
from django.urls import path, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets
from main import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls')),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]

from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('backend/', include('main.urls')),
    path('auth/', include('djoser.urls')),
    re_path(r'^auth/', include('djoser.urls.authtoken'))  # /token/login/ to get token, /logout/
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

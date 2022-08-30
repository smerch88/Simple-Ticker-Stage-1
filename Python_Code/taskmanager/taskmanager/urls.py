from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('backend/', include([
            path('admin/', admin.site.urls),
            path('', include('main.urls')),
        ])
    ),
]

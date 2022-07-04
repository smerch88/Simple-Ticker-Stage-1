from django.contrib import admin

# Register your models here.

from .models import Meeting, Room

admin.site.register(Meeting)
admin.site.register(Room)
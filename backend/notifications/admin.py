from django.contrib import admin
from notifications.models import Notification
from .models import Profile

# Register your models here.
admin.site.register(Notification)
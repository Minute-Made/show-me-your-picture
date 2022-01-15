from django.contrib import admin
from .models import Picture, PicturePrivacy

# Register your models here.
admin.site.register(Picture)
admin.site.register(PicturePrivacy)
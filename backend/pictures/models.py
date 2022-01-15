from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from uuid import uuid4
import os

# Create your models here.
class Picture(models.Model):
    def date_upload_to(instance, filename):
      uuid_name = uuid4().hex
      extension = os.path.splitext(filename)[-1].lower()
      return '/'.join([
        'image',
        timezone.now().strftime('%Y/%m/%d'),
        uuid_name + extension,
      ])

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.TextField(blank=True)
    description = models.TextField(blank=True)
    author = models.TextField(blank=True)
    image = models.ImageField(upload_to=date_upload_to)
    exchange_user = models.ManyToManyField(User, blank=True, related_name='exchange_pic', through='PicturePrivacy')

    def __str__(self):
        return f'ownername = {self.user.username}, author = {self.author}, title = {self.title}, description = {self.description}'

class PicturePrivacy(models.Model):
    picture = models.ForeignKey(Picture, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=timezone.now)
    
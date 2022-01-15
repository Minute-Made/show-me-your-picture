from pickle import FALSE
from django.db import models
from django.contrib.auth.models import User
from pictures.models import Picture
from django.db.models.signals import post_save  # 추가
from django.dispatch import receiver   # 추가

# Create your models here.
class Notification(models.Model):
    requestee = models.ForeignKey(User, on_delete=models.CASCADE)
    requestor = models.ForeignKey(User, on_delete=models.CASCADE)
    requestee_pic = models.ForeignKey(Picture, on_delete=models.CASCADE)
    requestor_pic = models.ForeignKey(Picture, on_delete=models.CASCADE)
    check_status = models.BooleanField(default=False)
    accept_status = models.BooleanField(default=False)

    def __str__(self):
        return f'userid={self.user.id}, requestee={self.requestor.id}, requestor={self.requestor.id}, description={self.description}'


from pickle import FALSE
from django.db import models
from django.contrib.auth.models import User
from pictures.models import Picture
from django.db.models.signals import post_save  # 추가
from django.dispatch import receiver   # 추가

# Create your models here.
class Notification(models.Model):
    requestee = models.ForeignKey(User, on_delete=models.CASCADE)
    requestor_pic = models.ForeignKey(Picture, on_delete=models.CASCADE)
    my_pic_id = models.IntegerField()
    check_status = models.BooleanField(default=False)

    def __str__(self):
        return f'id={self.id}, requestee={self.requestee.id}, requestor_pic={self.requestor_pic.id}, my_pic_id={self.my_pic_id} check_status={self.check_status}, accept_status={self.accept_status}'

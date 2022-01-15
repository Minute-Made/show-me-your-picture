from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save  # 추가
from django.dispatch import receiver   # 추가

# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, primary_key=True, on_delete=models.CASCADE)
    nickname = models.CharField(max_length=20, blank=True)
    description = models.CharField(max_length=100, blank=True)
    gender = models.CharField(max_length=1, blank=True)

    def __str__(self):
        return f'userid={self.user.id}, username={self.user.username}, nickname={self.nickname}, description={self.description}'
    
    @receiver(post_save, sender=User)  
    def create_user_profile(sender, instance, created, **kwargs):        
        if created:          
            Profile.objects.create(user=instance)  
            
from django.forms import widgets
from rest_framework import serializers
from notifications.models import Notification

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ('requestee', 'requestor_pic', 'my_pic_id', 'check_status')
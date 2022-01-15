from django.forms import widgets
from rest_framework import serializers
from notifications.models import Notification

class NotificationSerializer(serializers.ModelSerializer):
    requestee_nickname = serializers.SerializerMethodField()
    requestor_pic_title = serializers.SerializerMethodField()
    requestor_pic_desc = serializers.SerializerMethodField()
    requestor_pic_author = serializers.SerializerMethodField()

    class Meta:
        model = Notification
        fields = ('id', 'requestee', 'requestor_pic', 'requestee_nickname', 'requestor_pic_title', 'requestor_pic_desc', 'requestor_pic_author',
         'requestee_pic_id', 'check_status')
    
    def get_requestee_nickname(self, obj):
        return obj.requestee.profile.nickname

    def get_requestor_pic_title(self, obj):
        return obj.requestor_pic.title
    
    def get_requestor_pic_desc(self, obj):
        return obj.requestor_pic.description
    
    def get_requestor_pic_author(self, obj):
        return obj.requestor_pic.author
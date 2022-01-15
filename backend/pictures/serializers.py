from .models import Picture
from rest_framework import serializers

class PictureSerializer(serializers.ModelSerializer):
    userid = serializers.SerializerMethodField()
    pictureid = serializers.SerializerMethodField()
    def get_userid(self, obj):
        return obj.user.id
    def get_pictureid(self, obj):
        return obj.id
    class Meta:
        model = Picture
        fields = ('userid', 'pictureid', 'title', 'description', 'author', 'image')

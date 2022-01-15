from .models import Picture
from rest_framework import serializers
from django.conf import settings

class PublicPictureSerializer(serializers.ModelSerializer):
    userid = serializers.SerializerMethodField()
    pictureid = serializers.SerializerMethodField()
    def get_userid(self, obj):
        return obj.user.id
    def get_pictureid(self, obj):
        return obj.id
    class Meta:
        model = Picture
        fields = ('userid', 'pictureid', 'title', 'description', 'author', 'image')

class PrivatePictureSerializer(serializers.ModelSerializer):
    userid = serializers.SerializerMethodField()
    pictureid = serializers.SerializerMethodField()
    image = serializers.SerializerMethodField()
    def get_userid(self, obj):
        return obj.user.id
    def get_pictureid(self, obj):
        return obj.id
    def get_image(self, obj):
        if settings.DEBUG :
            return '/media/image/private_image_show_me_your_picture.jpg'
        else :
            return 'https://show-me-your-picture.s3.ap-northeast-2.amazonaws.com/media/image/private_image_show_me_your_picture.jpg'
    class Meta:
        model = Picture
        fields = ('userid', 'pictureid', 'title', 'description', 'author', 'image')

from .models import Picture
from rest_framework import serializers

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
        return '/media/image/private_image_show_me_your_picture.jpg'
    class Meta:
        model = Picture
        fields = ('userid', 'pictureid', 'title', 'description', 'author', 'image')

from .models import Picture
from rest_framework import serializers

class PictureSerializer(serializers.ModelSerializer):
    userid = serializers.SerializerMethodField()
    def get_userid(self, obj):
        return obj.user.id
    class Meta:
        model = Picture
        fields = ('userid', 'title', 'description', 'author', 'image')

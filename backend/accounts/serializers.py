from rest_framework import serializers
from accounts.models import Profile

class UserProfileSerizlizer(serializers.ModelSerializer):
    class Meta:
        model =Profile
        fields = ('nickname','gender','description')

class URLSerializer(serializers.Serializer):
    url = serializers.URLField()

class DecodeURLSerializer(serializers.Serializer):
    url = serializers.URLField()
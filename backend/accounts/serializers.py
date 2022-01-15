from rest_framework import serializers
from accounts.models import Profile

class UserProfileSerizlizer(serializers.ModelSerializer):
    class Meta:
        model =Profile
        fields = ('nickname','gender','description')


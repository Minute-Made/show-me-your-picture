from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token

from django.contrib.auth.models import User
from . import models

# Create your views here.
class SignupView(APIView):
    def post(self, request):
        user = User.objects.create_user(username=request.data['id'], password=request.data['password'])
        profile = models.Profile(user=user, nickname=request.data['nickname'])

        user.save()
        profile.save()

        token = Token.objects.create(user=user)
        return Response({"Token": token.key})
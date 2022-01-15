from urllib import response
# from rest_framework.decorators import detail_route
from rest_framework import viewsets
from rest_framework import renderers

from notifications import serializers
from .models import Notification
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.http import JsonResponse
from django.shortcuts import redirect
from rest_framework.parsers import JSONParser
from notifications.models import Notification
from notifications.serializers import NotificationSerializer
from django.contrib.auth.models import User
from . import models
from pathlib import Path
import os, environ, requests

class JSONResponse(HttpResponse):
    """
    콘텐츠를 JSON으로 변환한 후 HttpResponse 형태로 반환합니다.
    """
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)


class NotificationView(APIView):
    def get(self, request):
        try:
            user = User.objects.get(username=request.data['id'])
        except:
            return JsonResponse({'err_msg': 'user is not exists'}, status=status.HTTP_400_BAD_REQUEST)
        
        notifications = Notification.filter(requestee=user)
        serializer = NotificationSerializer(notifications, many=True)
        return JsonResponse(serializer.data, safe=False)


        
    # def post(self, request):
    #     try:
    #         user = User.objects.get(username=request.data['id'])
    #         return JsonResponse({'err_msg': 'username exists'}, status=status.HTTP_400_BAD_REQUEST)
    #     except User.DoesNotExist:
    #         user = User.objects.create_user(username=request.data['id'], password=request.data['password'])
    #         profile = models.Profile(user=user, nickname=request.data['nickname'])            
    #         user.save()
    #         profile.save()
    #         token = Token.objects.create(user=user)
    #         return Response({"Token": token.key, "user_id": user.id})
    
    # def update():

    # def delete():

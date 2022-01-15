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
from pictures.models import Picture
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
    def get(self, request, id):
        try:
            user = User.objects.get(id=id)
        except:
            return JsonResponse({'err_msg': 'user is not exists'}, status=status.HTTP_400_BAD_REQUEST)
        
        notifications = Notification.objects.filter(requestee=user)
        serializer = NotificationSerializer(notifications, many=True)
        return JsonResponse(serializer.data, safe=False)

    def post(self, request, id):
        try:
            user = User.objects.get(id=request.POST['requestee-id'])
            my_pic_num = request.POST['my_pic_num']
            requestor_pic = Picture.objects.get(picture=request.POST['requestor-pic-url'])
        except:
            return JsonResponse({'err_msg': "Invalid Request Parameters"}, status=status.HTTP_400_BAD_REQUEST)
        
        notification = Notification.objects.create(user=user, my_pic_num=my_pic_num, requestor_pic=requestor_pic)
        notification.save()

    # def put(self, request, id, ):


    # def delete(self, request, id):


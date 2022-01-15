from urllib import response
# from rest_framework.decorators import detail_route
from rest_framework import viewsets
from rest_framework import renderers
from .models import Notification
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from notifications.models import Notification
from notifications.serializers import NotificationSerializer

class JSONResponse(HttpResponse):
    """
    콘텐츠를 JSON으로 변환한 후 HttpResponse 형태로 반환합니다.
    """
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)

class NotificationViewSet(viewsets.ModelViewSet):
    """
    이 뷰셋은 `list`와 `create`, `retrieve`, `update`, 'destroy` 기능을 자동으로 지원합니다
    """
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer


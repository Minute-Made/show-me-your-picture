# from rest_framework.decorators import detail_route
from .models import Notification
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework import status
from rest_framework.views import APIView
from django.http import JsonResponse
from notifications.models import Notification
from notifications.serializers import NotificationSerializer
from django.contrib.auth.models import User
from pictures.models import Picture
from django.http import JsonResponse

json_dumps_params = {'ensure_ascii':False}

class NotificationView(APIView):
    def get(self, request, id):
        try:
            user = User.objects.get(id=id)
        except:
            return JsonResponse({'err_msg': 'user is not exists'}, status=status.HTTP_400_BAD_REQUEST)
        
        notifications = Notification.objects.filter(requestee=user)
        serializer = NotificationSerializer(notifications, many=True)
        return JsonResponse(serializer.data, safe=False, json_dumps_params=json_dumps_params)

    def post(self, request, id):
        try:
            user = User.objects.get(id=request.data['requestee_id'])
            requestee_pic_id = request.data['requestee_pic_id']
            requestor_pic = Picture.objects.get(id=request.data['requestor_pic_id'])
        except:
            return JsonResponse({'err_msg': "Invalid Request Parameters"}, status=status.HTTP_400_BAD_REQUEST)
        
        notification = Notification.objects.create(requestee=user, my_pic_id=requestee_pic_id, requestor_pic=requestor_pic)
        notification.save()
        return JsonResponse({'success_msg': 'exchange request posted'}, status=status.HTTP_200_OK)

    def put(self, request, id):
        requestee = User.objects.get(id=id)
        selected_notification = Notification.objects.filter(requestee=requestee)
        selected_notification.update(check_status=True)
        return JsonResponse({"success_msg":"Status Updated!"}, status=200)

    def delete(self, request, id):
        selected_notification = Notification.objects.get(id=id)
        selected_notification.delete()
        return JsonResponse({"success_msg":"Delete completed!"}, status=200)
      


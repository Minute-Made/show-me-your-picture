from .serializers import PictureSerializer
from .models import Picture, User
from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework.response import Response

class PicturesView(APIView):
    def get(self, request, id):
        user = User.objects.get(id=id)
        pictures = Picture.objects.filter(user = user)
        serializer = PictureSerializer(pictures, many=True)
        return JsonResponse(serializer.data, safe=False)
    def post(self, request, id):
        user = User.objects.get(id=id)
        title = request.POST['title']
        description = request.POST['description']
        author = request.POST['author']
        picture = Picture.objects.create(
            user=user, title=title, description=description, author=author
        )
        image = request.FILES['image']
        if len(image) > 0:
            picture.image = image
            picture.save()
        serializer = PictureSerializer(picture)
        return JsonResponse(serializer.data)
class PictureView(APIView):
    def get(self, request, id, pid):
        picture = Picture.objects.get(id=pid)
        serializer = PictureSerializer(picture)
        return JsonResponse(serializer.data)
    def delete(self, request, id, pid):
        picture = Picture.objects.get(id=pid)
        picture.delete()
        return Response("Delete completed!", status=200)
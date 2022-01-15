from .serializers import PictureSerializer
from .models import Picture, User
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse

class PictureView(APIView):
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
        images = request.FILES.getlist('images')
        if len(images) > 0:
            picture.image = images[0]
            picture.save()
        serializer = PictureSerializer(picture, many=True)
        return JsonResponse(serializer.data)

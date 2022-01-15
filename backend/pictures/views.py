from .serializers import PublicPictureSerializer, PrivatePictureSerializer
from .models import Picture, PicturePrivacy, User
from rest_framework.views import APIView
from django.http import JsonResponse
from rest_framework.response import Response

json_dumps_params = {'ensure_ascii':False}

class PicturesView(APIView):
    def get(self, request, id):
        user = User.objects.get(id=id)
        public_pictures = []
        private_pictures = []
        if user == request.user:
            public_pictures = Picture.objects.filter(user=user)
        elif request.user.is_anonymous:
            private_pictures = Picture.objects.filter(user=user)
        else :
            public_pictures = Picture.objects.filter(user=user).filter(exchange_user=request.user)
            private_pictures = Picture.objects.filter(user=user).exclude(exchange_user=request.user)
        public_serializer = PublicPictureSerializer(public_pictures, many=True)
        private_serializer = PrivatePictureSerializer(private_pictures, many=True)
        return JsonResponse(public_serializer.data + private_serializer.data, safe=False, json_dumps_params=json_dumps_params)

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
        serializer = PublicPictureSerializer(picture)
        return JsonResponse(serializer.data)

class PictureView(APIView):
    def get(self, request, id, pid):
        picture = Picture.objects.get(id=pid)
        serializer = PublicPictureSerializer(picture)
        return JsonResponse(serializer.data)
    def delete(self, request, id, pid):
        picture = Picture.objects.get(id=pid)
        picture.delete()
        return Response("Delete completed!", status=200)

class PicturePrivacyView(APIView):
    def post(self, request):
        requestor = User.objects.get(id=request.data['requestor_id'])
        requestee = User.objects.get(id=request.data['requestee_id'])
        requestor_pic = Picture.objects.get(id=request.data['requestor_pic_id'])
        requestee_pic = Picture.objects.get(id=request.data['requestee_pic_id'])
        PicturePrivacy.objects.create(picture=requestor_pic, user=requestee)
        PicturePrivacy.objects.create(picture=requestee_pic, user=requestor)
        return Response("Success!", status=200)

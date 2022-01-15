from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.http import JsonResponse
from django.shortcuts import redirect
from django.contrib.auth import authenticate
from allauth.socialaccount.models import SocialAccount
from allauth.socialaccount.providers.kakao import views as kakao_view
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from dj_rest_auth.registration.views import SocialLoginView
from json.decoder import JSONDecodeError
from .serializers import  UserProfileSerizlizer
from .models import Profile

from django.contrib.auth.models import User
from . import models

from pathlib import Path
import os, environ, requests

# Create your views here.
class SignupView(APIView):
    def post(self, request):
        try:
            user = User.objects.get(username=request.data['id'])
            return JsonResponse({'err_msg': 'username exists'}, status=status.HTTP_400_BAD_REQUEST)
        except User.DoesNotExist:
            user = User.objects.create_user(username=request.data['id'], password=request.data['password'])
            profile = models.Profile(user=user, nickname=request.data['nickname'])            
            user.save()
            profile.save()
            token = Token.objects.create(user=user)
            return Response({"Token": token.key, "user_id": user.id})

class LoginView(APIView):
    def post(self, request):
        user = authenticate(username=request.data['id'], password=request.data['password'])
        if user is not None:
            token = Token.objects.get(user=user)
            return Response({"Token": token.key, "user_id": user.id})
        else:
            return Response(status=401)


BASE_DIR = Path(__file__).resolve().parent.parent
env = environ.Env()
environ.Env.read_env(env_file=os.path.join(BASE_DIR, '.env'))

BASE_URL = "http://127.0.0.1:8000/"
KAKAO_CALLBACK_URI = f"{BASE_URL}accounts/kakao/callback/"

def kakao_login(request):
    rest_api_key = env('KAKAO_REST_API_KEY')
    return redirect(
        f"https://kauth.kakao.com/oauth/authorize?client_id={rest_api_key}&redirect_uri={KAKAO_CALLBACK_URI}&response_type=code"
    )

def kakao_callback(request):
    rest_api_key = env('KAKAO_REST_API_KEY')
    code = request.GET.get("code")
    redirect_uri = KAKAO_CALLBACK_URI

    token_json = requests.get(
        f"https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id={rest_api_key}&redirect_uri={redirect_uri}&code={code}").json()    
    
    error = token_json.get("error")
    if error is not None:
        raise JSONDecodeError(error)
    access_token = token_json.get("access_token")
    username = requests.get(
        "https://kapi.kakao.com/v2/user/me", headers={"Authorization": f"Bearer {access_token}"}).json().get('kakao_account').get('profile').get('nickname')
    try:
        user = User.objects.get(username=username)
        # social_user = SocialAccount.objects.get(user=user)      
        accept = get_accept(access_token, code)
        if accept.status_code != 200:
            return JsonResponse({'err_msg': 'failed to signin'}, status=accept.status_code)      
        return JsonResponse(accept.json())
    except User.DoesNotExist:
        accept = get_accept(access_token, code)
        if accept.status_code != 200:
            return JsonResponse({'err_msg': 'failed to signup'}, status=accept.status_code)
        return JsonResponse(accept.json())
    # except SocialAccount.DoesNotExist:
    #     return JsonResponse({'err_msg': 'username exists but not social user'}, status=status.HTTP_400_BAD_REQUEST)        

def get_accept(access_token, code):
    data = {'access_token': access_token, 'code': code}
    return requests.post(f"{BASE_URL}accounts/kakao/login/finish/", data=data)

class KakaoLogin(SocialLoginView):
    adapter_class = kakao_view.KakaoOAuth2Adapter
    client_class = OAuth2Client
    callback_url = KAKAO_CALLBACK_URI            

class UserProfile(APIView):
    def get(self,request,user_id):
        # user= request.user
        user= User.objects.get(id=user_id)
        # user_token = request.auth
        if user is not None:
            profile = Profile.objects.get(user=user)
            serializer=UserProfileSerizlizer(profile)
            return Response(serializer.data)
        else:
            return Response(status=401)

    def put(self,request,user_id):
        user= User.objects.get(id=user_id)
        serializer=UserProfileSerizlizer(user,data= request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data) 
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserView(APIView):
    def get(self, request):
        if request.user.is_anonymous:
            return Response(status=401)
        else:
            return Response({"user_id":request.user.id})




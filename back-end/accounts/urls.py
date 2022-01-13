from django.urls import path
from . import views

urlpatterns = [
    path('signup/', views.SignupView.as_view()),
    path('login/', views.LoginView.as_view()),
    path('kakao/login/', views.kakao_login, name='kakao_login'),
    path('kakao/callback/', views.kakao_callback, name='kakao_callback'),
    path('kakao/login/finish/', views.KakaoLogin.as_view(), name='kakao_login_todjango'),
]
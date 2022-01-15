from django.urls import path
from django.conf import settings
from . import views

urlpatterns = [
    path('<int:id>/', views.NotificationView.as_view(),name='notification'),
]
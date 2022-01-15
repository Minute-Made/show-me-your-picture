from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('<int:id>/', views.PicturesView.as_view()),
    path('<int:id>/<int:pid>/', views.PictureView.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
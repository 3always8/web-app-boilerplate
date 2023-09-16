from django.urls import path, include
from . import views
urlpatterns = [
    path('', views.GetUsers.as_view()),
]
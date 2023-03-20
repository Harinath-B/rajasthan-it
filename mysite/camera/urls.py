from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns= [
    path('', index),
    path('/camera', livefe, name="live_camera"),
]
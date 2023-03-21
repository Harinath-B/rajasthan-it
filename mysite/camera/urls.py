from django.contrib import admin
from django.urls import path, include
from .views import *
from django.urls import re_path as url

urlpatterns= [
    path('', index),
    url(r'^action/$', action),
    path('/camera', livefe, name="live_camera"),
]
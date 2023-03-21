from django.urls import re_path as url
from chatbot import views

urlpatterns = [
    url(r'^chat/$',views.chatApi),
    url(r'^chat/([0-9]+)$',views.chatApi),
] 
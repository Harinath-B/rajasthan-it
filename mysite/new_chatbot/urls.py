
from django.urls import re_path as url
from new_chatbot import views

urlpatterns = [
    url(r'^tchat/$',views.tChatApi),
    url(r'^tchat/([0-9]+)$',views.tChatApi),
] 
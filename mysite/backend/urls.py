from django.urls import re_path as url
from backend import views

urlpatterns = [
    url(r'^patient/$',views.patienApi),
    url(r'^patient/([0-9]+)$',views.patienApi),

    url(r'^patientAuth/$',views.patientAuthApi),
    url(r'^patientAuth/([0-9]+)$',views.patientAuthApi),

    url(r'^doctorAuth/$',views.doctorAuthApi),
    url(r'^doctorAuth/([0-9]+)$',views.doctorAuthApi),
] 
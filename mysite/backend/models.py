from django.db import models

class patientData(models.Model):
    chatNo = models.AutoField(primary_key=True)
    chatId = models.IntegerField(max_length=10)
    patientId = models.IntegerField(max_length=20)
    request = models.TextField(max_length=1000)
    response = models.TextField(max_length=1000)
    
class patientAuth(models.Model):

    patientId = models.AutoField(primary_key=True)
    username = models.TextField(max_length=1000)
    password = models.TextField(max_length=1000)
    
class doctorAuth(models.Model):

    doctorId = models.AutoField(primary_key=True)
    username = models.TextField(max_length=1000)
    password = models.TextField(max_length=1000)

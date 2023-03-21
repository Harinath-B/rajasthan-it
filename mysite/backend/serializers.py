from rest_framework import serializers
from backend.models import patientData
from backend.models import patientAuth
from backend.models import doctorAuth

class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = patientData
        fields = ('chatNo','chatId', 'patientId', 'request', 'response')

class PatientAuthSerializer(serializers.ModelSerializer):
    class Meta:
        model = patientAuth
        fields = ('patientId','username', 'password')

class doctorAuthSerializer(serializers.ModelSerializer):
    class Meta:
        model = doctorAuth
        fields = ('doctorId','username', 'password')


from django.shortcuts import render
from django.db import connection
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from backend.models import patientData
from backend.serializers import PatientSerializer

from backend.models import patientAuth
from backend.serializers import PatientAuthSerializer

from backend.models import doctorAuth
from backend.serializers import doctorAuthSerializer

@csrf_exempt
def patienApi(request,id=0):
    if request.method=='GET':
        id = request.GET.get('userid')
        print(id)
        patient = patientData.objects.raw("select * from backend_patientdata where patientId= '{0}' ".format(id))
        patient_serializer = PatientSerializer(patient, many=True)
        return JsonResponse(patient_serializer.data, safe=False)

    elif request.method=='POST':
        patient_data=JSONParser().parse(request)
        patient_serializer = PatientSerializer(data=patient_data)
        if patient_serializer.is_valid():
            patient_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
@csrf_exempt
def patientAuthApi(request,id=0):
    if request.method=='GET':
        username = request.GET.get('username')
        password = request.GET.get('password')        
        patient = []
        patient = patientAuth.objects.raw("select * from backend_patientAuth where username = '{0}' and password = '{1}' ".format(username, password))
        patient2 = patientAuth.objects.raw("select * from backend_patientAuth where username = '{0}' ".format(username))

        if len(patient) == 0:
            if len(patient2) >= 1:
                return JsonResponse({'message': "Wrong Password!!!!"},safe=False)
            return JsonResponse({'message': "Kindly, Register as a New User"},safe=False)
        
        return JsonResponse({"message":"success", "id": patient[0].patientId},safe=False)

    elif request.method=='POST':
        patient_data=JSONParser().parse(request)

        patient = patientAuth.objects.raw("insert into backend_patientAuth(username, password) values('{0}', '{1}')".format(patient_data['username'], patient_data['password']))

        with connection.cursor() as cursor:
            cursor.execute(patient.raw_query)

            if cursor.rowcount == 1:
                return JsonResponse("inserted", safe=False)
            else:
                return JsonResponse("Failed.", safe=False)
        
@csrf_exempt
def doctorAuthApi(request,id=0):
    if request.method=='GET':
        username = request.GET.get('username')
        password = request.GET.get('password')        
        doctor = doctorAuth.objects.raw("select * from backend_doctorAuth where username = '{0}' and password = '{1}' ".format(username, password))
        doctor2 = doctorAuth.objects.raw("select * from backend_doctorAuth where username = '{0}' ".format(username))

        if len(doctor) == 0:
            if len(doctor2) >= 1:
                return JsonResponse({'message': "Wrong Password!!!!"},safe=False)
            return JsonResponse({'message': "Kindly, Register as a New User"},safe=False)
        return JsonResponse({"message":"success", "id": doctor[0].doctorId},safe=False)
    
    elif request.method=='POST':
        doctor_data=JSONParser().parse(request)

        print("insert into backend_doctorAuth(username, password) values('{0}', '{1}')".format(doctor_data['username'], doctor_data['password']))

        doctor = doctorAuth.objects.raw("insert into backend_doctorAuth(username, password) values('{0}', '{1}')".format(doctor_data['username'], doctor_data['password']))

        with connection.cursor() as cursor:
            cursor.execute(doctor.raw_query)

            if cursor.rowcount == 1:
                return JsonResponse("inserted.", safe=False)
            else:
                return JsonResponse("Failed.", safe=False)
    

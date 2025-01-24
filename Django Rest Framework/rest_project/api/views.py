from django.shortcuts import render
from api.models import Student
from api.serializers import StudentSerializer
from rest_framework.renderers import JSONRenderer
from django.http import HttpResponse,JsonResponse
# Create your views here.

def stuDetails(request,id):
    stu=Student.objects.get(pk=id)
    print(stu)
    serializer=StudentSerializer(stu)
    print(serializer)
    print(serializer.data)
    json_data=JSONRenderer().render(serializer.data)
    print(json_data)
    return HttpResponse(json_data,content_type='application.json')

def list_student(request):
    qs=Student.objects.all()
    serializer=StudentSerializer(qs,many=True)
    return JsonResponse(serializer.data,safe=False)


from django.shortcuts import render
from app1.models import School
# Create your views here.

def student_view(request):
    name=request.GET['sname']
    division=request.GET['div']
    rollno=request.GET['rollno']
    phone=request.GET['phone']
    qs=School.objects.filter(rollNo=rollno)
    if len(qs)==0:
        student=School(studName=name,division=division,rollNo=rollno,phone=phone)
        student.save()
        response=render(request,'app1/index.html',context={'msg':'Student data created successfully....'})
    else:
        response=render(request,'app1/index.html',context={'msg':'Student data already exist....'})
    return response
def home(request):
    response=render(request,'app1/index.html')
    return response
        
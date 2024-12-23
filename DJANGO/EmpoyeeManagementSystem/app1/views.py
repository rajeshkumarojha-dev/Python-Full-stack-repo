from django.shortcuts import render,HttpResponseRedirect
from app1.models import Employee
from app1.forms import EmployeeForm
# Create your views here.
def home(request):
    qs=Employee.objects.all()
    response=render(request,'app1/index.html',context={'qs':qs})
    return response

def addemployee(request):
    if request.method=='GET':
        form=EmployeeForm() 
        response=render(request,'app1/addemp.html',context={'form':form})
        return response
    elif request.method == 'POST':
        form=EmployeeForm(request.POST)
        if form.is_valid():
            name=form.cleaned_data['ename']
            job=form.cleaned_data['job']
            salery=form.cleaned_data['salery']
            phone=form.cleaned_data['phone']
            emp=Employee(ename=name,job=job,salery=salery,phone=phone)
            emp.save()
            return HttpResponseRedirect('/')
        else:
            form=EmployeeForm()
            msg='employee phone number already exist'
        response=render(request,'app1/addemp.html',context={'msg':msg,'form':form})
        return response

def update_view(request,id):
        
    if request.method=='POST':
        e=Employee.objects.get(empid=id)
        empform=EmployeeForm(request.POST,instance=e)
        if empform.is_valid():
            empform.save()
        return HttpResponseRedirect('/')
    else:
        e=Employee.objects.get(empid=id)
        empform=EmployeeForm(instance=e)
    response=render(request,'app1/update.html',context={'empform':empform})
    return response

def delete_view(request,eid):
    qs=Employee.objects.get(empid=eid)
    qs.delete()
    return HttpResponseRedirect('/')
    
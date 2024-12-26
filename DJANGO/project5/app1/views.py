from django.shortcuts import render
from app1.forms import sighupForm

# Create your views here.

def user(request):
    if request.method=='POST':
        form=sighupForm(request.POST)
        if form.is_valid():
            form.save()
    else:
        form=sighupForm()
    response=render(request,'app1/index.html',context={'form':form})
    return response
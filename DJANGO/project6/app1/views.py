from django.shortcuts import render,redirect
from app1.form import SignUpForm
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import authenticate,login as auth_login,logout
from django.contrib.auth.decorators import login_required
# Create your views here.


def SignUp(request):
    if request.method=='POST':
        form=SignUpForm(request.POST)
        if form.is_valid():
            form.save()
            form=SignUpForm()
    else:
        form=SignUpForm()
    response=render(request,'app1/signup.html',context={'form':form})
    return response

def login(request):
    if request.method=='POST':
        form=AuthenticationForm(request=request,data=request.POST)
        if form.is_valid():
            uname=form.cleaned_data['username']
            upass=form.cleaned_data['password']
            user=authenticate(username=uname,password=upass)
            if user is not None:
                auth_login(request, user)
                return redirect('/profile/')
    else:
        form=AuthenticationForm()
    response=render(request,'app1/login.html',context={'form':form})
    return response
@login_required(login_url='login')
def profile(request):
    response=render(request,'app1/profile.html')
    return response


def logout_request(request):
    logout(request)
    return redirect('/login/')
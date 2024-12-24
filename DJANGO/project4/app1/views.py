from django.shortcuts import render,HttpResponseRedirect
from app1.models import ImageModel
from app1.forms import ImageForm
# Create your views here.
def home(request):
    if request.method=='POST':
        form=ImageForm(request.POST,request.FILES)
        if form.is_valid():
            name=form.cleaned_data['name']
            image=form.cleaned_data['image']
            img=ImageModel(name=name,image=image)
            img.save()
            form=ImageForm()
            return HttpResponseRedirect('/')
    else:
        form=ImageForm()
        img=ImageModel.objects.all()
        response=render(request,'app1/index.html',context={'img':img,'form':form})
        return response
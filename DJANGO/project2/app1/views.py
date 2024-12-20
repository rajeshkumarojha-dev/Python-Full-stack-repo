from django.shortcuts import render

# Create your views here.

def view_table(request):
    table={'product1':['apple','apple.jpg'],
           'product2':['orange','orange.jpg'],
           'product3':['mobile','phone.png'],
           'product4':['laptop','laptop.webp']
           }
    response=render(request,'app1/index.html',context={'table':table})
    return response

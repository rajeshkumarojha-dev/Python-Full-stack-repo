
from .serializers import StudentSerializer
from .models import Student
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from rest_framework.decorators import api_view

@csrf_exempt
@api_view(['GET','POST','PUT','DELETE'])
def StudentApi(request,id=None):
    if request.method=='GET':
        if id is not None:
            stu=Student.objects.get(id=id)
            serializer=StudentSerializer(stu)
            return JsonResponse(serializer.data,safe=False)
        
        else:
            stu=Student.objects.all()
            serializer=StudentSerializer(stu,many=True)
            return JsonResponse(serializer.data,safe=False)
        
    if request.method=='POST':
        data= json.loads(request.body)
        serializer=StudentSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({'msg':'data created'})
        return JsonResponse({'msg':'Error'})
    
    if request.method=='PUT':
        data = json.loads(request.body)
        stu=Student.objects.get(id=id)
        serializer=StudentSerializer(stu,data=data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({'msg':'data updated'})
        return JsonResponse({'msg':'ERROR'})
    
    if request.method == 'DELETE':
        stu=Student.objects.get(id=id)
        stu.delete()
        return JsonResponse({'msg':'data deleted'})



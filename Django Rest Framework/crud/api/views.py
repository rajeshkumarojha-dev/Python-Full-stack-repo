
from .serializers import StudentSerializer
from .models import Student
from rest_framework.response import Response
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
            return Response(serializer.data)
        
        else:
            stu=Student.objects.all()
            serializer=StudentSerializer(stu,many=True)
            return Response(serializer.data)
        
    if request.method=='POST':
        data= json.loads(request.body)
        serializer=StudentSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'data created'})
        return Response({'msg':'Error'})
    
    if request.method=='PUT':
        data = json.loads(request.body)
        stu=Student.objects.get(id=id)
        serializer=StudentSerializer(stu,data=data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg':'data updated'})
        return Response({'msg':'ERROR'})
    
    if request.method == 'DELETE':
        stu=Student.objects.get(id=id)
        stu.delete()
        return Response({'msg':'data deleted'})



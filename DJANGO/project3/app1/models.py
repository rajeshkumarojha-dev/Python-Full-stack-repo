from django.db import models

# Create your models here.

class School(models.Model):
    sid=models.AutoField(primary_key=True)
    studName=models.CharField(max_length=50)
    division=models.CharField(max_length=20)
    rollNo=models.CharField(max_length=10,unique=True)
    phone=models.CharField(max_length=12)

    class Meta:
        db_table='school'

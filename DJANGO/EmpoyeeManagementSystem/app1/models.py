from django.db import models

# Create your models here.
class Employee(models.Model):
    empid=models.AutoField(primary_key=True)
    ename=models.CharField(max_length=30)
    job=models.CharField(max_length=30)
    salery=models.DecimalField(max_digits=10,decimal_places=1)
    phone=models.CharField(max_length=12,unique=True)
    class Meta:
        db_table='emp'
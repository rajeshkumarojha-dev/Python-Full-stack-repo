from django.db import models

# Create your models here.
class Emp(models.Model):
    empid=models.IntegerField(primary_key=True)
    name=models.CharField(max_length=20)
    job=models.CharField(max_length=20)
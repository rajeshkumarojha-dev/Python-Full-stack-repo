from django.db import models

# Create your models here.

class ImageModel(models.Model):
    name=models.CharField(max_length=30)
    date=models.DateTimeField(auto_now_add=True)
    image=models.ImageField(upload_to='myimage')
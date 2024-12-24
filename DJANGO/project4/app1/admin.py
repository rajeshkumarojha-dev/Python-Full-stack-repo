from django.contrib import admin
from app1.models import ImageModel
# Register your models here.
@admin.register(ImageModel)
class ImageModelAdmin(admin.ModelAdmin):
    list_display=['name','date','image']
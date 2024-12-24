from app1.models import ImageModel
from django.forms import ModelForm

class ImageForm(ModelForm):
    class Meta:
        model=ImageModel
        fields='__all__'
        labels={'image':''}
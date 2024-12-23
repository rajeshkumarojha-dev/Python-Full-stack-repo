from django.forms import ModelForm
from app1.models import Employee

class EmployeeForm(ModelForm):
    class Meta:
        model=Employee
        fields='__all__'
        
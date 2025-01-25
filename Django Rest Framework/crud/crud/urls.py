
from django.contrib import admin
from django.urls import path
from api.views import StudentApi
urlpatterns = [
    path('admin/', admin.site.urls),
    path('student/',StudentApi),
    path('student/<id>/',StudentApi),
   
]


from django.contrib import admin
from django.urls import path
from api.views import *
urlpatterns = [
    path('admin/', admin.site.urls),
    path('details/<id>/',stuDetails),
    path('list/',list_student),
]

from django.urls import path 
from . import views
from django.contrib.auth import views as auth_views
# from .forms import loginform

app_name = 'core'

urlpatterns =[
    path('',views.index,name='index'),
    path("signup/", views.signup, name="signup"),

]


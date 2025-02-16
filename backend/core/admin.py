from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import LocalResident, FireStation, NGO, User
admin.site.register(User)
admin.site.register(LocalResident)
admin.site.register(FireStation)
admin.site.register(NGO)

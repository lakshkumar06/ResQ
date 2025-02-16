# from django.contrib.auth.models import AbstractUser
# from django.db import models

# class local(AbstractUser):
#     phone_number = models.CharField(max_length=15, blank=False, null=True)
#     zip_code = models.CharField(max_length=10, blank=False, null=True)
    
#     def __str__(self):
#         return self.name

# class firestation(AbstractUser):
#     station_number = models.CharField(max_length=15, blank=False, null=True)
#     zip_code = models.CharField(max_length=10, blank=False, null=True)
    
#     def __str__(self):
#         return self.name

from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    USER_TYPE_CHOICES = (
        ('LOCAL', 'Local Resident'),
        ('FIRE_STATION', 'Fire Station'),
        ('NGO', 'Non-Profit Organization'),
    )
    
    # Common fields for all users
    user_type = models.CharField(max_length=20, choices=USER_TYPE_CHOICES)
    phone_number = models.CharField(max_length=20)
    zip_code = models.CharField(max_length=10)
    
    # Remove original username field and use email instead
    username = models.CharField(max_length=150, unique=True, blank=False, null=True)
    email = models.EmailField(unique=True)

    USERNAME_FIELD = 'email'  # This sets email as the primary field for authentication
    REQUIRED_FIELDS = ['username']

class LocalResident(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    date_of_birth = models.DateField(null=True, blank=True)
    occupation = models.CharField(max_length=100, blank=True)
    station_code = models.CharField(max_length=10, blank=True, null=True, help_text="Auto-assigned fire station")
    # Add other resident-specific fields
    def __str__(self):
        return f"{self.user.username}"

class FireStation(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    station_code = models.CharField(max_length=50, unique=True)
    zip_codes = models.JSONField(help_text="List of zip codes covered by this station")
    def __str__(self):
        return f"Station {self.station_code}"
    

    REQUIRED_FIELDS = ['jurisdiction']
    # Add other fire station-specific fields

class NGO(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    organization_name = models.CharField(max_length=150)
    mission_statement = models.TextField()
    registration_number = models.CharField(max_length=50, unique=True)
   
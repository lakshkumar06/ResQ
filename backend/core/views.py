from django.db.models import Value
from django.db.models.functions import Cast

def index(request):
    return render(request,'core/index.html')

# from django.shortcuts import render, redirect
# from django.contrib.auth import login
# from .forms import UserRegistrationForm

# def register(request):
#     if request.method == "POST":
#         form = UserRegistrationForm(request.POST)
#         if form.is_valid():
#             user = form.save()
#             login(request, user)
#             return redirect("home")  # Change "home" to your desired redirect URL
#     else:
#         form = UserRegistrationForm()
    
#     return render(request, "core/signup.html", {"form": form})





from django.shortcuts import render, redirect
from .models import User, LocalResident, FireStation ,NGO
from django.contrib.auth import login
from .forms import SignUpForm

def signup(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        print(request.POST, form.is_valid(), form.errors)
        if form.is_valid():
            # Create base user
            user = User.objects.create_user(
                username=form.cleaned_data['username'],
                email=form.cleaned_data['email'],
                password=form.cleaned_data['password1'],
                first_name=form.cleaned_data['first_name'],
                last_name=form.cleaned_data['last_name'],
                phone_number=form.cleaned_data['phone_number'],
                zip_code=form.cleaned_data['zip_code'],
                user_type=form.cleaned_data['user_type'],
            )
            
            # matching_station = FireStation.objects.filter(zip_codes__contains=Cast(Value([form.cleaned_data['zip_code']]), output_field=models.JSONField())).first()
            # Create specific type profile
            if user.user_type == 'LOCAL':
                fire_stations = FireStation.objects.all()
                

                # Find a matching fire station manually
                matching_station = None
                for station in fire_stations:
                    if form.cleaned_data['zip_code'] in station.zip_codes:  # Assuming zip_codes is a list
                        matching_station = station
                        break  # Stop after finding the first match

                # Create LocalResident with the correct station_code
                LocalResident.objects.create(
                    user=user,
                    date_of_birth=form.cleaned_data.get('date_of_birth'),
                    occupation=form.cleaned_data.get('occupation'),
                    station_code=matching_station.station_code if matching_station else None
                )
            elif user.user_type == 'FIRE_STATION':
                FireStation.objects.create(
                    user=user,
                    station_code=form.cleaned_data.get('station_code'),
                    zip_codes = form.cleaned_data.get('zip_codes')
                )
                
                user.save() 
            elif user.user_type == 'NGO':
                NGO.objects.create(
                    user=user,
                    organization_name=form.cleaned_data.get('organization_name'),
                    mission_statement=form.cleaned_data.get('mission_statement'),
                    registration_number=form.cleaned_data.get('registration_number')
                )
            print("User created successfully")
            # login(request, user)
            return redirect('/')

    else:
        form = SignUpForm()
    return render(request, 'core/signup.html', {'form': form})
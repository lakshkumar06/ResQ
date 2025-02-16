from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import LocalResident, FireStation

@receiver(post_save, sender=LocalResident)
def assign_fire_station(sender, instance, **kwargs):
    """Automatically assigns the correct fire station to a Local entry based on zip code."""
    print('hello') 
    fire_stations = FireStation.objects.all()
    
    for station in fire_stations:
        print(station)
        # Convert zip codes and station zip_codes to integers before comparison
        if int(instance.zip_code) in [int(zip_code) for zip_code in station.zip_codes]:
            
            instance.station_code = station.station_code
            instance.save()
            break  # Stop after finding the first match

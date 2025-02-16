# from django import forms
# from django.contrib.auth.forms import UserCreationForm
# from .models import local

# class UserRegistrationForm(UserCreationForm):
#     name = forms.CharField(max_length=100)
#     email = forms.EmailField(required=True)
#     phone_number = forms.CharField(max_length=15, required=False)
#     zip_code = forms.CharField(max_length=10, required=False)

#     class Meta:
#         model = local
#         fields = ['name', 'email', 'phone_number', 'zip_code', 'password1', 'password2']


from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import User

class SignUpForm(UserCreationForm):
    USER_TYPE_CHOICES = (
        ('LOCAL', 'Local Resident'),
        ('FIRE_STATION', 'Fire Station'),
        ('NGO', 'Non-Profit Organization'),
    )
    
    user_type = forms.ChoiceField(choices=USER_TYPE_CHOICES)
    first_name = forms.CharField(max_length=30)
    last_name = forms.CharField(max_length=30)
    phone_number = forms.CharField(max_length=20)
    zip_code = forms.CharField(max_length=10)
    
    # Additional fields for specific types
    date_of_birth = forms.DateField(required=False)
    occupation = forms.CharField(max_length=100, required=False)
    station_code = forms.CharField(max_length=50, required=False)
    zip_codes = forms.CharField(
        widget=forms.Textarea(attrs={'rows': 3, 'placeholder': 'Enter zip codes separated by commas'}),
        required=False,
        help_text="Enter multiple zip codes separated by commas"
    )
    organization_name = forms.CharField(max_length=150, required=False)
    mission_statement = forms.CharField(widget=forms.Textarea, required=False)
    registration_number = forms.CharField(max_length=50, required=False)
    
    class Meta:
        model = User
        fields = ('username','email', 'password1', 'password2', 'user_type', 
                 'first_name', 'last_name', 'phone_number', 'zip_code')
    def clean_zip_codes(self):
        # Convert zip_codes from a comma-separated string to a list
        zip_codes = self.cleaned_data.get('zip_codes')
        if zip_codes:
            # Split string into a list of zip codes
            zip_codes = [zip.strip() for zip in zip_codes.split(',')]
        else:
            zip_codes = []
        return zip_codes

class resource(forms.Form):
    title = forms.CharField(max_length=100)
    description = forms.CharField(widget=forms.Textarea)
    category = forms.ChoiceField(choices=[
        ('medical', 'Medical'),
        ('food', 'Food'),
        ('shelter', 'Shelter'),
        ('clothing', 'Clothing'),
        ('other', 'Other')
    ])

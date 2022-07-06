from .models import Crypto_Asset
from django.forms import ModelForm, TextInput, Textarea


class Crypto_AssetForm(ModelForm):
    class Meta:
        model = Crypto_Asset
        fields = ["title", "description", "crypto_value_1", "crypto_value_2", "crypto_value_3", "crypto_value_4", "crypto_value_5", "crypto_value_6", "crypto_value_7", "crypto_value_8", "crypto_value_9", "crypto_value_10"]
        widgets = {
            "title": TextInput(attrs={
            'class': 'form-control',
            'placeholder': 'Custom Asset'
            }), 
            "description": Textarea(attrs={
            'class': 'form-control',
            'placeholder': 'It is my awesom setup!'
            }), 
            "crypto_value_1": TextInput(attrs={
            'class': 'form-control',
            'placeholder': 'Enter Crypto Currency Name'
            }), 
            "crypto_value_2": TextInput(attrs={
            'class': 'form-control',
            'placeholder': 'Enter Crypto Currency Name'
            }), 
            "crypto_value_3": TextInput(attrs={
            'class': 'form-control',
            'placeholder': 'Enter Crypto Currency Name'
            }), 
            "crypto_value_4": TextInput(attrs={
            'class': 'form-control',
            'placeholder': 'Enter Crypto Currency Name'
            }), 
            "crypto_value_5": TextInput(attrs={
            'class': 'form-control',
            'placeholder': 'Enter Crypto Currency Name'
            }), 
            "crypto_value_6": TextInput(attrs={
            'class': 'form-control',
            'placeholder': 'Enter Crypto Currency Name'
            }), 
            "crypto_value_7": TextInput(attrs={
            'class': 'form-control',
            'placeholder': 'Enter Crypto Currency Name'
            }), 
            "crypto_value_8": TextInput(attrs={
            'class': 'form-control',
            'placeholder': 'Enter Crypto Currency Name'
            }), 
            "crypto_value_9": TextInput(attrs={
            'class': 'form-control',
            'placeholder': 'Enter Crypto Currency Name'
            }), 
            "crypto_value_10": TextInput(attrs={
            'class': 'form-control',
            'placeholder': 'Enter Crypto Currency Name'
            }), 
        }

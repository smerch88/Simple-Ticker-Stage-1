from pyexpat import model
from .models import Crypto_Asset
from django.forms import ModelForm, TextInput, Textarea
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import Order


class Crypto_AssetForm(ModelForm):
    class Meta:
        model = Crypto_Asset
        fields = ["symbol", 'avg_price']
        widgets = {
            "symblol": TextInput(attrs={
            'class': 'form-control',
            'placeholder': 'Custom Asset'
            }),
            "avg_price": Textarea(attrs={
            'class': 'form-control',
            'placeholder': 'It is my awesome setup!'
            })
        }


class OrderForm(ModelForm):
    class Meta:
        model = Order
        fields = '__all__'


class CreateUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']
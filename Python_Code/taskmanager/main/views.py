from email import message
from multiprocessing import context
from django.shortcuts import render, redirect
from . import models
from .forms import OrderForm, CreateUserForm, Crypto_AssetForm
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
import requests
from rest_framework import generics
from .serializers import CryptoAssetsSerializer


# this class is ment to be istead index view
class CryptoAssetsList(generics.ListAPIView):
    queryset = models.Crypto_Asset.objects.all()
    serializer_class = CryptoAssetsSerializer

def index(request):
    refresh_prices()
    crypto_asset = models.Crypto_Asset.objects.order_by('id')
    return render(request, 'main/index.html', {'title': 'Website main page', 'assets': crypto_asset})


def about(request):
    return render(request, 'main/about.html')


@login_required(login_url='login')
def create(request):
    error = ''
    if request.method == 'POST':
        form = Crypto_AssetForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
        else:
            error = 'Invalid input'

    form = Crypto_AssetForm()
    context = {
        'form': form,
        'error': error
    }
    return render(request, 'main/create.html', context)


def registerPage(request):
    if request.user.is_authenticated:
        return redirect('home')
    else:
        form = CreateUserForm()
        if request.method == 'POST':
            form = CreateUserForm(request.POST)
            if form.is_valid():
                form.save()
                user = form.cleaned_data.get('username')
                messages.success(request, 'Account was created for ' + user)

                return redirect('login')

        context = {'form': form}
        return render(request, 'main/register.html', context)


def loginPage(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.info(request, 'Username Or Password is incorrect')

    context = {}
    return render(request, 'main/login.html', context)


def logoutUser(request):
    logout(request)
    return redirect('login')


def refresh_prices():
    result = requests.get('https://api.binance.com/api/v3/ticker/price')
    api_lst = sorted([x for x in result.json() if x['symbol'][-4:] == 'USDT'], key=lambda x: x['symbol'])
    db_lst = sorted([*models.Crypto_Asset.objects.all().values('id', 'symbol')], key=lambda x: x['symbol'])
    try:
        for db_c, api_c in zip(db_lst, api_lst):
            models.Crypto_Asset.objects.filter(id=db_c['id'], symbol=db_c['symbol']).update(avg_price=api_c['price'])
    except:
        return HttpResponse('An error occured')


from email import message
from multiprocessing import context
from django.shortcuts import render, redirect
from . import models
from .forms import OrderForm, CreateUserForm, Crypto_AssetForm
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from binance.client import Client
from django.http import HttpResponse
import requests


def index(request):
    crypto_asset = models.Crypto_Asset.objects.order_by('-id')
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


def refresh_prices(request):
    # api_key = "vmPUZE6mv9SD5VNHk4HlWFsOr6aKE2zvsw0MuIgwCIPy6utIco14y7Ju91duEh8A"
    # api_secret = "NhqPtmdSJYdKjVHjA7PZj4Mge3R5YNiP1e3UZjInClVN65XAbvqqM6A7H5fATj0j"
    #
    # client = Client(api_key, api_secret)
    # crypto_c = ['ETHBTC', 'LTCBTC', 'BNBBTC', 'NEOBTC', 'QTUMETH', 'EOSETH', 'SNTETH', 'BNTETH']
    # crypto_dict = {i: client.get_avg_price(symbol=i)['price'] for i in crypto_c}

    for k, v in models.Crypto_Asset.objects.all():
        models.Crypto_Asset.objects.update(symbol=k, avg_price=v)
    return HttpResponse('Data refreshed successfully')


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
    result = requests.request(
        'GET',
        'https://api.binance.com/api/v3/ticker/price'
    )
    list_of_values = result.json()
    try:
        for i in range(len(list_of_values)):
            if list_of_values[i]['symbol'][-4:] == 'USDT':
                models.Crypto_Asset.objects.update_or_create(symbol=list_of_values[i]['symbol'],
                                                  avg_price=list_of_values[i]['price'])
        return HttpResponse('Prices refreshed successfully')
    except:
        return HttpResponse('An error occured')



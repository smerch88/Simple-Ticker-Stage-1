from email import message
from multiprocessing import context
from django.shortcuts import render, redirect
from .models import *
from .forms import OrderForm, CreateUserForm
from .forms import Crypto_AssetForm
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.http import HttpResponse
from django.shortcuts import render
import json


def index(request):
    crypto_asset = Crypto_Asset.objects.order_by('-id')
    return render(request, 'main/index.html', {'title':'Website main page', 'assets':crypto_asset})


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
			

		context = {'form':form}
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


def track(request):
    print('works!')
    return JsonResponse({
   "crypto_section":{
      "profit_change":"10",
      "profit":"11",
      "fiat":"USD",
      "crypto_list":[
         "XRP",
         "DOGE",
         "BTC",
         "ETH",
         "ETC",
         "LUNA",
         "BNB",
         "SOL",
         "RVN",
         "DOT"
      ],
      "number_to_display":10,
      "crypto_price":[
         0.343970,
         0.067,
         20000,
         1400,
         22.73,
         0.000104,
         260.73,
         41.92,
         0.02730,
         7.59
      ],
      "crypto_price_round":[
         6,
         4,
         2,
         2,
         2,
         2,
         6,
         2,
         6,
         2
      ]
   },
   "display_section":{
      "position_x1":0.5,
      "position_y1":0.1,
      "color_1":"ST7735_GREEN",
      "textsize_1":1,
      "position_x2":0.5,
      "position_y2":0.2,
      "color_2":"ST7735_GREEN",
      "textsize_2":1,
      "position_x3":0.3,
      "position_y3":0.3,
      "color_3":"ST7735_GREEN",
      "textsize_3":1,
      "position_x4":0.4,
      "position_y4":0.4,
      "color_4":"ST7735_GREEN",
      "textsize_4":1,
      "position_x5":0.1,
      "position_y5":0.5,
      "color_5":"ST7735_YELLOW",
      "textsize_5":1,
      "position_x51":0.1,
      "position_y51":0.6,
      "color_51":"ST7735_MAGENTA ",
      "textsize_51":1,
      "position_x52":0.1,
      "position_y52":0.7,
      "color_52":"ST7735_CYAN",
      "textsize_52":1,
      "position_x53":0.1,
      "position_y53":0.8,
      "color_53":"ST7735_BLUE",
      "textsize_53":1,
      "position_logo_x":0.1,
      "position_logo_y":0.1,
      "color_logo":"ST7735_ORANGE"
   },
   "messages_section":{
      "message_1":"My Profit:",
      "message_2":"120$",
      "message_3":"",
      "message_4":"",
      "message_5":"My Test : "
   }
})

def headers_track(request):
    try:
        with open('track.json', 'a') as file:
            file.write(str(request.headers) + '\n')
        return JsonResponse(str(request.headers),json.JSONEncoder, False)
    except Exception as e:
        return HttpResponse(e)
import json
from email import message
from multiprocessing import context

from django.contrib.auth.models import User
from django.db import IntegrityError
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt

from . import models
from .forms import CreateUserForm
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, JsonResponse
import requests
from rest_framework import generics
from .serializers import CryptoAssetsSerializer
from rest_framework.parsers import JSONParser


# this class is ment to be istead index view
class CryptoAssetsList(generics.ListAPIView):
    queryset = models.Crypto_Asset.objects.all()
    serializer_class = CryptoAssetsSerializer


def index(request):
    if models.Crypto_Asset.objects.all().count() < 1:
        create_prices()
    refresh_prices()
    crypto_asset = models.Crypto_Asset.objects.order_by('id')
    return render(request, 'main/index.html', {'title': 'Website main page', 'assets': crypto_asset})


def about(request):
    return render(request, 'main/about.html')


@csrf_exempt
def signupAPI(request):
    if request.method == 'POST':
        try:
            data = JSONParser().parse(request)
            user = User.objects.create_user(data['username'], password=data['password'])
            user.save()
            return JsonResponse({'token':'jsldkfjliowe'}, status=201)
        except IntegrityError:
            return JsonResponse({'error': 'That username has already been taken'}, status=200)


def signupuser(request):
    if request.method == 'GET':
        return render(request, 'main/register.html', {'form': CreateUserForm()})
    else:
        if request.POST['password1'] == request.POST['password2']:
            try:
                user = User.objects.create_user(request.POST['username'], password=request.POST['password1'])
                user.save()
                login(request, user)
                return redirect('home')
            except IntegrityError:
                return render(request, 'main/register.html', {'form': CreateUserForm(), 'error': 'That username has already been taken'})
        else:
            return render(request, 'main/register.html', {'form': CreateUserForm(), 'error': 'Something went wrong -_-'})


def device_info():
    return {"crypto_section": {"profit_change": "10",
                               "profit": "11",
                               "fiat": "USD",
                               "crypto_list": [
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
                                "number_to_display": 10,
                                "crypto_price": [
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
                                "crypto_price_round": [6, 4, 2, 2, 2, 2, 6, 2, 6, 2]
                                },
        "display_section": {
            "position_x1": 0.5,
            "position_y1": 0.1,
            "color_1": "ST7735_GREEN",
            "textsize_1": 1,
            "position_x2": 0.5,
            "position_y2": 0.2,
            "color_2": "ST7735_GREEN",
            "textsize_2": 1,
            "position_x3": 0.3,
            "position_y3": 0.3,
            "color_3": "ST7735_GREEN",
            "textsize_3": 1,
            "position_x4": 0.4,
            "position_y4": 0.4,
            "color_4": "ST7735_GREEN",
            "textsize_4": 1,
            "position_x5": 0.1,
            "position_y5": 0.5,
            "color_5": "ST7735_YELLOW",
            "textsize_5": 1,
            "position_x51": 0.1,
            "position_y51": 0.6,
            "color_51": "ST7735_MAGENTA ",
            "textsize_51": 1,
            "position_x52": 0.1,
            "position_y52": 0.7,
            "color_52": "ST7735_CYAN",
            "textsize_52": 1,
            "position_x53": 0.1,
            "position_y53": 0.8,
            "color_53": "ST7735_BLUE",
            "textsize_53": 1,
            "position_logo_x": 0.1,
            "position_logo_y": 0.1,
            "color_logo": "ST7735_ORANGE"
        },

        "messages_section": {
            "message_1": "My Profit:",
            "message_2": "120$",
            "message_3": "",
            "message_4": "",
            "message_5": "My Test : "
        }
    }


def info_to_device(request):
    currencies = device_info()['crypto_section']['crypto_list']
    data = device_info()['crypto_section']['crypto_price'] = \
        [models.Crypto_Asset.objects.filter(symbol__startswith=x) for x in currencies]
    return JsonResponse(data)


def refresh_prices():
    result = requests.get('https://api.binance.com/api/v3/ticker/price')
    api_lst = sorted([x for x in result.json() if x['symbol'][-4:] == 'USDT'], key=lambda x: x['symbol'])
    db_lst = sorted([*models.Crypto_Asset.objects.all().values('id', 'symbol')], key=lambda x: x['symbol'])
    try:
        for db_c, api_c in zip(db_lst, api_lst):
            models.Crypto_Asset.objects.filter(id=db_c['id'], symbol=db_c['symbol']).update(avg_price=api_c['price'])
    except:
        return HttpResponse('An error occured')


# If database is empty - use this function instead of refresh_prices
def create_prices():
    result = requests.get('https://api.binance.com/api/v3/ticker/price')
    api_lst = sorted([x for x in result.json() if x['symbol'][-4:] == 'USDT'], key=lambda x: x['symbol'])
    try:
        for i in api_lst:
            models.Crypto_Asset.objects.create(symbol=i['symbol'], avg_price=i['price'])
    except:
        return HttpResponse('An error occured')

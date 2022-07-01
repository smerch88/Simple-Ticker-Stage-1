import re
from django.shortcuts import render

from datetime import datetime

# Create your views here.

from django.http import HttpResponse




def welcome(requests):
    return HttpResponse('Welcome to BTC-ticker WebS Shop')


def date(request):
    return HttpResponse(f"This page was served at {str(datetime.now())}")


def about(requset):
    return HttpResponse("This is a page where you can buy a btc ticker and manage it. Also some other cool crypto stuff included.")
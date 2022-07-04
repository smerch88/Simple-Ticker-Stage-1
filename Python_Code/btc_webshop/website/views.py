import imp
import re
from django.shortcuts import render

from datetime import datetime

from meetings.models import Meeting

# Create your views here.

from django.http import HttpResponse




def welcome(request):
    return render(request, 'website/home.html', {"meetings": Meeting.objects.all()})


def date(request):
    return HttpResponse(f"This page was served at {str(datetime.now())}")


def about(request):
    return render(request, 'website/about.html', {"button_text": "Я с Вами!"})
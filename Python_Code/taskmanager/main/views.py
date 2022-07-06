from django.shortcuts import render, redirect
from .models import Crypto_Asset
from .forms import Crypto_AssetForm


def index(request):
    crypto_asset = Crypto_Asset.objects.order_by('-id')
    return render(request, 'main/index.html', {'title':'Website main page', 'assets':crypto_asset})


def about(request):
    return render(request, 'main/about.html')


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

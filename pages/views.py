from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages, auth
from django.contrib.auth.models import User

from .sites import *

def index(request):
    print('DEBUG>>> index(): interactive demo page')
    context = { }

    return render(request, 'index.html', context)

def index_original(request):
    print('DEBUG>>> index(): rendering registration default page')
    context = { 'site'   : defaults(),
                'promos' : promotions(),
                'features1' : features1(),
                'features2' : features2(),
                'banners'   : banners() }

    return render(request, 'index.html', context)

def gallery(request):
    print('DEBUG>>> gallery(): rendering gallery page')
    context = { }
    return render(request, 'gallery.html', context)
from django.conf import settings
from .models import *

def defaults(request = None):
    INSTANCE_ID = getattr(settings, 'INSTANCE_ID', 1)
    instance = WebApp.objects.filter(webapp_id=INSTANCE_ID).first()

    if instance is None:
        # Set defaults empty site
        instance = WebApp()
        instance.webapp_logo = 'images/logo.png'
        instance.webapp_name = 'Default Site'
        instance.footer      = 'Default footer'
        instance.footer_url  = 'Default url'
        instance.footer2     = 'Default footer 2'
        instance.footer2_url = 'Default url 2'

    return instance

def promotions():
    INSTANCE_ID = getattr(settings, 'INSTANCE_ID', 1)
    promos = Promotion.objects.filter(webapp__webapp_id=INSTANCE_ID).order_by('sequence').all()
    return promos.all()

def features1():
    INSTANCE_ID = getattr(settings, 'INSTANCE_ID', 1)
    feature = Feature1.objects.filter(webapp__webapp_id=INSTANCE_ID).all()
    return feature.all()

def features2():
    INSTANCE_ID = getattr(settings, 'INSTANCE_ID', 1)
    feature = Feature2.objects.filter(webapp__webapp_id=INSTANCE_ID).all()
    return feature.all()

def banners():
    INSTANCE_ID = getattr(settings, 'INSTANCE_ID', 1)
    banner = Banner.objects.filter(webapp__webapp_id=INSTANCE_ID).all()
    return banner.all()
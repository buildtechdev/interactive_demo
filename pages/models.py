from django.db import models
from datetime import datetime

class WebApp(models.Model):
    # WebApp instance information
    webapp_id     = models.IntegerField()
    webapp_logo   = models.ImageField(upload_to='web-defaults/', blank=True)
    webapp_name   = models.CharField(max_length=200)
    webapp_owner  = models.CharField(max_length=100, blank=True)

    # Webapp footer info
    footer      = models.CharField(max_length=512, blank=True)
    footer_url  = models.CharField(max_length=512, blank=True)
    footer2     = models.CharField(max_length=512, blank=True)
    footer2_url = models.CharField(max_length=512, blank=True)

    # WebApp contact information
    address     = models.CharField(max_length=200, blank=True)
    city        = models.CharField(max_length=100, blank=True)
    state       = models.CharField(max_length=100, blank=True)
    zipcode     = models.CharField(max_length=20, blank=True)
    phone       = models.CharField(max_length=50, blank=True)
    email       = models.CharField(max_length=100, blank=True)

    # Main page labels
    tagline     = models.TextField(blank=True)
    writeup     = models.TextField(blank=True)
    title1      = models.CharField(max_length=512, blank=True)
    sub_title1  = models.CharField(max_length=512, blank=True)
    title2      = models.CharField(max_length=512, blank=True)
    sub_title2  = models.CharField(max_length=512, blank=True)

    # Video conference / streaming provider
    video_provider  = models.CharField(max_length=512, blank=True)
    video_meet_host = models.CharField(max_length=512, blank=True)

    # WebApp site activation
    activation_key  = models.CharField(max_length=50, blank=True)
    activation_date = models.DateTimeField(default=datetime.now, blank=True)
    expiration_date = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return str(self.webapp_id) + ': ' + self.webapp_name

# Page promotions
class Promotion(models.Model):
    webapp      = models.ForeignKey(WebApp, on_delete=models.CASCADE)
    sequence    = models.IntegerField(default=0)
    image       = models.ImageField(upload_to='web-promotion/', blank=True)
    name        = models.TextField()
    description = models.TextField(blank=True)

# Sponsors
class Feature1(models.Model):
    webapp      = models.ForeignKey(WebApp, on_delete=models.CASCADE)
    image       = models.ImageField(upload_to='web-feature1/', blank=True)
    name        = models.TextField()
    description = models.TextField(blank=True)
    label1      = models.CharField(max_length=250, blank=True)
    label2      = models.CharField(max_length=250, blank=True)
    label3      = models.CharField(max_length=250, blank=True)

# Speakers schedule
class Feature2(models.Model):
    webapp      = models.ForeignKey(WebApp, on_delete=models.CASCADE)
    image       = models.ImageField(upload_to='web-feature2/', blank=True)
    name        = models.TextField()
    description = models.TextField(blank=True)
    label1      = models.CharField(max_length=250, blank=True)
    label2      = models.CharField(max_length=250, blank=True)
    label3      = models.CharField(max_length=250, blank=True)

# Testimonials from participants
class Banner(models.Model):
    webapp      = models.ForeignKey(WebApp, on_delete=models.CASCADE)
    image       = models.ImageField(upload_to='web-banner/', blank=True)
    name        = models.TextField()
    description = models.TextField(blank=True)
    label1      = models.CharField(max_length=250, blank=True)
    label2      = models.CharField(max_length=250, blank=True)
    label3      = models.CharField(max_length=250, blank=True)
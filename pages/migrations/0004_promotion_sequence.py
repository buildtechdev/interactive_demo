# Generated by Django 3.1.1 on 2020-09-24 12:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0003_remove_promotion_sequence'),
    ]

    operations = [
        migrations.AddField(
            model_name='promotion',
            name='sequence',
            field=models.IntegerField(default=0),
        ),
    ]
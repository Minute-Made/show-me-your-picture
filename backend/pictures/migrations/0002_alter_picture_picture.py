# Generated by Django 3.2.11 on 2022-01-15 09:44

from django.db import migrations, models
import pictures.models


class Migration(migrations.Migration):

    dependencies = [
        ('pictures', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='picture',
            name='picture',
            field=models.ImageField(blank=True, upload_to=pictures.models.Picture.date_upload_to),
        ),
    ]
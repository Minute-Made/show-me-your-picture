# Generated by Django 3.2.11 on 2022-01-15 06:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pictures', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='picture',
            old_name='picture',
            new_name='image',
        ),
    ]

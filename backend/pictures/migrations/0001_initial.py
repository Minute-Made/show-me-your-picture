# Generated by Django 3.2.11 on 2022-01-15 06:50

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import pictures.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Picture',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField(blank=True)),
                ('description', models.TextField(blank=True)),
                ('author', models.TextField(blank=True)),
                ('picture', models.ImageField(upload_to=pictures.models.Picture.date_upload_to)),
            ],
        ),
        migrations.CreateModel(
            name='PicturePrivacy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('picture', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='pictures.picture')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AddField(
            model_name='picture',
            name='exchange_user',
            field=models.ManyToManyField(blank=True, related_name='exchange_pic', through='pictures.PicturePrivacy', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='picture',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]

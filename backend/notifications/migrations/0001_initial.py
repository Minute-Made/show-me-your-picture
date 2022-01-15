# Generated by Django 3.2.11 on 2022-01-15 11:36

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('pictures', '__first__'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Notification',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('my_pic_id', models.IntegerField()),
                ('check_status', models.BooleanField(default=False)),
                ('requestee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('requestor_pic', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='pictures.picture')),
            ],
        ),
    ]
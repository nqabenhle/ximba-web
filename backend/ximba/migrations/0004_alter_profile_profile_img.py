# Generated by Django 4.2.1 on 2023-06-08 12:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ximba', '0003_remove_profile_user_user_profile'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='profile_img',
            field=models.ImageField(default='/static/ximba/images/profiles/default.png', upload_to='ximba/static/ximba/images/profiles'),
        ),
    ]

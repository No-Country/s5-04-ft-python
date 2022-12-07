# Generated by Django 4.0 on 2022-12-05 23:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0010_alter_user_bicycle_alter_user_info_person_and_more'),
        ('router', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='routemodels',
            name='user_id',
            field=models.OneToOneField(default=1, on_delete=django.db.models.deletion.CASCADE, to='accounts.user'),
            preserve_default=False,
        ),
        migrations.DeleteModel(
            name='UserRouterModels',
        ),
    ]
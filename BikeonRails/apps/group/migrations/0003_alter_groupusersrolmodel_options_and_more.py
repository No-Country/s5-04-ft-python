# Generated by Django 4.0 on 2022-12-04 05:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('group', '0002_rolesmodel_groupusersrolmodel'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='groupusersrolmodel',
            options={'ordering': ['id'], 'verbose_name': 'GroupsUserRol', 'verbose_name_plural': 'GroupsUserRols'},
        ),
        migrations.RenameField(
            model_name='groupusersrolmodel',
            old_name='user_id',
            new_name='user_menber_id',
        ),
    ]
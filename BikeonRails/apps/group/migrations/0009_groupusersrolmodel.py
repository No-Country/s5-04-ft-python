# Generated by Django 4.0 on 2022-12-06 20:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0010_alter_user_bicycle_alter_user_info_person_and_more'),
        ('group', '0008_delete_groupusersrolmodel_delete_rolesmodel'),
    ]

    operations = [
        migrations.CreateModel(
            name='GroupUsersRolModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rol', models.BooleanField(default=True)),
                ('group_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='group.bikegroupsmodel')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='accounts.user')),
            ],
            options={
                'verbose_name': 'GroupsUserRol',
                'verbose_name_plural': 'GroupsUserRols',
                'ordering': ['id'],
            },
        ),
    ]

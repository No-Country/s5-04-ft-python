# Django-rest framework
========================================================
## How to run the Project
- Install Postgreql
- Install Python
- Git clone the project with ``` git clone git@github.com:No-Country/s5-04-ft-python.git```
- Create your virtualenv with `Pipenv` or `virtualenv` and activate it.
- Install the requirements with 
```sh
$pip install -r requirements.txt
```
- Create you database with
```sh
$python manage.py makemigrations
$python manage.py runserver
```
- Finally run the API 
```sh
$python manage.py runserver
```
========================================================

##  - BACK END API


## ROUTES TO IMPLEMENT
| METHOD   | ROUTE                                   | FUNCTIONALITY             | ACCESS       |
|----------|-----------------------------------------|---------------------------|--------------|
| *POST*   | ```/auth/login/```                      | _Login user_              | _All users_  |
| *POST*   | ```/auth/logout/```                     | _Logout user_             | _All users_  |
| *POST*   | ```/auth/register/```                   | _Register new user_       | _All users_  |
| *GET*    | ```/auth/email-verify/```               | _Verify email user_       | _All users_  |
| *POST*   | ```/auth/request-reset-email/```        | _Request reset email_     | _All users_  |
| *GET*    | ```/auth/password-reset/<uidb64>/<token>/``` | _Validation Token_        | _All users_  |
| *POST*   | ```/auth/password-reset-complete/```    | _Reset password of email_ | _All users_  |
| *POST*   | ```/auth/token/refresh/```              | _Token refresh_           | _All users_  |
| *GET*    | ```/groups/group/```                    | _List Groups_             | _All users_  |
| *POST*   | ```/groups/group/```                    | _Create Group_            | _All users_  |
| *PUT*    | ```/groups/group/<id>/```               | _Update Group_            | _User Admin_ |
| *DELETE* | ```/groups/group/<id>/```               | _Delete Group_            | _User Admin_ |
| *GET*    | ```/routes/route/```                    | _List Route_              | _All users_  |
| *POST*   | ```/routes/route/```                    | _Create Route_            | _All users_  |
| *PUT*    | ```/routes/route/<id>/```               | _Update Route_              | _All users_  |

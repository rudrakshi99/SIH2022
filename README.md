# Krishi Sadhan


[![Built with Cookiecutter Django](https://img.shields.io/badge/built%20with-Cookiecutter%20Django-ff69b4.svg?logo=cookiecutter)](https://github.com/cookiecutter/cookiecutter-django/)
[![Black code style](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/ambv/black)

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technology Stack to be used](#technology-stack-to-be-used)
4. [GitHub Repository Structure](#github-repository-structure)
5. [Getting Started](#getting-started)
	1. [Fork, clone locally and create a branch](#fork-clone-locally--create-a-branch)
	1. [Setting Environment First Time](#setting-environment-first-time)
		1. [Basic Requirements](#basic-requirements)
		1. [Creating Virtual Environment](#creating-virtual-environment)
		1. [Installing Requirements](#installing-requirements)
		1. [Setting up Environment File](#setting-up-environment-file)
		1. [Migrating Database](#migrating-database)
		1. [Create Superuser](#create-superuser)
	1. [Starting Development Server](#starting-development-server)
	1. [Leaving the virtual environment](#leaving-the-virtual-environment)
	1. [Update requirements file](#update-requirements-file-critical)
	1. [Update Database](#update-database)  
6. [Developers](#developers)
7. [Maintainers](#maintainers)


## Features

1. Login/Sign Up.
2. JWT Authentication.
3. OTP Verification.
4. Add Equipment details related to various categories like Crop Protection, Harvesting Equipment,etc
5. Search equipments of a particular category using the title.
6. Filter equipment based on their category, price, availability, etc.
7. Book and rent equipment for off-season.
8. Track booking requests.
10. View the list of comments and replies related to particular posts.
11. LimitOffsetPagination for custom pagination style.
12. Support Centre
13. Chat with owner and customer.


## Technology Stack to be used:

<img src="https://img.shields.io/badge/python%20-%2314354C.svg?&style=for-the-badge&logo=python&logoColor=white"/> <img src="https://img.shields.io/badge/django%20-%23092E20.svg?&style=for-the-badge&logo=django&logoColor=white"/>  <img src="https://img.shields.io/badge/markdown-%23000000.svg?&style=for-the-badge&logo=markdown&logoColor=white"/><img src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/> <img src="https://img.shields.io/badge/postgres-0B96B2?style=for-the-badge&logo=postgresql&logoColor=white"/> <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"/>

[![View in Swagger](http://jessemillar.github.io/view-in-swagger-button/button.svg)](https://blogwall.herokuapp.com/swagger/)
[![Run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/14143990/UVXhrHVq)

## Getting Started

### Fork, clone locally & create a branch

Fork [Krishi Sadhan Backend](https://github.com/rudrakshi99/SIH2022.git) repository and clone at your local 

- Fork and Clone the repo using
```
$ git clone https://github.com/rudrakshi99/SIH2022.git
```
- Change Branch to `backend` using 
```
$ git checkout backend
```
### Setting Environment First Time

#### Basic Requirements 
1. [Python](https://www.python.org/downloads/)
1. [pip](https://pip.pypa.io/en/stable/installation/)

#### Creating [Virtual Environment](https://docs.python.org/3/library/venv.html) 

A virtual environment is a tool that helps keep dependencies required and the project isolated. If you wish to install a new library and write
```
pip install name_of_library
``` 
on the terminal without activating an environment, all the packages will be installed globally which is not a good practice if you’re working with different projects on your computer.

If this sounds a bit complicated, don’t worry so much because a virtual environment is just a directory that will contain all the necessary files for our project to run.

**Installing venv (required once)**

**Windows**
```
py -m pip install --user virtualenv
py -m venv env
```
**Linux**
```
python3 -m pip install --user virtualenv
python3 -m venv env
```

You have to start virtual environment everytime you start new terminal -

**Windows**

Using gitbash
```
. env/Scripts/activate
```
Using Powershell
```
. env\Scripts\activate
```
**Linux**
```
source env/bin/activate
```

#### Installing Requirements 

**Windows**
```
pip install -r requirements/base.txt
pip install -r requirements/local.txt
```
**Linux**
```
pip install -r requirements/base.txt
pip install -r requirements/local.txt
```
#### Setting up Environment File

**Configuring Environment Variables**

Make environment file by copying the example file -
```
cd .envs/.local
cp .django .env
cp .postgres .env
``` 

#### Migrating Database
**Windows**
```
py manage.py migrate
```
**Linux**
```
python3 manage.py migrate
```

#### Create Superuser
**Windows**
```
py manage.py createsupeser
```
**Linux**
```
python3 manage.py createsupeser
```

### Starting Development Server
**Windows**
```
py manage.py runserver
```
**Linux**
```
python3 manage.py runserver
``` 

### Leaving the virtual environment
```
deactivate
```

### Update requirements file (Critical)
If you have installed new dependency, the pip freeze command lists the third-party packages and versions installed in the environment. 

**Windows**
```
pip freeze > requirements/local.txt
```
**Linux**
```
pip3 freeze > requirements/local.txt
```

### Update Database  
Everytime you change db models, you need to run makemigrations and migrate to update on database.

**Windows**
```
py manage.py makemigrations
py manage.py migrate
```
**Linux**
```
python3 manage.py makemigrations
python3 manage.py migrate
``` 
## Developers:

> "Alone we can do so little; together we can do so much."

| S.No. | Name | Role | GitHub Username:octocat: |
| --------------- | --------------- | --------------- | --------------- |
| 1. | Sarthak Shukla | Frontend Development | [@sarthakshukla1316](https://github.com/sarthakshukla1316) |
| 2. | Suyash Rastogi | Frontend Development | [@suyashrastogi7](https://github.com/suyashrastogi7) |
| 3. | Rudrakshi | Backend Development| [@rudrakshi99](https://github.com/rudrakshi99)  |
| 4. | Anmol Srivastava | Backend Development| [@anmolsrivastava1](https://github.com/anmolsrivastava1)  |
| 5. | Parth Sharma | ML Engineer | [@ParthSharmaT](https://github.com/ParthSharmaT)  |
| 6. | Kushal Gautam | UI Designer | [@kushalgautam](https://github.com/kushalgautam)  |

## Maintainers✨

<table>
  <tbody><tr>
    <td align="center"><a href="https://github.com/rudrakshi99"><img alt="" src="https://avatars.githubusercontent.com/rudrakshi99" width="100px;"><br><sub><b>Rudrakshi</b></sub></a><br><a href="https://github.com/rudrakshi99/SIH2022/commits/backend?author=rudrakshi99" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/sarthakshukla1316"><img alt="" src="https://avatars.githubusercontent.com/sarthakshukla1316" width="100px;"><br><sub><b>Sarthak Shukla </b></sub></a><br><a href="https://github.com/rudrakshi99/SIH2022/commits?author=sarthakshukla1316" title="Code">💻</a></td>
  </tr>
</tbody></table>

[![Uses Git](https://forthebadge.com/images/badges/uses-git.svg)](https://github.com/rudrakshi99/SIH2022.git) 
[![forthebadge](https://forthebadge.com/images/badges/made-with-python.svg)](https://github.com/rudrakshi99/SIH2022.git)
[![Built with love](https://forthebadge.com/images/badges/built-with-love.svg)](https://github.com/rudrakshi99/SIH2022.git) [![Built By Developers](https://forthebadge.com/images/badges/built-by-developers.svg)](https://github.com/rudrakshi99/SIH2022.git) 

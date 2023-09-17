# React + Django + Nginx + Docker + Certbot + OCI = PWA Web App running on the Cloud Server

## How To Use This Repo
Choose the Step you need by reading this README. You can fine each step code in branches.

## Step 0
- Use https://www.toptal.com/developers/gitignore/ to prepare for secure development
- react / Django / Node / certificates / Linux / Git
- Using main branch = developing branch here, and there will be release branches

## Step 1
# prerequisites
- Node.js installed on your computer
- { create-react-app } package installed on your Node.js

# Choose this if you want to:
    - Use React and doesn't want anything else
# What this code left for you to fill:
    - Content of React app
# What this code have done for you:
    - Create react project using template containing PWA configuration:
```shell
web-app-boilerplate$ npx create-react-app frontend --template cra-template-pwa-typescript
```

## Step 2
# prerequisites
- Python3 installed on your computer
- { Django, django-environ, django-cors-headers } packages intalled on your python3
# Choose this if you want to:
    - Use React as frontend and Django as backend with CORS problem already solved
# What this code left for you to fill:
    - Content of Django as an api server
    - backend/.env file that contains SECRET_KEY of Django(it can be a random string created by you)
# What this code have done for you:
    - Create django project using template:
```shell
web-app-boilerplate$ django-admin startproject backend
```
    - Pull out SECRET_KEY in backend/backend/settings.py and put it in .env file that is gitignored
    - CORS settings in frontend and backend
    - Create example backend api and call it in frontend

## Step 3
# prerequisites
- Docker installed on your computer(If you are using Windows, you would also need WSL2 to use Linux because you cannot use docker fully on Windows)
# Choose this if you want to:
    - Use Docker to deploy your app easily
# What this code left for you to fill:
    - Use "backend$ python -m pip freeze > requirements.txt" command to create requirements.txt file that contains what python packages you have to install
    - Edit python version in top of backend Dockerfile so that it matches to the python version you are using in development
    - Sign in and log in to DockerHub so that you can use push / pull command when deploying
    - Put your dockerhub username in docker-compose.yml OR Create .env file in the root directory and put "DOCKERHUB_USERNAME=your-dockerhub-username"
# What this code have done for you:
    - Create common workable Dockerfile for production of Django
    - Create common workable Dockerfile for production of React
    - Create workable docker-compose.yml for running Django backend and React frontend

## Step 4
# prerequisites
    - Docker installed on your computer
# Choose this if you want to:
    - Control concurrent requests
# What this code left for you to fill:
    - Customize urls if you want
# What this code have done for you:
    - Create common, locally workable nginx/nginx.conf file
    - Add nginx service to docker-compose.yml

## Step 5
# prerequisites
    - Your own Cloud Server(AWS, Azure, OCI, ...)
# Choose this if you want to:
    - Run the project all day long not using your computer
# What this code left for you to fill:
    - Put IP of your cloud server in backend/.env (key name = SERVER_IP)
    - Put IP of your cloud server in frontend/.env (key name = REACT_APP_SERVER_IP)
    - Run this project in your cloud server
# What this code have done for you:
    - Use the IP in env files in frontend / backend
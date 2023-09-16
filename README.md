# web-app-boilerplate
React + Django + Nginx + Docker + Certbot + OCI = PWA Web App running on the Cloud Server


## How To Use This Repo
- Read this README.md and choose the Step you need. You can find each step in branches.
- You don't have to follow all of these steps, nor its order.
(e.g.1) You can skip React Frontend in Step 1 and use Django as Frontend and Backend if you want.
(e.g.2) You can start using Docker in Step 3 after using Web Server in Step 4 if you want.

## Step 0
- Use https://www.toptal.com/developers/gitignore/ to prepare for secure development
- react / Django / Node / certificates / Linux / Git
- Using main branch = developing branch here, and there will be release branches

## Step 1
# prerequisites: Node.js installed on your computer, { create-react-app } package installed on your Node.js
- Choose this if you want to: Use React and doesn't want anything else
- What this code left for you to fill:
    - Content of React app
- What this code have done for you:
    - Create react project using template containing PWA configuration:
        ```shell
        web-app-boilerplate$ npx create-react-app frontend --template cra-template-pwa-typescript
        ```

## Step 2
# prerequisites: Python3 installed on your computer, { Django, django-environ, django-cors-headers } packages intalled on your python3
- Choose this if you want to: Use React as frontend and Django as backend with CORS problem already solved
- What this code left for you to fill:
    - Django as an api server
    - backend/.env file that contains SECRET_KEY of Django
    - React as an app
- What this code have done for you:
    - Create django project using template:
        ```shell
        web-app-boilerplate$ django-admin startproject backend
        ```
    - Pull out SECRET_KEY in backend/backend/settings.py and put it in .env file that is gitignored
    - CORS settings in frontend and backend
    - Create example backend api and call it in frontend

## Step 3
# prerequisites: Docker installed on your computer(If you are using Windows, you would also need WSL2 to use Linux because you cannot use docker fully on Windows)
- Choose this if you want to: Use Docker to deploy your app easily
- What this code left for you to fill:
    - Use "backend$ python -m pip freeze > requirements.txt" command to create requirements.txt file that contains what python packages you have to install
    - Edit python version in top of backend Dockerfile so that it matches to the python version you are using in development
    - Sign in and log in to DockerHub so that you can use push / pull command when deploying
    - Put your dockerhub username in docker-compose.yml OR Create .env file in the root directory and put "DOCKERHUB_USERNAME=your-dockerhub-username"
    - After all configuration, type "docker compose up" to run all
- What this code have done for you:
    - Create common workable Dockerfile for production of Django
    - Create common workable Dockerfile for production of React
    - Create workable docker-compose.yml for running Django backend and React frontend
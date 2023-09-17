## React + Django +  Docker + Nginx + OCI + Cloudflare + Certbot
## PWA Web App running on the Cloud Server

# How To Use This Repo
1. Read "1. Choose this if you want to" and "2. What this code have done for you" of each step and choose the step you want
2. Prepare "Prerequisites"
3. Clone the branch you need
4. Follow "What this code left for you to fill" to run this code using config of yours
5. Enjoy building your web app!

# Step 0
- Use https://www.toptal.com/developers/gitignore/ to create gitignore file
- There will be release branches
- Main branch is equivalent to Step 7

# Step 1
## 1. Choose this if you want to:
- Use React and that's it
## 2. What this code have done for you:
- Create react project using template containing PWA configuration:
```shell
web-app-boilerplate$ npx create-react-app frontend --template cra-template-pwa-typescript
```
## 3. prerequisites
- Node.js installed on your computer
- { create-react-app } package installed on your Node.js
## 4. What this code left for you to fill:
- None

# Step 2
## 1. Choose this if you want to:
- Use React as frontend and Django as backend with CORS problem already solved
## 2. What this code have done for you:
- Create django project using template:
```shell
web-app-boilerplate$ django-admin startproject backend
```
- Make backend/backend/settings.py use the SECRET_KEY from backend/.env file
- CORS settings in frontend and backend
- Create a sample backend api and call it in frontend
## 3. prerequisites
- Python3 installed on your computer
- { Django, django-environ, django-cors-headers } packages intalled on your python3
## 4. What this code left for you to fill:
- backend/.env file that contains SECRET_KEY of Django(it can be a random string created by you)

# Step 3
## 1. Choose this if you want to:
- Use Docker to deploy your app easily
## 2. What this code have done for you:
- Create common workable Dockerfile for production of Django
- Create common workable Dockerfile for production of React
- Create workable docker-compose.yml for running Django backend and React frontend
## 3. prerequisites
- Docker installed on your computer(If you are using Windows, you would also need WSL2 to use Linux because you cannot use docker fully on Windows)
## 4. What this code left for you to fill:
- Use "backend$ python -m pip freeze > requirements.txt" command to create requirements.txt file that contains what python packages you have installed on your computer
- Edit python version in top of backend Dockerfile so that it matches to the python version you are using in development
- Sign in and log in to DockerHub so that you can use push / pull command when deploying
- Put your dockerhub username in docker-compose.yml OR Create .env file in the root directory and put "DOCKERHUB_USERNAME=your-dockerhub-username"

# Step 4
## 1. Choose this if you want to:
- Control many users on your website
## 2. What this code have done for you:
- Create common workable nginx/nginx.conf file
- Add nginx service to docker-compose.yml
## 3. prerequisites
- Docker installed on your computer
## 4. What this code left for you to fill:
- None

# Step 5
## 1. Choose this if you want to:
- Run the project all day long not using your computer
## 2. What this code have done for you:
- Use the IP in env files in frontend / backend
## 3. prerequisites
- Your own Cloud Server(AWS, Azure, OCI, ...)
## 4. What this code left for you to fill:
- Put IP of your cloud server in backend/.env (key name = SERVER_IP)
- Put IP of your cloud server in frontend/.env (key name = REACT_APP_SERVER_IP)
- Run this project in your cloud server

# Step 6
## 1. Choose this if you want to:
- Use your domain name instead of the server's raw IP address
## 2. What this code have done for you:
- Use the domain name in env files in frontend / backend / docker-compose.yml / web server(nginx)
## 3. prerequisites
- Your domain name that is linked to your server's IP address
## 4. What this code left for you to fill:
- Change "SERVER_IP" to your domain name in backend/.env
- Change "REACT_APP_SERVER_IP" to your domain name in frontend/.env
- Add "DOMAIN_NAME={your-domain-name}" to .env in root
- Change 8080 to 80 in docker-compose.yml and nginx/nginx.conf if you don't want to type :8080 at the browser

# Step 7
## 1. Choose this if you want to:
- Use HTTPS and actually get your server online to people
## 2. What this code have done for you:
- Use HTTPS(443 port) and turn request using HTTP(80 port) to HTTPS
- Not use 8080 port anymore
- turn backend to use https://api.{your-domain-name} and change urls according to it
## 3. prerequisites
- Use DNS server of Cloudflare
- Configure SSL settings in Cloudflare
## 4. What this code left for you to fill:
- None
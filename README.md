# web-app-boilerplate
React + Django + Nginx + Docker + Certbot + OCI = PWA Web App running on the Cloud Server


## Step 0
- Use https://www.toptal.com/developers/gitignore/ to prepare for secure development
- react / Django / Node / certificates / Linux / Git
- Using main branch = developing branch here, and there will be release branches

## Step 1
# prerequisite: Node.js installed on your computer, create-react-app package installed on your Node.js
- Create react project using template:
```shell
web-app-boilerplate$ npx create-react-app frontend --template cra-template-pwa-typescript
```
## Step2
# prerequisite: Python3 installed on your computer, Django, django-environ package intalled on the python3
- Create django project using template:
```shell
web-app-boilerplate$ django-admin startproject backend
```
- Pull out SECRET_KEY in backend/backend/settings.py and put it in .env file that is gitignored
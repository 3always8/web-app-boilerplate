FROM node:latest AS build

ENV REACT_DEBUG 0

WORKDIR /frontend

COPY package*.json ./

RUN npm ci --only=production

COPY . .

RUN npm run build

RUN npm install -g serve

CMD ["serve", "-s", "build", "-l", "3000"]
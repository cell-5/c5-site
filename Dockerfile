FROM node:8.11

RUN npm install -g npm@latest
RUN npm install -g bower
RUN npm install -g gulp

WORKDIR /app

EXPOSE 8000
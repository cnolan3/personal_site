# build
FROM node:12 AS builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN npm install -g @angular/cli
COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app
RUN ng build --prod
CMD [ "npm", "run", "start" ]

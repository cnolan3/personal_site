# build
FROM node:12 AS builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN npm install -g @angular/cli
COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app
RUN ng build --prod

# serve
FROM nginx:latest
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist/* /usr/share/nginx/html/
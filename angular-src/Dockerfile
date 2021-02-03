# build
FROM node:12
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN npm install -g @angular/cli@~10.0.3
RUN npm install @angular/cli@latest
COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app
CMD [ "ng", "build", "--prod" ]

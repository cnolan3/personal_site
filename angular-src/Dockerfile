FROM node:12
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN npm install -g @angular/cli
COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app
CMD ["npm", "run", "build", "--prod", "--configuration=production"]

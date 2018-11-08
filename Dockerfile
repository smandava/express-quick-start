FROM node:8.12.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

CMD  [ "yarn", "start" ]
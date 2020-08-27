FROM node:12

WORKDIR /usr/local/app

COPY . .

RUN yarn install

CMD [ "npm", "run", "serve"]

EXPOSE 4000

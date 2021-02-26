FROM node:14

WORKDIR /usr/local/app

COPY . .

CMD [ "npm", "run", "serve"]

EXPOSE 4000

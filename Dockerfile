FROM node:14

WORKDIR /usr/local/express-start

COPY . .

CMD [ "npm", "run", "start"]

EXPOSE 4000

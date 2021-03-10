FROM node:14

WORKDIR /usr/local/mini-chatroom

COPY . .

CMD [ "npm", "run", "start"]

EXPOSE 4000

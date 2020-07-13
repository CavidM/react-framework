FROM node:12

WORKDIR /todo

COPY package.json /todo/package.json

RUN npm install

EXPOSE 3000

COPY . /todo

CMD [ "npm", "start" ]

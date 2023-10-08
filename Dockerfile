FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV APP_PORT=8000

CMD [ "npm", "start" ]

FROM node:latest

COPY package.json /src/package.json
WORKDIR /src
RUN yarn install
COPY . /src

RUN yarn build:client
RUN yarn build:server

EXPOSE 3000

CMD ["node", "build/server.js"]

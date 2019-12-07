FROM node:latest

COPY package.json /src/package.json
WORKDIR /src
RUN yarn install

COPY . /src
EXPOSE 3000

CMD ["yarn", "debug"]

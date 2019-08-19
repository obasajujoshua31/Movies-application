FROM node:10

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

COPY . .

RUN yarn install

EXPOSE  9000

CMD [ "yarn", "start" ]

FROM node:18.19-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . .

RUN yarn --silent && yarn build

EXPOSE 5000

CMD ["yarn", "start:dev"]
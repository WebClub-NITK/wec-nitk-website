FROM node:20 as builder
WORKDIR /app
COPY ./package.json .
RUN npm i
COPY . .
CMD npm run build && npm run start
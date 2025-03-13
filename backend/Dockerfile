FROM node:20 AS builder
WORKDIR /app
RUN npm install -g corepack@latest
RUN corepack enable pnpm
COPY ./package.json .
RUN pnpm i
COPY . .
ARG BACKEND_URL
RUN pnpm run build
CMD [ "pnpm", "run", "start" ]
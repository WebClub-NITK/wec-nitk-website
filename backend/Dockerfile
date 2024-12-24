FROM node:20 AS builder
WORKDIR /app
COPY ./package.json .
RUN corepack enable pnpm
RUN pnpm i
COPY . .
ARG BACKEND_URL
RUN pnpm run build
CMD [ "pnpm", "run", "start" ]
FROM node:20 AS builder
WORKDIR /app
COPY ./package.json .
RUN corepack enable pnpm
RUN pnpm i
COPY . .
CMD pnpm run build && pnpm run start
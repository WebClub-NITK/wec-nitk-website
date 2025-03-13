FROM node:20 AS builder
WORKDIR /app
RUN npm install -g corepack@latest
RUN corepack enable pnpm
COPY ./package.json .
RUN pnpm i
COPY . .
CMD pnpm run build && pnpm run start
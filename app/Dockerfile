# syntax=docker/dockerfile:1

ARG NODE_VERSION=18.17.1

FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV production

WORKDIR /usr/src/app

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=cache,target=/root/.npm \
    npm install --omit=dev

USER node

COPY . .

EXPOSE 4000

CMD node src/index.js

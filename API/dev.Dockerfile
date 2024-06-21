FROM node:16.13 as builder
WORKDIR /app/common
COPY ./common ./
WORKDIR /common/logs
RUN yarn install
WORKDIR /common/utils/APIRequests
RUN yarn install

WORKDIR /app/API
COPY ./API/package.json ./API/yarn.lock ./
RUN yarn install
#RUN apt-get update && apt-get add --no-cache --update libkrb5-dev
#RUN yarn add global run-rs
COPY ./API ./
RUN yarn build
RUN find . -maxdepth 1 -not \( -name "." -o -name "tsconfig*" -o -name "package.json" -o -name "dist" -o -name "node_modules" \) -exec rm -r {} +
RUN chown -R 1000:1000 ./dist


FROM node:16.13-alpine
USER node
COPY --from=builder /app ./
WORKDIR /API

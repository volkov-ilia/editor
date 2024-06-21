FROM node:16.13-alpine as builder

WORKDIR /app/common
COPY ./common ./
WORKDIR /common/logs
RUN yarn install
WORKDIR /common/utils/APIRequests
RUN yarn install
WORKDIR /common/tests/cardsGenerator
RUN yarn install

WORKDIR /app/API
COPY ./API/package.json ./API/yarn.lock ./
RUN yarn install
COPY ./API ./
COPY ./mongodb/buildTSFiles.sh ./

RUN ["sh", "./buildTSFiles.sh"]

FROM mongo:5.0.7

COPY --from=builder /app/API/node_modules /API/node_modules
COPY --from=builder /app/API/dist /API/dist
COPY --from=builder /app/API/package.json /API/dist/package.json

ENTRYPOINT ["bin/bash","/API/mongodb/createUserAndLoadArticles.sh"]


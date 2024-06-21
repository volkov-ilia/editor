FROM node:16.13-alpine as builder

COPY ./common /common
WORKDIR /common/logs
RUN yarn install
WORKDIR /common/utils/APIRequests
RUN yarn install

WORKDIR /schedule-service
COPY ./schedule-service/package.json ./schedule-service/yarn.lock ./
RUN yarn install
COPY ./schedule-service ./
RUN yarn build

RUN rm -rf node_modules
RUN yarn install --production
RUN find . -maxdepth 1 -not \( -name "." -o -name "tsconfig*" -o -name "package.json" -o -name "dist" -o -name "node_modules" \) -exec rm -r {} +
RUN chown -R 1000:1000 /schedule-service/dist

FROM node:16.13-alpine
USER node
WORKDIR /schedule-service
COPY --from=builder /schedule-service ./
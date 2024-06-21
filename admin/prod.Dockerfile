FROM node:16.13-alpine as builder

ARG client_id
ENV CLIENT_ID=$client_id
ARG api_auth
ENV API_AUTH=$api_auth
ARG base_url
ENV BASE_URL=$base_url
ARG api_version
ENV API_VERSION=$api_version
ARG api_content
ENV API_CONTENT=$api_content

COPY ./common /common
WORKDIR /common/logs
RUN yarn install
WORKDIR /common/utils/APIRequests
RUN yarn install

WORKDIR /admin
COPY ./admin/package.json ./admin/yarn.lock ./
RUN yarn install
COPY ./admin ./
RUN yarn build
RUN rm -rf node_modules
RUN yarn install --production
RUN find . -maxdepth 1 -not \( -name "." -o -name "next.config.js" -o -name "package.json" -o -name ".next" -o -name "public" -o -name "node_modules" \) -exec rm -r {} +
RUN chown -R 1000:1000 /admin/.next

FROM node:16.13-alpine
USER node
WORKDIR /admin
COPY --from=builder /admin ./

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
ARG api_auth_client
ENV API_AUTH_CLIENT=$api_auth_client

COPY ./common /common
WORKDIR /common/logs
RUN yarn install
WORKDIR /common/utils/APIRequests
RUN yarn install

WORKDIR /auth-client
COPY ./auth-client/package.json ./auth-client/yarn.lock ./
RUN yarn install
COPY ./auth-client ./
RUN yarn build
RUN rm -rf node_modules
RUN yarn install --production
RUN find . -maxdepth 1 -not \( -name "." -o -name "next.config.js" -o -name "package.json" -o -name ".next" -o -name "public" -o -name "node_modules" \) -exec rm -r {} +
RUN chown -R 1000:1000 /auth-client/.next

FROM node:16.13-alpine
USER node
WORKDIR /auth-client
COPY --from=builder /auth-client ./
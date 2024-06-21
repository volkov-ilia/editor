FROM node:16.13-alpine as builder
ARG base_url
ENV BASE_URL=$base_url
ARG api_content
ENV API_CONTENT=$api_content
ARG api_auth_client
ENV API_AUTH_CLIENT=$api_auth_client

WORKDIR /app/common
COPY ./common ./
WORKDIR app/common/logs
RUN yarn install
WORKDIR /app/common/utils/APIRequests
RUN yarn install

WORKDIR /app/auth-client
COPY ./auth-client/package.json ./auth-client/yarn.lock ./
RUN yarn install
COPY ./auth-client ./
RUN yarn build
RUN find . -maxdepth 1 -not \( -name "." -o -name "next.config.js" -o -name "package.json" -o -name ".next" -o -name "public" -o -name "node_modules" \) -exec rm -r {} +
RUN chown -R 1000:1000 ./.next


FROM node:16.13-alpine
USER node
COPY --from=builder /app ./
WORKDIR /auth-client

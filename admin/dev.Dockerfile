FROM node:16.13-alpine as builder
ARG base_url
ENV BASE_URL=$base_url
ARG api_content
ENV API_CONTENT=$api_content

WORKDIR /app/common
COPY ./common ./
WORKDIR app/common/logs
RUN yarn install
WORKDIR /app/common/utils/APIRequests
RUN yarn install

WORKDIR /app/admin
COPY ./admin/package.json ./admin/yarn.lock ./
RUN yarn install
COPY ./admin ./
RUN yarn build
RUN find . -maxdepth 1 -not \( -name "." -o -name "next.config.js" -o -name "package.json" -o -name ".next" -o -name "public" -o -name "node_modules" \) -exec rm -r {} +
RUN chown -R 1000:1000 ./.next


FROM node:16.13-alpine
USER node
COPY --from=builder /app ./
WORKDIR /admin

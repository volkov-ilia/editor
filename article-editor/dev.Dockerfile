FROM node:16.13-alpine as builder

ARG api_article_editor
ENV API_ARTICLE_EDITOR=$api_article_editor
ARG base_url
ENV BASE_URL=$base_url
ARG api_articles
ENV API_ARTICLES=$api_articles

WORKDIR /app/common
COPY ./common ./
WORKDIR app/common/logs
RUN yarn install
WORKDIR /app/common/utils/APIRequests
RUN yarn install
WORKDIR /app/common/libs/hwdtech-admin-components
RUN yarn build

WORKDIR /app/article-editor
COPY ./article-editor ./
RUN yarn install && yarn build
RUN find . -maxdepth 1 -not \( -name "." -o -name "next.config.js" -o -name "package.json" -o -name ".next" -o -name "public" -o -name "node_modules" \) -exec rm -r {} +
RUN chown -R 1000:1000 /app/article-editor

FROM node:16.13-alpine
USER node
COPY --from=builder /app ./
WORKDIR /article-editor


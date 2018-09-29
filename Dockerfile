FROM node:10 as builder

WORKDIR /app
COPY . /app
RUN rm -rf dist
RUN rm -rf .cache
RUN npm i yarn -g
RUN yarn
RUN yarn build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

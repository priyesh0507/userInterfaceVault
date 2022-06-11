# Stage 1

FROM node:16.10-alpine as build-step
RUN apk add --update python3 make g++\
   && rm -rf /var/cache/apk/*
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app

RUN npm run build --prod

# Stage 2

FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/vault-as-service /usr/share/nginx/html

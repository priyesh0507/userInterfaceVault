# Stage 1

FROM dockerhub.gemalto.com/gemalto/alpine.nodejs.npm:latest as builder
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app

RUN npm run build --prod

# Stage 2

FROM nginx:1.17.1-alpine
COPY --from=build-step /app/dist/vault-as-service /usr/share/nginx/html

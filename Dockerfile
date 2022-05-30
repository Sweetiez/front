FROM node:16-alpine as build-step

ARG REACT_APP_API_ENDPOINT

ENV REACT_APP_API_ENDPOINT $REACT_APP_API_ENDPOINT

ARG REACT_APP_BASE_URL

ENV REACT_APP_BASE_URL $REACT_APP_BASE_URL

ARG REACT_APP_STRIPE_PUBLISHABLE_KEY

ENV REACT_APP_STRIPE_PUBLISHABLE_KEY $REACT_APP_STRIPE_PUBLISHABLE_KEY

RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install --force
COPY . /app
RUN npm run build

FROM nginx:alpine

COPY --from=build-step /app/build /usr/share/nginx/html
COPY --from=build-step /app/nginx.conf /etc/nginx/conf.d/default.conf
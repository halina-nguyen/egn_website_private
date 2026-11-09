FROM node:26.13.0-alpine3.24 AS build
WORKDIR /dist/src/app
RUN npm cache clean --force
COPY . .
RUN npm install
RUN npm run build --prod

FROM node:26.13.0-alpine3.24
RUN addgroup -S angular
RUN adduser -S angular -G angular
USER angular
WORKDIR /usr/app
COPY --from=build /dist/src/app/dist/egn_website-frontend /usr/app
CMD ["node", "server/server.mjs"]
EXPOSE 4000

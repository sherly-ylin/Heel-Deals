

FROM node:latest as build

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli

RUN npm install

RUN npm run build

# Stage 2

FROM nginx:latest

COPY --from=build /usr/src/app/dist/pieces /usr/share/nginx/html
# Expose port 80
EXPOSE 80
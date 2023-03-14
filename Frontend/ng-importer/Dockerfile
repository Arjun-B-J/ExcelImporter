FROM node:lts-alpine as build-stage

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
CMD [ "npx", "ng", "serve" ,"--host" ,"0.0.0.0"] 

# FROM nginx:1.19
# COPY --from=build-stage /app/dist/ng-importer /usr/share/nginx/html
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 4200 
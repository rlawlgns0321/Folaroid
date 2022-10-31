FROM node:16.16.0 as build-stage
WORKDIR /var/jenkins_home/workspace/S07P31A103/frontend/folaroid
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /var/jenkins_home/workspace/S07P31A103/frontend/folaroid/build /usr/share/nginx/html
COPY --from=build-stage /var/jenkins_home/workspace/S07P31A103/frontend/folaroid/deploy_conf/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g","daemon off;"]
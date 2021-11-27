# pull official base image
FROM node:13.12.0-alpine as build

# set working directory
WORKDIR /home/app

# install app dependencies
COPY package.json /home/app/
COPY package-lock.json /home/app/
COPY src /home/app/src
COPY public /home/app/public

#install and build
RUN npm install --silent
# start app
#CMD ["npm", "start"]
RUN npm run build

FROM nginx:1.20.2-alpine
COPY --from=build /home/app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
#Build stage
FROM node:14.17-alpine3.10 as builder 

COPY . /app
WORKDIR /app
RUN ls
RUN npm install 
#RUN npm test || exit 1
RUN npm run build
RUN . ./start.sh
ENTRYPOINT node server.js
EXPOSE 8080
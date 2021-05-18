#Build stage
FROM node:14.17-alpine3.10 as builder 

COPY . /app
WORKDIR /app
RUN ls
RUN npm install 
#RUN npm test || exit 1 #Tests not available
RUN npm run build
ENTRYPOINT node ./server/index.js
EXPOSE 8080
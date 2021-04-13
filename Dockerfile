FROM node:15.14.0
RUN npm install -g npm@7.9.0
RUN mkdir /app
WORKDIR /app
ADD . /app
#COPY package*.json ./
RUN npm install

EXPOSE 8124
CMD [ "node", "app.js" ]
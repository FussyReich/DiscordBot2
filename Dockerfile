FROM node:19.7.0

COPY ./ /usr/app

WORKDIR /usr/app

RUN apt update -y && apt upgrade -y
RUN npm cache clean --force
RUN npm install

CMD ["node","index.js"]
FROM node:18.1-alpine

ENV PORT 3001

COPY . /home/app

WORKDIR /home/app

RUN npm install

EXPOSE 3001

CMD ["node", "app.js"]
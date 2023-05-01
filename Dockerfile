FROM node:19-alpine3.16

WORKDIR /src

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000

CMD [ "npm","run","start" ]

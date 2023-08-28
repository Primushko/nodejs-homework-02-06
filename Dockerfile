FROM node
WORKDIR /app
COPY . .
COPY package*.json ./
RUN export $(cat .env) && npm install
EXPOSE $PORT
CMD export $(cat .env) && npm start



FROM node:18-alpine
LABEL authors="Vladimir"

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENTRYPOINT ["npm", "start"]
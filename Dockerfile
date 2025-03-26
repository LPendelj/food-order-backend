FROM node:22-alpine

WORKDIR /usr/app

COPY ./ ./

RUN npm install

CMD ["npm", "start"]

# docker build -t lukapendelj/food-app .
# docker run -p 3000:3000 lukapendelj/food-app
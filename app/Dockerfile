FROM node:latest

RUN mkdir -p /user/src/app

# Create app directory (in docker)
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

# COPY app source
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
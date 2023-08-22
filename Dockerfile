FROM node:lts
WORKDIR /app
COPY package*.json .
RUN ["npm", "install"]
COPY . .
RUN "ls"
RUN ["npm", "run", "build"]
ENTRYPOINT [ "node", "./dist/index.js" ]
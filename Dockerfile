FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci 

COPY . .

RUN npm run build

# Command to serve the built website
CMD [ "npm", "run", "serve" ]
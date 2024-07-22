FROM node:13.12.0-alpine

WORKDIR /src
 
COPY package.json tsconfig.json ./

COPY src ./src


# Install dependencies
RUN npm install --verbose
 
RUN npm run build 

CMD ["npm", "run", "start"]


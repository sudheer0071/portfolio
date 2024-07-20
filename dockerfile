FROM node:20.12.0

WORKDIR /src
 
COPY package.json tsconfig.json ./

COPY src ./src


# Install dependencies
RUN npm install --verbose
 
RUN npm run build 

CMD ["npm", "run", "start"]


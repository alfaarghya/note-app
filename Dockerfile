FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# need to remove when we use dev command
# RUN npm run build 

EXPOSE 5173

# CMD ["node", "dist/index.js"]
CMD ["npm", "run", "docker"]
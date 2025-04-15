#etapa de build

FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY tsconfig.json ./
COPY src ./src
RUN npm run build

#etapa de produção

FROM node:20
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY package*.json ./
COPY database ./database 
RUN npm install --production
EXPOSE 3300
CMD ["node", "dist/server.js"]

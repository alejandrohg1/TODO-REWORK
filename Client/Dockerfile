#FROM node:19.3-alpine
#WORKDIR /app
#COPY package.json .
#RUN npm i
#COPY . .
# EXPOSE [Port you mentioned in the vite.config file]
#EXPOSE 5173
#CMD ["npm", "run", "dev"]


FROM node:19.3-alpine

WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# TODO-REWORK
 SI Proyecto

Para instalar el proyecto abre la carpeta TODO-REWORK

entrar a la carpeta de server abriendo la terminal con los siguientes comandos
cd server 
npm i
npm run start

abri otra terminal ahora en el cliente con
cd client
npm i
npm run dev

El proyecto cuenta con dos carpetas el server y el cliente

el server esta hecho con el framework express toda la configuracion del server esta en server.js
el cual se conecta con la base de datos en mongo db donde , la linea de conexion esta en en archivo .env

en frontend esta hecho en react js
haciendo un commit

DOQUER - CUBERNEC CONFIG

-------/Server--------
1-Crear imagen para el servidor en el puerto 5001
docker build -t im/server .

-------/TODO-REWORK--------
2-Crear yml de mongo
kubectl apply -f mongo-d.yml
kubectl apply -f mongo-s.yml

-------/TODO-REWORK--------
3-Crear yml de server
kubectl apply -f server-d.yml
kubectl apply -f server-s.yml

-------/Server--------
4-Correr la imagen del server
docker run -p 5001:3000 im/server

-------/Client--------
5-Crear imagen para el app en el puerto 5173
docker build -t im/todolist .

-------/TODO-REWORK--------
6-Crear yml de app
kubectl apply -f app-d.yml
kubectl apply -f app-s.yml

-------/Client--------
7-Correr la imagen del server
docker run -p 5001:3000 im/todolist

https://dev.to/ayabouchiha/react-material-ui-carousel-3mab

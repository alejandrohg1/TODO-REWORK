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

en frontend esta hecho en react

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
docker run -p 5173:3000 im/todolist

COMO INSTALAR  TERRAFORM

PASO 1
Instalar Terraform
choco install terraform
Instalar kind
choco install kind

PASO 2 
Crear Cluster
kind create cluster --name terraform-learn

PASO 3
kubectl config view --minify --flatten --context=kind-terraform-learn

Define the variables in a terraform.tfvars file.

host corresponds with clusters.cluster.server.
client_certificate corresponds with users.user.client-certificate.
client_key corresponds with users.user.client-key.
cluster_ca_certificate corresponds with clusters.cluster.certificate-authority-data.

buscar esas variables pog y cambiarlas en el archivo terraform.tfvars
PASO 4
ir cada carpeta cd Terraform y cd Terraformclient y correr los siguientes comandos
terraform init
PASO 5
terraform apply 

esperar a que te funcione y rezar

====Snort configuration =========
Pasos para instalar snort en docker

/*los siguientes comandos se deben de hacer en una terminal de powershell*/

ver imagenes existentes--docker images
instalar imagen -- docker pull {image}
iniciar imagen -- docker run -i -t --network="bridge" --privileged {image} bash
--apt-get update
--apt-get upgrade
--apt-get install snort --poner interface en eth0 y ip la local de la maquina/24
reconfigurar snort -- dpkg-reconfigure snort
--poner en manual
--interface eth0
--ip local del equipo/24
--yes modo promiscuo
--dar enter y no
--reiniciar servicios -- service snort restart
--abrir carpeta de snort cd etc/snort
instalar nano -- apt-get install nano
entrar a carpeta reglas -- cd rules
agregar reglas -- nano local.rules

reglas a agregar -- 
alert icmp any any -> any any (msg:"Pinging...";sid:1000004;)
#alert tcp any any -> any any (msg:"prueba tcp...";sid:1000005;)
alert udp any any -> any any (msg:"Prueba upd...";sid:1000006;)
alert tcp $EXTERNAL_NET any -> $HOME_NET any (msg: "DOS - ATTACK DETECTED"; sid:1;threshold: type both, track by_src, count 70, seconds 1;)
--reject tcp $EXTERNAL_NET any -> $HOME_NET any (sid: 1000008;)

regresar a carpeta de snort

/*los siguientes comandos se deben de hacer en una terminal de windows*/
iniciar imagen -- docker run -i -t --network="host" --privileged {image} bash
--apt-get update
--apt-get upgrade
instalar herramienta -- apt-get install net-tools 
instalar para hacer ping -- apt-get install iputils-ping
herramienta ataque DoS -- apt-get install hping3 -y

/*los siguientes comandos se deben de hacer en una terminal de powershell*/
-- snort -A console -c snort.conf -i eth0

/*los siguientes comandos se deben de hacer en una terminal de windows*/
hacer ping en la terminal configurada-- ping x x x x
--hping3 -c 1000 -d 120 -S -w 64 -p 80 --flood --rand-source x x x x

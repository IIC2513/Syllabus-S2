# Cómo les dijimos en el README, el Dockerfile son las instrucciones para crear la imagen de Docker.
# Primero, necesitamos saber cómo levantar la app sin Docker.
# En este caso, la app es un servidor Node.js que escucha en el puerto 3001.
# La app está en el archivo main.js y tiene como dependencias express y cors.
# Localmente, hacemos:
# npm install (o yarn)
# npm start (ejecuta node main.js, ver package.json)

# Siempre partimos de una imagen base.
FROM node:18-alpine

# Workdir indica el directorio de trabajo dentro del contenedor.
WORKDIR /usr/src/app

# Copy copia las dependencias de la app al contenedor.
# Esto es necesario para que Docker pueda cachear las dependencias y no tener que volver a instalarlas cada vez que cambiamos el código.
COPY package*.json ./

# Instalamos las dependencias de la app.
# Layer caching: docker vuelve a correr de esta capa en adelante si cambiamos algo en el código, si cambiamos una dependencia, corre el paso anterior.
RUN npm install

# Copy .. copia todos los archivos de nuestra app al contenedor. Excepto los que están en .dockerignore.
COPY . .

COPY .env .env

# Exponemos el puerto 3001 para que la app sea accesible desde fuera del contenedor.
EXPOSE 3001

# Definimos la variable de entorno NODE_ENV como development.
ENV NODE_ENV development

# CMD es parecido a RUN, pero se ejecuta cuando levantamos el contenedor.
# Si hicieramos RUN, el contenedor se quedaría parado.
CMD ["node", "main.js"]
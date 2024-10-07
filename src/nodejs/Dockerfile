# @file Dockerfile
# @brief Dockerfile para construir una imagen de Docker para una aplicación Node.js.
# 
# Este archivo define los pasos necesarios para construir una imagen de Docker que ejecuta una aplicación Node.js.
# Utiliza la imagen oficial de Node.js, copia los archivos necesarios, instala las dependencias y expone el puerto 8080.
# 
# @note Asegúrate de tener el archivo package.json correctamente configurado.
# @warning Este Dockerfile asume que el archivo main.js es el punto de entrada de la aplicación.
# @see https://docs.docker.com/engine/reference/builder/

# Usamos la imagen oficial de Node.js
FROM node:18

# Directorio de trabajo
WORKDIR /home/nodejs

# Copiamos el package.json y package-lock.json
COPY package*.json ./
COPY main.js /home/nodejs
# COPY servidorRest.js /home/nodejs
RUN if [ ! -f package.json ]; then npm init -y; fi
# @brief Copia los archivos de configuración de npm y el archivo main.js al directorio de trabajo.
# @param WORKDIR Establece el directorio de trabajo.
# @param COPY Copia los archivos package.json y package-lock.json al directorio de trabajo.
# @param RUN Ejecuta un comando para inicializar npm si no existe package.json.

# Instalamos las dependencias
RUN npm install
RUN apt update
RUN npm install mariadb
# @brief Instala las dependencias de npm y actualiza los paquetes del sistema.
# @param RUN Ejecuta comandos para instalar dependencias y actualizar paquetes.

# Copiamos el resto del código
COPY . .
# @brief Copia el resto del código de la aplicación al contenedor.
# @param COPY Copia todos los archivos del directorio actual al directorio de trabajo en el contenedor.

# Exponemos el puerto 8080
EXPOSE 8080
# @brief Expone el puerto 8080 para que la aplicación sea accesible desde fuera del contenedor.
# @param EXPOSE Define el puerto que se expondrá.

# Comando para ejecutar tu aplicación
# RUN es para ejecutar la imagen una vez para la instalación. COMANDO DE INSTALACIÓN DE LA IMAGEN
# CMD es para ejecutar la imagen cada vez que se inicie un contenedor. COMANDO DE EJECUCIÓN DE LA IMAGEN
CMD ["node", "main.js"]
# @brief Define el comando para ejecutar la aplicación cuando se inicie el contenedor.
# @param CMD Especifica el comando y los argumentos para ejecutar la aplicación.
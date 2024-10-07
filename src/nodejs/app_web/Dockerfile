# @file Dockerfile
# @brief Dockerfile para construir una imagen de Docker para un servidor Nginx.
# 
# Este archivo define los pasos necesarios para construir una imagen de Docker que sirve archivos estáticos utilizando Nginx.
# Utiliza la imagen oficial de Nginx y copia los archivos estáticos al directorio de Nginx.
# 
# @note Asegúrate de tener los archivos estáticos en el mismo directorio que este Dockerfile.
# @see https://docs.docker.com/engine/reference/builder/

# Usamos la imagen oficial de Nginx
FROM nginx:latest

# Copiamos todos los archivos al directorio de Nginx
COPY * /usr/share/nginx/html/
# @brief Copia todos los archivos estáticos al directorio de Nginx.
# @param COPY Copia todos los archivos del directorio actual al directorio /usr/share/nginx/html/ en el contenedor.
# @file Dockerfile
# @brief Dockerfile para construir una imagen de Docker para un servidor MariaDB.
# 
# Este archivo define los pasos necesarios para construir una imagen de Docker que ejecuta un servidor MariaDB.
# Utiliza la imagen oficial de MariaDB y copia los archivos SQL al directorio de inicialización de MariaDB.
# 
# @note Asegúrate de tener los archivos SQL en el directorio ./sql.
# @see https://docs.docker.com/engine/reference/builder/

# Usamos la imagen oficial de MariaDB
FROM mariadb:latest

# Definir la variable de entorno para la contraseña de root de MariaDB
# ENV MARIADB_ROOT_PASSWORD=1234
# Ya no hace falta la línea anterior porque la contraseña se pasa como argumento en el archivo variables.env
# @note La contraseña de root se define en el archivo variables.env y no en este Dockerfile.

# Copiamos el fichero .sql (que crea la base de datos con la tabla de prueba) dentro del contenedor
# Si lo ponemos en este directorio, ejecutará el script
# la primera vez que se arranque el contenedor a partir de esta imagen
COPY ./sql/*.sql /docker-entrypoint-initdb.d/
# @brief Copia los archivos SQL al directorio de inicialización de MariaDB.
# @param COPY Copia todos los archivos .sql del directorio ./sql al directorio /docker-entrypoint-initdb.d/ en el contenedor.
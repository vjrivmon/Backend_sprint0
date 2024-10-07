/**
 * @file main.js
 * @brief Servidor Express que se conecta a una base de datos MariaDB y expone una API REST.
 * 
 * Este archivo configura un servidor Express que se conecta a una base de datos MariaDB
 * utilizando un pool de conexiones. Proporciona una ruta para consultar datos de la base de datos.
 * 
 * @note Asegúrate de tener las variables de entorno configuradas correctamente.
 * @warning Este código no incluye manejo de errores avanzado ni autenticación.
 * @see https://expressjs.com/
 * @see https://mariadb.com/kb/en/nodejs-connector/
 * @see https://www.npmjs.com/package/dotenv
 * 
 * @autor Vicente Rivas Monferrer
 */

const mariadb = require('mariadb');
const express = require('express');
const dotenv = require('dotenv');
const app = express();

// Cargar variables de entorno desde el archivo .env
dotenv.config();

/**
 * @brief Configuración general de la base de datos.
 * 
 * Este objeto contiene la configuración necesaria para conectarse a la base de datos MariaDB.
 */
const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USUARIO,
  password: process.env.DB_CONTRASENYA,
  database: process.env.DB_NOMBRE,
  connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT, 10)
};

console.log("Creando pool...");

/**
 * @brief Crear un pool de conexiones.
 * 
 * Este pool de conexiones se utilizará para gestionar las conexiones a la base de datos.
 */
const pool = mariadb.createPool(config);

/**
 * @brief Manejar la señal SIGINT.
 * 
 * Este bloque de código se ejecuta cuando se detecta la señal SIGINT (Ctrl+C) y cierra el proceso.
 */
process.on("SIGINT", function() {
    console.log("ctl-C detectado");
    process.exit();
});

/**
 * @brief Ruta para consultar la base de datos.
 * 
 * Esta ruta realiza una consulta SELECT a la tabla 'mediciones' y devuelve los resultados en formato JSON.
 * 
 * @param req Objeto de solicitud HTTP.
 * @param res Objeto de respuesta HTTP.
 */
app.get('/', async (req, res) => {
  let connection;
  try {
    console.log("Conectando...");
    // Obtener una conexión del pool
    connection = await pool.getConnection();
    console.log("Conexión establecida.");

    // Realizar una consulta SELECT (puedes modificar la consulta según sea necesario)
    const rows = await connection.query('SELECT * FROM mediciones');
    
    // Enviar el resultado como respuesta
    res.json(rows);

  } catch (err) {
    console.error('Error: ', err);
    res.status(500).send('Error en la consulta a la base de datos');
  } finally {
    console.log("Liberando conexión...");
    // Liberar la conexión de vuelta al pool
    if (connection) {
      connection.release();
    }
    console.log("Fin del bloque finally.");
  }
});

/**
 * @brief Iniciar el servidor.
 * 
 * Este bloque de código inicia el servidor en el puerto 8080 y muestra un mensaje en la consola.
 */
app.listen(8080, () => {
  console.log('Servidor escuchando en http://localhost:8080');
});

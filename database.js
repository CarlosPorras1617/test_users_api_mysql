const mysql = require('mysql');
const dbConfig = require('./config/db.config');

//connection
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

//abrimos la conexión
connection.connect(error => {
    if(error) throw error;
    console.log("Conexión exitosa a base de datos");
})

module.exports = connection;
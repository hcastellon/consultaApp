const mysql = require('mysql2');

require('dotenv').config();

//var connection = mysql.createConnection({
//    host: process.env.DB_HOST,
//    user: process.env.DB_USERNAME,
//    database: process.env.DB_NAME,
//});
//
//connection.connect(function (err) {
//    if (err) 
//    {
//        throw err;
//    }
//    else
//    {
//        console.log('Conexion correcta.');
//    }
//});

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
});
module.exports = pool.promise();

//module.exports = connection;
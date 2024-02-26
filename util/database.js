const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'world',
    password: 'Ramkeshav72@'
});

module.exports = pool.promise();
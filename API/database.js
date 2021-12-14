const mysql = require('mysql');
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root', 
    password: '123',
    database: 'ProjectDB'
});
module.exports = connection;
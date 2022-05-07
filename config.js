var mysql = require('mysql2/promise');
var connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: 'interview'
});
module.exports = connection;
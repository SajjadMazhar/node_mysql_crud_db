'use strict';
const mysql = require("mysql")
exports.dbConn = mysql.createConnection({
    host = 'localhost',
    user: 'root',
    password: 'Sajj@d007',
    database: 'node_mysql_crud_db'
});
dbConn.connect((err) => {
    if (err) 
        throw err;
    
    console.log("Database Connected successfully")
});

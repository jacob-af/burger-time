const mysql = require("mysql2");
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "b00tcamp",
    database: "burgers_db",
  });
}

module.exports = connection;

// Set up MySQL connection.

// require("dotenv").config();
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection(process.env.DB_URL);
}
// = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "ya777nks",
//   // process.env.PW
//   database: "burger_db",
// });

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

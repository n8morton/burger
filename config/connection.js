var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "N9ahbear",
  database: "burger_db"
});

connection.connect(function(error) {
  if (error) {
    console.error(error.stack);
    return;
  }
  console.log("connected at " + connection.threadId);
});
module.exports = connection;

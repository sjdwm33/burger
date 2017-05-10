var mysql = require("mysql");
var appConfig = require("../config");

var connection = mysql.createConnection(appConfig.config);

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
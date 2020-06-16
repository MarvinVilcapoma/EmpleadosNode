var mysql = require('mysql');
var conn = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"marvin15889",
  database:"semana11"
});
conn.connect();
module.exports = conn;

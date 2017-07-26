var mysql = require('mysql');

var config = require('../../be-api/config/config');

var con = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
});

module.exports = con;
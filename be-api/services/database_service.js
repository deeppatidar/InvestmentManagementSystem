var con = require('../db/connection/connection');

con.connect(function(err) {
  if (err) {
  console.log(err);
  }
  console.log("Connected!");
});
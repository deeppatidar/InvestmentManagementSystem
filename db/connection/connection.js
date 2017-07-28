var mysql = require('mysql');

var config = require('../../be-api/config/config');

var connection = mysql.createPool({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
});

// var db_config = {
//   host: config.host,
//   user: config.user,
//   password: config.password,
//   database: config.database
// }
// connection.connect(function(err){
// if(!err) {
//     console.log("Database is connected");
// } else {
//     console.log("Error while connecting with database");
// }
// });
// module.exports = connection;
//
// var connection;
//
// function handleDisconnect() {
//   connection = mysql.createConnection(db_config); // Recreate the connection, since
//                                                   // the old one cannot be reused.
//
//   connection.connect(function(err) {              // The server is either down
//     if(err) {                                     // or restarting (takes a while sometimes).
//       console.log('error when connecting to db:', err);
//       setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
//     }                                     // to avoid a hot loop, and to allow our node script to
//   });                                     // process asynchronous requests in the meantime.
//                                           // If you're also serving http, display a 503 error.
//   connection.on('error', function(err) {
//     console.log('db error', err);
//     if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
//       handleDisconnect();                         // lost due to either server restart, or a
//     } else {                                      // connnection idle timeout (the wait_timeout
//       throw err;                                  // server variable configures this)
//     }
//   });
// }
// module.exports = connection;
// handleDisconnect();


// function handleDisconnect() {
//     connection.connect(function(err){
//     if(!err) {
//         console.log("Database is connected");
//     } else {
//         handleDisconnect();
//         console.log("Error while connecting with database");
//     }
//     });
//
// }
module.exports = connection;
//handleDisconnect();

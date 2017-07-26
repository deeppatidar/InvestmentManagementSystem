var express = require('express');
var router = express.Router()

var con = require('./db/connection/connection.js')
var app = express();

app.set('port', (process.env.PORT || 3000));
console.log(app.get('port'))

// api routes
require('./be-api/routes/routes')(app, router)

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;

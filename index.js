var express=require("express");
var bodyParser=require('body-parser');

var app = express();
var router=express.Router();
var morgan = require('morgan');


process.env.SECRET_KEY="thisismysecretkey";

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 3000));
console.log(app.get('port'))

// api routes
require('./be-api/routes/routes')(app, router)


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
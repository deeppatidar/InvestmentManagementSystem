
var jwt=require('jsonwebtoken');
var empService = require('../services/employee_service');
var response = require('../services/api_response')


function createToken(user) {
    return jwt.sign({foo: user},process.env.SECRET_KEY,{expiresIn: 1800});
}

module.exports.getAuthToken = function(req, res) {

        if (!req.body.email || !req.body.password) {
            return res.status(400).send("You must send the email and the password");
        }
        empService.getAuthTokenService(req.body,function(err, result) {
            if (err) {
                res.send(err);
            } else if(result && result.pass == req.body.password){
                response.authResponse(req, res, createToken(req.headers.userName), null)
            } else if (result && result.pass != req.body.password) {
                res.send({
                  success: false,
                  rcode : 500,
                  message : 'Incorrect password'
                });
            } else {
                res.send({
                  success: false,
                  rcode : 500,
                  message : 'User not found, please check username'
                });
            }
        });
    }

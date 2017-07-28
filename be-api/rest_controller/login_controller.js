
var jwt=require('jsonwebtoken');
var empService = require('../services/employee_service');

function createToken(user) {
    return jwt.sign({foo: user},process.env.SECRET_KEY,{expiresIn: 60});
}

module.exports.getAuthToken = function(req, res) {
        if (!req.body.email || !req.body.password) {
            return res.status(400).send("You must send the email and the password");
        }
        empService.getAuthTokenService(req.body,function(err, authToken) {
            if (err) {
                res.send(err);
            } else {
                res.send({
                  status:true,
                  authToken: createToken(req.headers.userName)
                });
            }
        });
    }

var jwt= require("jsonwebtoken");
module.exports = function(app, router) {
     var loginController = require('../rest_controller/login_controller')
     var employeeController = require('../rest_controller/employee_controller')

	// api routes
    router.post('/employee', employeeController.addEmployee),
    router.post('/login', loginController.getAuthToken),


    // validation middleware
    router.use(function(req,res,next){
        var token=req.body.token || req.headers['token'];
        if(token){
            jwt.verify(token,process.env.SECRET_KEY,function(err,ress){
                if(err){
                    res.status(500).send('Token Invalid');
                }else{
                    next();
                }
            })
        }else{
            res.send('Please send a token')
        }
    });


    router.get('/employee', employeeController.getEmployee)

	app.use('/api', router)
}

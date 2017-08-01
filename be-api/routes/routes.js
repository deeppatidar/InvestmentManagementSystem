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
                     res.send({
                      success:false,
                      rcode : 402,
                      message: "Token invalid"
                    });
                }else{
                    next();
                }
            });
        }else{
             res.send({
                  success:false,
                  rcode : 402,
                  message: "Please send a token"
                });
        }
    });


    router.get('/employees', employeeController.getEmployees)
    router.get('/employee/:email', employeeController.getEmployee)
    router.delete('/employee/:email', employeeController.removeEmployee)
    router.put('/employee', employeeController.updateEmployee)
    router.put('/employee/change_password', employeeController.changeEmployeePass)

	app.use('/api', router)
}

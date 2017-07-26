module.exports = function(app, router) {

     var empController = require('../rest_controller/employee_controller')

	// api routes
	router.get('/employee', empController.getEmployee)

	app.use('/api', router)
}

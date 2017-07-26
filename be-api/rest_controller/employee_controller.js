/**
 * Employee Controller.
 */
var empService = require('../services/employee_service')


module.exports.getEmployee = function(req, res) {

    empService.getEmployeeService(req.body,function(err, employeeData) {
        if (err) {
            res.send(err);
        } else {
            res.send(employeeData);
        }
    });

}

/**
 * Employee Controller.
 */
var empService = require('../services/employee_service')
var response = require('../services/api_response')
var appException = require('../app_util/exceptions')

module.exports.addEmployee = function(req, res) {
    empService.checkEmployeeEmailService(req.body,function(err, employeeData) {
        if (err) {
            res.send(err);
        }

        else if (employeeData.length != 0) {
            res.send({
                 success:false,
                 rcode : 402,
                 message: "User already exist"
            });
        }
        else {
            empService.addEmployeeService(req.body,function(err, employeeData) {
            if (err) {
                res.send(err);
            }  else {
                  response.successResponse(req, res, null, "Employee added successfully")
            }
          });
        }
    });
}

module.exports.getEmployees = function(req, res) {
    empService.getEmployeeService(req.body,function(err, employeeData) {
        if (err) {
            res.send(err);
        } else {
             response.successResponse(req, res, employeeData, null)
        }
    });

}

module.exports.getEmployee = function(req, res) {
    empService.getEmployeeByEmail(req.params,function(err, employeeData) {
        if (err) {
            res.send(err);
        } else {
            response.successResponse(req, res, employeeData, null)
        }
    });

}

module.exports.removeEmployee = function(req, res) {
    empService.removeEmployeeService(req.params,function(err, employeeData) {
        if (err) {
            res.send(err);
        } else {
            response.successResponse(req, res, null, "Employee removed successfully")
        }
    });

}

module.exports.updateEmployee = function(req, res) {
    empService.updateEmployeeService(req.body,function(err, employeeData) {
        if (err) {
            res.send(err);
        } else {
                empService.getEmployeeByEmail(req.body,function(err, employeeData) {
                if (err) {
                    res.send(err);
                } else {
                    response.successResponse(req, res, employeeData, "Employee updated successfully")
                }
            });
        }
    });

}

module.exports.changeEmployeePass = function(req, res) {
    empService.getEmployeePassService(req.body,function(err, employeePass) {
        if (err) {
            res.send(err);
        }

        else if (employeePass != req.body.password){
            res.send({
                  success:false,
                  rcode : 500,
                  message: "Current password is invalid"
                });
        }
        else if (req.body.new_password != req.body.c_new_password){
            res.send({
                  success:false,
                  rcode : 500,
                  message: "Password did not match"
                });
        }
        else{
            empService.changeEmployeePassService(req.body,function(err, employeeData) {
                if (err) {
                    res.send(err);
                }
                else {
                    response.successResponse(req, res, null, "Password changed successfully")
                }
            });

        }

    });

}

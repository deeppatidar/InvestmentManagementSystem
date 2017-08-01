
module.exports.getAuthToken = function(email) {
        return "select * from employee where email ="+ "'"+ email + "'";
    };

module.exports.getEmployees = function() {
        return "select * from employee";
    };

module.exports.addEmployee = function() {
        return "insert into employee set ?";
    };

module.exports.getEmployee = function(email) {
        return "select * from employee where email = " + "'"+ email + "'";
    };

module.exports.removeEmployee = function(email) {
        return "delete from employee where email = " + "'"+ email + "'";
    };

module.exports.updateEmployee = function(email) {
        return "update employee set dec_invest = ?, quater1=?,  quater2=?,  quater3=?,  quater4=? WHERE email = " + "'"+ email + "'";
    };

module.exports.getEmployeePass = function(email) {
        return "select pass from employee where email = " + "'"+ email + "'";
    };

module.exports.changeEmployeePass = function(new_pass, declareData, q1, q2, q3, q4) {
        return "update employee set pass=? from employee where email = ?";
    };


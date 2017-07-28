
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
        return "select * from employee where email = " + email;
    };

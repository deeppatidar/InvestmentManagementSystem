
module.exports.getAuthToken = function(email) {
        return "select * from employee where email = " + email;
    };

module.exports.getEmployees = function() {
        return "select * from employee";
    };

module.exports.addEmployee = function(empData) {
        return "insert into employee (email, username, pass) values(empData.email, empData.username, empData.password)";
    };

module.exports.getEmployee = function(email) {
        return "select * from employee where email = " + email;
    };

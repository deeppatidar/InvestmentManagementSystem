var con = require('../../db/connection/connection');

module.exports = {
		getEmployeeService: function(reqData, callback) {
            //var req_query = "INSERT INTO employee (email, username, pass) VALUES ('sshubham@gmail.com', 'sTom B. Erichsen', 'sSkagen 21');"
            var req_query = "select * from employeee;"
            con.query(req_query,function(err, result) {
            if(err) {
                return callback(err)
            }
                return callback(null, result)
            });
        }

    }

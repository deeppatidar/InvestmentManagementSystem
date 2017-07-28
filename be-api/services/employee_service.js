var con = require('../../db/connection/connection');
var sql_queries = require('../../db/database_queries/sql_queries');

module.exports = {

        addEmployeeService: function(reqData, callback) {
            con.query(sql_queries.addEmployee(reqData.body), function(err, result) {
            if(err) {
                return callback(err)
            }
                return callback(result)
            });
        },

        getAuthTokenService: function(reqData, callback) {
            con.query(sql_queries.getAuthToken(reqData.body.username), function(err, authToken) {
            if(err) {
                return callback(err)
            }
                return callback(null, authToken)
            });
        },

        getEmployeeService: function(reqData, callback) {
            con.query(sql_queries.getEmployees(), function(err, result) {
            if(err) {
                return callback(err)
            }
                return callback(null, result)
            });
        },
    }

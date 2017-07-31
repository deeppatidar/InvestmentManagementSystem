var con = require('../../db/connection/connection');
var sql_queries = require('../../db/database_queries/sql_queries');

module.exports = {

        addEmployeeService: function(reqData, callback) {
            var post  = {email: reqData.email, username: reqData.username, pass: reqData.password};
            con.query("insert into employee set ?", post, function(err, result) {
            if(err) {
                return callback(err)
            }
                return callback(result)
            });
        },

        getAuthTokenService: function(reqData, callback) {
            con.query(sql_queries.getAuthToken(reqData.email), function(err, result) {
            if(err) {
                return callback(err)
            }
                return callback(null, result[0])
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

        removeEmployeeService: function(reqData, callback) {
            con.query(sql_queries.removeEmployee(reqData.email), function(err, result) {
            if(err) {
                return callback(err)
            }
                return callback(null, result)
            });
        },
    }

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

        updateEmployeeService: function(reqData, callback) {
            //"'"+reqData.declareData+"'", "'"+reqData.q1+"'", "'"+reqData.q2+"'", "'"+reqData.q3+"'", "'"+reqData.q4+"'", "'"+reqData.email+"'"
            con.query("update employee set dec_invest = ?, quater1=?,  quater2=?,  quater3=?,  quater4=? WHERE email = ?", [JSON.stringify(reqData.declareData), JSON.stringify(reqData.q1), JSON.stringify(reqData.q2), JSON.stringify(reqData.q3), JSON.stringify(reqData.q4), reqData.email], function(err, result) {
            if(err) {
                return callback(err)
            }
                return callback(null, result)
            });
        },
    }

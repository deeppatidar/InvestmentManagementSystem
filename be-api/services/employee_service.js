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
            con.query("update employee set dec_invest = ?, quater1=?,  quater2=?,  quater3=?,  quater4=? WHERE email = ?", [objToString(reqData.declareData), objToString(reqData.q1), objToString(reqData.q2), objToString(reqData.q3), objToString(reqData.q4), reqData.email], function(err, result) {
            if(err) {
                return callback(err)
            }
                return callback(null, result)
            });
        },

        getEmployeePassService: function(reqData, callback) {
            con.query(sql_queries.getEmployeePass(reqData.email), function(err, result) {
            if(err) {
                return callback(err)
            }
                return callback(null, result[0].pass)
            });
        },

        changeEmployeePassService: function(reqData, callback) {
            con.query("update employee set pass=? where email = ?", [reqData.new_password, reqData.email], function(err, result) {
            if(err) {
                return callback(err)
            }
                return callback(null, result)
            });
        },

        checkEmployeeEmailService: function(reqData, callback) {
            con.query(sql_queries.getEmployee(reqData.email), function(err, result) {
            if(err) {
                return callback(err)
            }
                return callback(null, result)
            });
        },

        getEmployeeByEmail: function(reqData, callback) {
            con.query(sql_queries.getEmployee(reqData.email), function(err, result) {
            if(err) {
                return callback(err)
            }
                return callback(null, result)
            });
        },
    }

    function objToString (obj) {
        var str = '';
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                str += p + ':' + obj[p] + ',';
            }
        }
        return '{'+str +'}';
    }

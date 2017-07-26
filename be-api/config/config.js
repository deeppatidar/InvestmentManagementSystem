/**
 * Global Configuration.
 */
var config = {}

var processEnv = process.env.NODE_ENV || 'development'
var env = require('./' + processEnv + '.json')

config.host = env.HOST
config.user = env.USER
config.password = env.PASSWORD
config.database = env.DATABASE
config.port = env.PORT


//Export configuration object
module.exports = config

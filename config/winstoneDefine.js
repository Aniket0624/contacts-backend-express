const winston = require('winston');
const logConfiguration = {
    'transport': [
        new winston.transports.File({
            filename: 'path'
        })
    ]
}

module.exports = {
    winston,
    logConfiguration
}
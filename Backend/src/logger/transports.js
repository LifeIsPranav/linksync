const winston = require("winston");

const logFormat = require("./format");
const { LOG_FILE_PATH } = require("../config");


const logTo = []

const logConsole = new winston.transports.Console({
  level: 'debug',
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YY-MM-DD HH:mm:ss.SSS' }),
    logFormat({ colorize: true })
  )
})

const logFile = new winston.transports.File({
  level: 'debug',
  filename: LOG_FILE_PATH,
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YY-MM-DD HH:mm:ss.SSS' }),
    logFormat({ colorize: false })
  )
})

logTo.push(logConsole)
logTo.push(logFile)


module.exports = logTo
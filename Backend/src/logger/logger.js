const winston = require("winston");
const logTo = require("./transports");


const logger = winston.createLogger({
  level: "debug",
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YY-MM-DD HH:mm:ss.SSS' })
  ),
  transports: logTo,
  handleExceptions: true
});


module.exports = logger
const logger = require("./logger");



/**
 * Utility function to create consistent log messages
 * @param {string} level - Log level (info, warn, error, debug)
 * @param {string} message - The log message
 * @param {string} operation - The operation being performed
 * @param {string} context - Context (service/repository)
 * @param {object} [additionalData] - Additional metadata
 */


function logWithMeta(level, message, { operation, context, meta = {}, error = null } = {}) {
  const logObj = {
    operation,
    context,
    meta
  };

  if (error instanceof Error) {
    logObj.stack = error.stack;
    logObj.message = `${message} :: ${error.message}`;
  } else {
    logObj.message = message;
  }

  logger.log(level, logObj);
}


function logInfo(message, operation, context, additionalData) {
  logWithMeta('info', message, { operation, context, additionalData });
}
function logWarn(message, operation, context, additionalData) {
  logWithMeta('warn', message, { operation, context, additionalData });
}
function logError(error, message, operation, context, additionalData) {
  logWithMeta('error', message, { operation, context, additionalData, error });
}
function logDebug(message, operation, context, additionalData) {
  logWithMeta('debug', message, { operation, context, additionalData });
}


module.exports = {
  logWarn, 
  logInfo,
  logError,
  logDebug,
  logWithMeta
}
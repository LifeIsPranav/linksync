const winston = require("winston");


// Aligned, capitalized, colored (console) or not (file)
const logFormat = ({ colorize = false } = {}) => {
  return winston.format.printf((info) => {
    const level = info.level.toUpperCase().padEnd(5, ' ');
    const levelDisplay = colorize
      ? winston.format.colorize().colorize(info.level, level)
      : level;

    const context = info.context ? `[${info.context}]` : '';
    const operation = info.operation ? `[${info.operation}]` : '';

    // Show stack if present (for errors)
    const stack = info.stack ? `\n${info.stack}` : '';

    // Show additional metadata if present
    let meta = '';
    if (info.meta && Object.keys(info.meta).length > 0) {
      meta = ` :: ${JSON.stringify(info.meta)}`;
    }

    return `${info.timestamp} [${levelDisplay}] ${context} ${operation} :: ${info.message}${meta}${stack}`;
  });
}


module.exports = logFormat
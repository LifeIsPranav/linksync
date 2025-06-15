require('dotenv').config()

module.exports = {
  PORT: process.env.PORT,
  LOG_FILE_PATH: process.env.LOG_FILE_PATH,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  MONGO_URI: process.env.MONGO_URI
}
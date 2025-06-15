const { serverConfig } = require("../config");
const { JWT_SECRET_KEY } = require("../config/serverConfig");
const Unauthorized = require("../errors/clientSide/unauthorized.error");
const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {

  const username = req.cookies.token || req.header('Authorization')?.replace('Bearer ', '');

  if(!token) {
    throw new Unauthorized()
  }

  const decoded = jwt.verify(token, serverConfig.JWT_SECRET_KEY)
  req.userId = decoded
  
  next()
}


module.exports = authMiddleware
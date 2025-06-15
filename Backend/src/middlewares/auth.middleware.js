const { serverConfig } = require("../config");
const { JWT_SECRET_KEY } = require("../config/serverConfig");
const Unauthorized = require("../errors/clientSide/unauthorized.error");
const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {

  const token = req.cookies.token

  if(!token) {
    throw new Unauthorized()
  }

  const decoded = jwt.verify(token, serverConfig.JWT_SECRET_KEY)
  req.userId = decoded.userId
  
  next()
}


module.exports = authMiddleware
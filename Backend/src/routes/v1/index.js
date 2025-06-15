const express = require('express')
const userRouter = require('./user.router')
const linkRouter = require('./links.router')


const v1Router = express.Router()

v1Router.use('/users', userRouter)
v1Router.use('/links', linkRouter)


module.exports = v1Router
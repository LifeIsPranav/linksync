const express = require('express')
const { signup } = require('../../controllers/user.controller')


const linkRouter = express.Router()


linkRouter.get('/signup', signup);


module.exports = linkRouter
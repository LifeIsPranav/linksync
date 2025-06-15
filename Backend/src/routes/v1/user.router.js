const express = require('express')
const { userController } = require('../../controllers')


const userRouter = express.Router()


userRouter.post('/signup', userController.signup)
userRouter.post('/login', userController.login)
userRouter.get('/:username', userController.getUserDet)
userRouter.post('/logout', userController.logout)


module.exports = userRouter
const express = require('express')

const { userController } = require('../../controllers')
const { authMiddleware } = require('../../middlewares')


const userRouter = express.Router()

userRouter.post('/signup', userController.signup)
userRouter.post('/login', userController.login)
userRouter.post('/logout', userController.logout)
userRouter.put('/updatePassword', authMiddleware, userController.updatePassword)
userRouter.put('/update', authMiddleware, userController.updateUser)
userRouter.post('/deleteUser', authMiddleware, userController.deleteUser)
userRouter.get('/:username', userController.getUserDet)

module.exports = userRouter
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const BadRequest = require("../errors/clientSide/badRequest.error")
const { UserRepository } = require("../repositories")
const UserService = require("../services/user.service")
const userValidators = require("../validators/userValidators")
const { JWT_SECRET_KEY } = require('../config/serverConfig')
const { cookieConfig } = require('../config')
const responseHandler = require('../utils/responseHandler')
const { StatusCodes } = require('http-status-codes')


const userService = new UserService(new UserRepository())

const signup  = async (req, res) => {
  try {
    const { success, data, error } = userValidators.createUserValidator.safeParse(req.body)
    if(!success){
      throw new BadRequest('Insufficient Properties Received', error)
    }

    data.password = await bcrypt.hash(data.password, 10)
    const user = await userService.createUser(data)

    const token = jwt.sign(
      { userId: user._id }, 
      JWT_SECRET_KEY,
      { expiresIn: '1h' }
    )

    res.cookie('token', token, cookieConfig)
    responseHandler(req, res, StatusCodes.CREATED, 'User Created Successfully', user)

  } catch (error) {
    throw error
  }
}


const login  = async (req, res) => {
  try {
    const user = await userService.create({userData})
    return user

  } catch (error) {
    throw error
  }
}

const logout  = async (req, res) => {
  try {
    const user = await userService.create({userData})
    return user

  } catch (error) {
    throw error
  }
}


const getUserDet  = async (req, res) => {
  try {
    const user = await userService.findOne({username})
    return user

  } catch (error) {
    throw error
  }
}

const updateUser  = async (req, res) => {
  try {
    const updatedUser = await userService.findOneAndUpdate(
      {username},
      {$set: updateData},
      {new: true, runValidators: true}
    )
    return updatedUser

  } catch (error) {
    throw error
  }
}

const updatePassword  = async (req, res) => {
  try {
    const updatedUser = await userService.findOneAndUpdate(
      {username},
      {password},
      {new: true, runValidators: true}
    )
    return updatedUser

  } catch (error) {
    throw error
  }
}

const deleteUser  = async (req, res) => {
  try {
    const deletedUser = await userService.findOneAndDelete({username})
    return deletedUser

  } catch (error) {
    throw error
  }
}


module.exports = {
  signup,
  login,
  logout,
  getUserDet,
  updateUser,
  updatePassword,
  deleteUser
}
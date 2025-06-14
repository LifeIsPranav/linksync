const { User } = require("../models");

class UserRepository {

  async createUser (userData) {
    try {
      const user = await User.create({userData})
      return user

    } catch (error) {
      throw error
    }
  }

  async getUserByEmail (email) {
    try {
      const user = await User.findOne({email})
      return user

    } catch (error) {
      throw error
    }
  }

  async getUserByUsername (username) {
    try {
      const user = await User.findOne({username})
      return user

    } catch (error) {
      throw error
    }
  }

  async updateDetails (username, updateData) {
    try {
      const updatedUser = await User.findOneAndUpdate(
        {username},
        {$set: updateData},
        {new: true, runValidators: true}
      )
      return updatedUser

    } catch (error) {
      throw error
    }
  }

  async updatePassword (username, password) {
    try {
      const updatedUser = await User.findOneAndUpdate(
        {username},
        {password},
        {new: true, runValidators: true}
      )
      return updatedUser

    } catch (error) {
      throw error
    }
  }

  async deleteUser (username) {
    try {
      const deletedUser = await User.findOneAndDelete({username})
      return deletedUser

    } catch (error) {
      throw error
    }
  }

}

return UserRepository
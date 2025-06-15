const BadRequest = require("../errors/clientSide/badRequest.error")
const NotFound = require("../errors/clientSide/notFound.error")
const InternalServerError = require("../errors/serverSide/internalServer.error")
const bcrypt = require('bcrypt')

class UserService {
  constructor(UserRepository) {
    this.UserRepository = UserRepository
  }

  async createUser (userData) {
    try {
      const user = await this.UserRepository.createUser(userData)
      
      if(!user) {
        throw new InternalServerError('User Not Created')
      }

      return user

    } catch (error) {
      throw error
    }
  }

  async loginUser (details) {
    try {
      const { username, email, password } = details
      let user
      if(email) user = await this.UserRepository.getUserWithPassEmail(email)
      else user = await this.UserRepository.getUserWithPassUsername(username)
  
      if(!user) {
        throw new NotFound()
      }

      const isMatch = await bcrypt.compare(password, user.password)
      if(!isMatch) {
        throw new BadRequest('Invalid Credentials Provided')
      }

      user.password = undefined;
      return user;

    } catch (error) {
      throw error
    }
  }

  async getUser (data) {
    try {
      const { username, email } = data

      let user
      if(email) user = await this.UserRepository.getUserByEmail(email)
      else user = await this.UserRepository.getUserByUsername(username)

      if(!user) {
        throw new NotFound()
      }

      return user

    } catch (error) {
      throw error
    }
  }

  async updateDetails (username, updateData) {
    try {
      const updatedUser = await this.UserRepository.updateDetails(username, updateData)

      if(!user) {
        throw new NotFound()
      }

      return updatedUser

    } catch (error) {
      throw error
    }
  }

  async updatePassword (username, password) {
    try {
      const updatedUser = await this.UserRepository.updatePassword(username, password)

      if(!user) {
        throw new NotFound()
      }

      return updatedUser

    } catch (error) {
      throw error
    }
  }

  async deleteUser (username) {
    try {
      const deletedUser = await this.UserRepository.deleteUser(username)

      if(!user) {
        throw new NotFound()
      }

      return deletedUser

    } catch (error) {
      throw error
    }
  }
  
}


module.exports = UserService
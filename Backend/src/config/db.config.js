const { default: mongoose } = require('mongoose')
const { MONGO_URI } = require('./serverConfig')

const connectDB = async() => {
  try {
    await mongoose.connect(MONGO_URI)
    console.log("Mongo DB Connected 🔥")

  } catch (error) {
    console.log(error)
  }
}

module.exports = connectDB
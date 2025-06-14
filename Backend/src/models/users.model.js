const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name Required to create a User"]
  },

  username: {
    type: String,
    required: [true, "Username is required to create a User"],
    lowercase: true,
    trim: true,
    unique: true,
    minlength: [4, "Username must be at least 4 characters long"],
    match: [
      /^[a-zA-Z0-9-]+$/,
      "Username can only contain letters, numbers, and hyphens"
    ]
  },

  email: {
    type: String,
    required: [true, "Email is required to create a User"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [ /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please provide a valid email address"],
    select: false
  },
  
  password: {
    type: String,
    required: [true, "Password is required to create a User"]
  },

  plan: {
    type: String,
    enum: ['paid', 'free'],
    default: 'free'
  },

  title: {
    type: String
  },

  bio: {
    type: String
  },

  avatar: {
    type: String
  },

  displayName: { 
    type: String 
  },

  location: { 
    type: String 
  },

  website: { 
    type: String 
  },

  customDomain: { 
    type: String,
    unique: true
  },

  profileViews: { 
    type: Number,
    default: 0 
  },

  status: { 
    type: String, 
    enum: ['active', 'inactive'], 
    default: 'active' 
  },

  image: [{
    type: String
  }],

  links: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Link'
  }]
})


const userModel = mongoose.model("User", UserSchema)
module.exports = userModel
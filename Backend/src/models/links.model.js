const mongoose = require('mongoose');

const LinkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Link name is required"],
    trim: true,
    maxlength: [50, "Link name cannot exceed 50 characters"]
  },

  url: {
    type: String,
    required: [true, "URL is required"],
    trim: true,
    match: [
      /^(?:(?:https?|ftp|mailto):\/\/)?(?:localhost|\d{1,3}(?:\.\d{1,3}){3}|[\w-]+(?:\.[\w-]+)+)(?::\d{2,5})?(?:[/?#][^\s]*)?$/i,
      "Please provide a valid URL"
    ]
  },

  icon: {
    type: String,
    trim: true
  },

  description: {
    type: String,
    trim: true,
    maxlength: [200, "Description cannot exceed 200 characters"]
  },

  clicks: {
    type: Number,
    default: 0
  },

  qrCode: {
    type: String,
  },

  order: {
    type: Number,
    default: 0
  },

  status: { 
    type: String, 
    enum: ['active', 'inactive', 'hidden'], default: 'active' 
  },

  pinned: { 
    type: Boolean, 
    default: false 
  }

});

const linkModel = mongoose.model('Link', LinkSchema);
module.exports = linkModel
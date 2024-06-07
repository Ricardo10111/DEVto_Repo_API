const { hash } = require('bcryptjs')
const mongoose = require('mongoose')

const modelName = 'posts'

const postSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  hashtags: {
    type: [String],
    default: []
  },
  hashtags2: {
    type: [String],
    default: []
  },
  hashtags3: {
    type: [String],
    default: []
  },
  name: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  reaccions: {
    type: [String],
    default: []
  },
  reaccions2: {
    type: [String],
    default: []
  },
  reaccions3: {
    type: [String],
    default: []
  },
  reaccions4: {
    type: [String],
    default: []
  },
  profilePicture: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model(modelName, postSchema)

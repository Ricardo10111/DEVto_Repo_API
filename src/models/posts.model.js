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
    type: String,
    default: '#Hola'
  },
  hashtags2: {
    type: String,
    default: '#Hola'
  },
  hashtags3: {
    type: String,
    default: '#Hola'
  },
  name: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  reactions: {
    type: String,
    default: '🔥'
  },
  reactions2: {
    type: String,
    default: '😤'
  },
  reactions3: {
    type: String,
    default: '🤯'
  },
  reactions4: {
    type: String,
    default: '🚀'
  },
  numberOfReactions: {
    type: Number,
    default: 1
  },
  numberOfComments: {
    type: Number,
    default: 1
  },
 
  image: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model(modelName, postSchema)

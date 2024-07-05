const mongoose = require('mongoose');

const modelName = 'users'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
    username: {
        type: String,
        required: true
      },
      profilePicture: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      created_at: {
        type: Date,
        default: Date.now
      },
      updated_at: {
        type: Date,
        default: Date.now
      }
})


module.exports = mongoose.model(modelName, userSchema)
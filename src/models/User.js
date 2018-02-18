const mongoose = require('mongoose')
const timestamp = require('mongoose-timestamp')

const { Schema } = mongoose
const User = mongoose.model('User', new Schema({
  username: {
    type: String,
    index: {
      unique: true
    }
  },
  password: {
    type: String,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  }
}).plugin(timestamp))

module.exports = User

const mongoose = require('mongoose')
const timestamp = require('mongoose-timestamp')

const { Schema } = mongoose
const User = mongoose.model('User', new Schema({
  username: {
    type: string,
    index: {
      unique: true
    }
  },
  password: {
    type: string,
  },
  firstname: {
    type: string,
  },
  lastname: {
    type: string,
  }
}).plugin(timestamp))

module.exports = User

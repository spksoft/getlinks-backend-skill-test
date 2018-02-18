const mongoose = require('mongoose')
const timestamp = require('mongoose-timestamp')

const { Schema } = mongoose
const Token = mongoose.model('Token', new Schema({
  token: {
    type: String,
    index: {
      unique: true
    }
  },
  expireDate: {
    type: Date,
  },
  type: {
    type: String,
    enum: ['ACCESS_TOKEN', 'REFRESH_TOKEN']
  }
}).plugin(timestamp))

module.exports = Token

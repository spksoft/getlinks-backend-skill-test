const mongoose = require('mongoose')
const timestamp = require('mongoose-timestamp')

const { Schema } = mongoose
const Token = mongoose.model('Token', new Schema({
  token: {
    type: String,
  },
  isUseable: {
    type: Boolean
  },
  type: {
    type: String,
    enum: ['ACCESS_TOKEN', 'REFRESH_TOKEN']
  }
}).plugin(timestamp))

module.exports = Token

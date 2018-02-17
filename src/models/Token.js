const mongoose = require('mongoose')
const timestamp = require('mongoose-timestamp')

const { Schema } = mongoose
const Token = mongoose.model('Token', new Schema({
  token: {
    type: string,
    index: {
      unique: true
    }
  },
  expireDate: {
    type: Date,
  },
  type: {
    type: string,
    enum: ['ACCESS_TOKEN', 'REFRESH_TOKEN']
  }
}).plugin(timestamp))

module.exports = Token

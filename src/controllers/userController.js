const errors = require('restify-errors')
const hash = require('../helpers/hash')
const User = require('../models/User')
const CONFIG = require('../config')

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body
    const secret = CONFIG.KEYPHASE
    const resultOfQuery = await User.findOne({ username, password: hash.passwordHash({ secret, value: password }) });
    if (resultOfQuery !== null) {
      res.send({
        body: { ...resultOfQuery._doc, password: 'hidden' }
      })
    } else {
      res.send(new errors.InternalServerError(`Not found user or password not match for user ${username}`));
    }
    
    next()
  } catch (e) {
    res.send(new errors.InternalServerError(e.message));
    next();
  }
}

const register = async (req, res, next) => {
  try {
    const { firstname, lastname, username, password } = req.body
    const secret = CONFIG.KEYPHASE
    const hashedPassword = hash.passwordHash({
      value: password,
      secret,
    })
    const user = new User({
      username,
      password: hashedPassword,
      firstname,
      lastname,
    })
    const resultOfSaving = await user.save()
    res.send({
      body: { ...resultOfSaving._doc, password: 'hidden' }
    })
    next()
  } catch (e) {
    res.send(new errors.InternalServerError(e.message));
     next();
  }
}

module.exports = {
  login,
  register,
}
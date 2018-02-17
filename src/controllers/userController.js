const errors = require('restify-errors');

const login = async (req, res, next) => {
  try {
    res.send({
      "Hello": "world",
    })
    next()
  } catch (e) {

  }
}

const register = async (req, res, next) => {
  try {
    res.send({
      "Hello": "world",
    })
    next()
  } catch (e) {

  }
}

module.exports = {
  login,
}
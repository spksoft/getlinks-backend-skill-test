const jwt = require('jsonwebtoken');

const sign = ({ data, secret, exp }) => {
  return jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (exp * 60),
    data: data,
  }, secret);
}

module.exports = {
  sign,
}
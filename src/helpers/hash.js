var cryptoJS = require("crypto-js");

const passwordHash = ({ secret, value }) => {
  return cryptoJS.HmacSHA256(value, secret).toString()
}

module.exports = {
  passwordHash,
}
const login = (req, res, next) => {
  res.send({
    "Hello": "world",
  })
  next()
}

module.exports = {
  login,
}
const CONFIG = require("./config")
const userController = require("./controllers/userController")

module.exports = (server) => {
  server.post(`${CONFIG.URL_PREFIX}/login`, userController.login)
  server.post(`${CONFIG.URL_PREFIX}/register`, userController.register)
};
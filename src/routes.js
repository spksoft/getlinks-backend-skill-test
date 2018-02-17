const CONFIG = require("./config")
const userController = require("./controllers/userController")

module.exports = (server) => {
	server.post(`${CONFIG.URL_PREFIX}/login`, userController.login)
};
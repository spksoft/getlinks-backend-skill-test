const restify = require('restify')
const mongoose = require('mongoose')
const CONFIG = require("./config")
const restifyPlugins = restify.plugins

const server = restify.createServer({
	name: CONFIG.APP_NAME,
});

server.use(restifyPlugins.jsonBodyParser({ mapParams: true }))
server.use(restifyPlugins.acceptParser(server.acceptable))
server.use(restifyPlugins.queryParser({ mapParams: true }))
server.use(restifyPlugins.fullResponse())

server.listen(CONFIG.PORT, () => {
	// establish connection to mongodb
  mongoose.Promise = global.Promise
	mongoose.connect(CONFIG.MONGO_URI)

	const db = mongoose.connection
	db.on('error', err => {
		console.error(err)
		process.exit(1)
	});

	db.once('open', () => {
    require('./routes')(server)
		console.log(`Server is listening on port ${CONFIG.PORT}`)
	});
});
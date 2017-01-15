const restify = require('restify');
const WebSocket = require('ws');
const server = restify.createServer();
const Primus = require('primus');
const port = process.env.PORT || 8080;
const routes = require('./routes');

server.listen(port, () => console.log(`${server.name} listening at ${server.url}`));
routes(server);

const primus = new Primus(server);

primus.on('connection', function (spark) {
  	console.log("New connection");
  	spark.on('data', function message(data) {
  		console.log("Got message:", JSON.parse(data));
	});
});

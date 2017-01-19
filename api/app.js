const restify = require('restify');
const WebSocket = require('ws');
const server = restify.createServer();
const Primus = require('primus');
const port = process.env.PORT || 8080;
const routes = require('./routes');

routes(server);

const primus = new Primus(server);

primus.on('connection', function (spark) {
  	console.log("New connection");
  	spark.on('data', function message(data) {
  		console.log(data);
      	console.log("Got message:", JSON.parse(data));

      	//Send back a test message
      	//"sadface.co.uk" 28017 henry
      	// Fake server id currently
      	spark.write(JSON.stringify({ action: "rcon/connect", data: {id : 1234, host: "sadface.co.uk", port: 28017, password:"henry"}}));

      	// No connected event being sent back yet, just wait and try sending a command down the rcon connection
      	setInterval(function(){
		  spark.write(JSON.stringify({ action: "rcon/send", data: {id : 1234, command: "serverinfo"}}));
		}, 10000);
	});
});

server.listen(port, () => console.log(`${server.name} listening at ${server.url}`));

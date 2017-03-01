import restify from 'restify'
import Primus from 'primus'

const server = restify.createServer();
const port = process.env.PORT || 8080;
const routes = require('./routes');
const workers = require('./managers/worker-pool')();

const controllers = {
    "worker": require('./controllers/worker')(workers)
}

const client_controllers = {
    "rcon": require('./controllers/rcon')(workers)
}

const primus = new Primus(server);

primus.on('connection', function (spark) {
  	console.log("API: New worker connection");
  	spark.on('data', function message(rawData) {

      var data = JSON.parse(rawData);

      if(data.action) {
        var parts = data.action.split('/');
        controllers[parts[0]][parts[1]](data.data, spark);
      } else {
        console.log("API: Unrecognised data recieved");
        console.log(data);
      }
	});
});

server.listen(port, () => console.log(`${server.name} listening at ${server.url}`));


// Create a seperate primus socket for use for the front end

var frontendPrimus = Primus.createServer(function connection(spark) {
  //on connect
  console.log("API: New frontend connection");

  spark.on('data', function message(data) {
    console.log("API: Client data recieved");

    var obj = JSON.parse(data);
    var parts = obj.action.split('/');
    client_controllers[parts[0]][parts[1]](obj.data, spark);

  });
}, { port: 9090, transformer: 'websockets' });

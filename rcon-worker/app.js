const WebSocket = require('ws');
const { API_URL, WORKER_NAME } = process.env;
const chance = require('chance').Chance();
const Primus = require('primus');
const manager = require('./managers/rcon-pool')();

const controllers = {
    "test": require('./controllers/test')(manager),
    "rcon": require('./controllers/rcon')(manager)
}


const Socket = Primus.createSocket()
const client = new Socket('http://' + API_URL);


console.log("ADDRESS: " + API_URL)

const protocol = require('./protocol/master.js')(client);

console.log(manager);

client.on('open', function open() {
  console.log('Connection is alive');
  protocol.reportIn();
});

client.on('data', function message(data) {
      console.log(data);
      var obj = JSON.parse(data);
      var parts = obj.action.split('/');
      controllers[parts[0]][parts[1]](obj.data);
  });

client.on('error', function error(err) {
  console.error('Something horrible has happened', err.stack);
});

client.on('end', function () {
  console.log('Connection closed');
});

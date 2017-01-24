const WebSocket = require('ws');
const { API_URL, WORKER_NAME } = process.env;
const chance = require('chance').Chance();
const Primus = require('primus');
const rcon_pool = require('./managers/rcon-pool')();

const Socket = Primus.createSocket()
const client = new Socket('http://' + API_URL);
const worker_id = 123456;
const worker_name = "Worker1";

console.log("ADDRESS: " + API_URL)

const protocol = require('./protocol/master.js')(client);

const controllers = {
    "rcon": require('./controllers/rcon')(rcon_pool, protocol)
}


client.on('open', function open() {
  console.log('Worker: Connection is alive');
  protocol.reportIn(worker_name, worker_id);
});

client.on('data', function message(data) {
      console.log("Worker: web socket data recieved");
      var obj = JSON.parse(data);
      var parts = obj.action.split('/');
      controllers[parts[0]][parts[1]](obj.data);
  });

client.on('error', function error(err) {
  console.error('Something horrible has happened', err.stack);
});

client.on('end', function () {
  console.log('Worker: Connection closed');
});

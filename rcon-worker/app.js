const WebSocket = require('ws');
const { API_URL, WORKER_NAME } = process.env;
const chance = require('chance').Chance();
const webrcon = require('./protocol/rust-webrcon.js');
const Primus = require('primus');



const Socket = Primus.createSocket()
const client = new Socket('http://' + API_URL);


console.log("ADDRESS: " + API_URL)

const protocol = require('./protocol/master.js')(client);

client.on('open', function open() {
  console.log('Connection is alive');
  protocol.reportIn();
});

client.on('error', function error(err) {
  console.error('Something horrible has happened', err.stack);
});

client.on('end', function () {
  console.log('Connection closed');
});


/*
rcon = new webrcon("sadface.co.uk", 28017)
rcon.on('connect', function() {
    console.log("connected")
    rcon.run("serverinfo")
})
rcon.on('disconnect', function() {
    console.log('disconnected')
})
rcon.on('message', function(message) {
    console.log(message.message)
})
rcon.on('error', function(err) {
    console.error('error:', err)
    rcon = null
})
rcon.connect("henry")*/

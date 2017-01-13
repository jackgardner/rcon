const WebSocket = require('ws');
const { API_URL, WORKER_NAME } = process.env;
const chance = require('chance').Chance();

const connectToApi = () => {
  try {
    console.log(`rcon-worker opening connection to ${API_URL}`);
    const ws = new WebSocket(`ws://${API_URL}/`);
    const protocol = require('./protocol')(ws);
    ws.on('open', () => {
      console.log('WebSocket connection successful!');
      const workerName = WORKER_NAME || `${chance.word()}-${chance.word()}`;
      protocol.reportIn(workerName);
    })

    ws.on('close', () => {
      console.log('WS connection lost - attempting reconnect!');
      setTimeout(connectToApi, 5000);
    })
    ws.on('message', (message) => protocol.incoming)
  } catch (e) {
    console.log(`Couldn't connect to API - trying again in 15 secs`)
    setTimeout(connectToApi, 15000);
  }
}

connectToApi();

const restify = require('restify');
const WebSocket = require('ws');
const server = restify.createServer();
const port = process.env.PORT || 8080;
const websocketPort = process.env.WEBSOCKET_PORT || 8888;
const websocketServer = new WebSocket.Server({ port: websocketPort });
const routes = require('./routes');

server.listen(port, () => console.log(`${server.name} listening at ${server.url}`));
routes(server);

websocketServer.on('connection', (ws) => {
  console.log(`WebSocket connection!`);
  ws.on('message', (packet) => {
    const message = JSON.parse(packet);
    console.log('Got message', message);
  });
});

const restify = require('restify');

const server = restify.createServer();
const port = process.env.PORT || 8080;

server.listen(port, () => console.log(`${server.name} listening at ${server.url}`));

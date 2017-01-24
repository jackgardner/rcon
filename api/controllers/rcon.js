
module.exports = (workers) => {

  return {
  	listen: (data, client) => {

  		var all_workers = workers.all();
  		for(var x in all_workers) {
  			var worker = all_workers[x];
  			var server = worker.servers[data.server_id];
  			if(server) {
  				server.listeners.push(client);
  			}
  		}

  		// find worker that is connected to that server id
  		// if none are found then trigger a connect and message the client telling them to ... retry?
  		// How do we send messages about failed rcon connections in the scenario?
  		// Have the client "listen" anyway to that worker and have the worker message down saying failed connect rather than retrying?

  	}
  }
}
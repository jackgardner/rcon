
module.exports = (workers) => {

  return {
  	register: (data, client) => {
  		workers.add(data.worker_id, { socket: client, servers: {} });
  		client.worker_id = data.worker_id;
        //Send back a test message
        //"sadface.co.uk" 28017 henry
        // Fake server id currently
        client.write(JSON.stringify({ action: "rcon/connect", data: {server_id : 1234, host: "sadface.co.uk", port: 28017, password:"henry"}}));

        setInterval(function() {
          client.write(JSON.stringify({ action: "rcon/send", data: {server_id : 1234, command: "serverinfo"}}));
        }, 5000)
        console.log("API: worker registered - " + data.worker_id)
  	},
  	serverconnected: (data, client) => {
  		var worker = workers.get(client.worker_id);
  		
  		worker.servers[data.server_id] = {server_id: data.server_id, listeners: []};
      console.log("API: worker connected to new rcon server")
  	},
  	message: (data, client) => {
      var worker = workers.get(client.worker_id);
      var server = worker.servers[data.server_id];

      for (var i = server.listeners.length - 1; i >= 0; i--) {
        var listener = server.listeners[i];
        listener.write(JSON.stringify(data));
      }
  		console.log("API: Worker message recieved, forwarded to " + server.listeners.length + " listeners");
  	}
  }
}
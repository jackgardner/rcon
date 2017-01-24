const webrcon = require('../protocol/rust-webrcon.js');

module.exports = (manager, master) => {

  return {
      connect: (data) => {
      	// It may be better to send over just the server id and have the worker look up the data?

	    console.log("Connecting to rcon");

	    //"sadface.co.uk" 28017 henry
	    rcon = new webrcon(data.host, data.port)
		rcon.on('connect', function() {
		    console.log("connected")
		    rcon.send("serverinfo")
		    manager.add(data.server_id, rcon);
			master.send({action: "worker/serverconnected", data: { server_id: data.server_id, type:'CONNECTED'}});
		})
		rcon.on('disconnect', function() {
		    console.log('disconnected')
		    master.send({action: "worker/message", data: { server_id: data.server_id, type:'DISCONNECTED'}});
		})
		rcon.on('message', function(message) {
		    console.log("Recieved rcon message");//message.message)
		    master.send({action: "worker/message", data: { server_id: data.server_id, type:'MESSAGE', message: message}});
		})
		rcon.on('error', function(err) {
		    console.error('error:', err)
		    rcon = null
		    master.send({action: "worker/message", data: { server_id: data.server_id, type:'ERROR', message: err}});
		})
		rcon.connect(data.password)

	  },
	  send: (data) => {
	  	var connection = manager.get(data.server_id);
	  	connection.send(data.command);
	  }
  }
}
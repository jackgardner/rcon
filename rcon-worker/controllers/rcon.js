const webrcon = require('../protocol/rust-webrcon.js');

module.exports = (manager) => {

  return {
      connect: (data) => {
      	// It may be better to send over just the server id and have the worker look up the data?

	    console.log("Connecting to rcon");
	    console.log(data);

	    //"sadface.co.uk" 28017 henry
	    rcon = new webrcon(data.host, data.port)
		rcon.on('connect', function() {
		    console.log("connected")
		    rcon.send("serverinfo")
		    manager.add(data.id, rcon);
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
		rcon.connect(data.password)

	  },
	  send: (data) => {
	  	var connection = manager.get(data.id);
	  	connection.send(data.command);
	  }
  }
}
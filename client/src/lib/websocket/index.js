import primusClient from '../../../config/primus';

export default {

	init: function(uid) {
		var client = primusClient.connect('http://localhost:9090');

		client.on('open', function() {
			client.write(JSON.stringify({action: 'rcon/listen', data: { server_id: 1234, uid: uid}}));
		});

		client.on('data',function message(data) {
	      console.log(data);
  		});

	}

}

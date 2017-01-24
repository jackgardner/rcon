const REPORTING_IN = 'REPORTING_IN';
module.exports = (primus) => {

  const send = (packet) => {
    primus.write(JSON.stringify(packet));
  }


  return {
    reportIn: (worker_name, worker_id) => {

      this.worker_name = worker_name;
      send({
        action: "worker/register",
        data: {
          type: REPORTING_IN,
          max_connections: 100,
          worker_type: 'rcon/generic',
          worker_name: worker_name,
          worker_id: worker_id
        }
      })
    },
    incoming: msg => console.log(msg),
    send
  }
}

const REPORTING_IN = 'REPORTING_IN';
module.exports = (primus) => {

  const send = (packet) => {
    primus.write(JSON.stringify(packet));
  }


  return {
    reportIn: (workerName) => {

      this.workerName = workerName;
      send({
        type: REPORTING_IN,
        max_connections: 100,
        worker_type: 'rcon/generic',
        worker_name: workerName
      })
    },
    incoming: msg => console.log(msg),
    send
  }
}

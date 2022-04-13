const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    console.log('Connection Established!');
  });

  conn.on('connect', () => {
    conn.write('Name: ELE');
  });

  conn.on('data', data => {
    console.log(`Message from server: ${data}`)
  }) 

  return conn;

};

module.exports = {connect};
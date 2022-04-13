const net = require("net");
const { IP, PORT } = require('./constants');
const arg = process.argv[2];

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    console.log('Connection Established!');
  });

  conn.on('connect', () => {
    conn.write(`Name: ${arg}`);
  });

  // conn.on('connect', () => {
  //   setInterval(() => conn.write('Move: up'), 1000);
  // });

  conn.on('data', data => {
    console.log(`Message from server: ${data}`)
  }) 

  return conn;

};

module.exports = {connect};
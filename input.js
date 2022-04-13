const readline = require('readline');
const { w, a, s, d } = require('./constants');
const keys = { w, a, s, d };
console.log(keys);

let connection;

const handleUserInput = function (key) {
  
  if (key === '\u0003') {
    process.exit();
  }
  if (Object.keys(keys).includes(key)) {
    console.log(keys[key])
    connection.write(`${keys[key]}`);
  }
  if (key === '\u0009') {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question('Smack Talk:', smack => connection.write(`Say: ${smack}`));
  }
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {setupInput};
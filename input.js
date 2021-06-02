const {keys} = require('./constants');

let conn;

//How can I use map or message keys with defined object?
const handleUserInput = (key) => {
  if (key === "\u0003") {
    process.exit();
  }
  conn.write(keys[key]);
};
// setup interface to handle user input from stdin
const setupInput = function (con) {
  conn = con;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (data) => {
    handleUserInput(data);
  });

  return stdin;
};

module.exports = {
  setupInput,
};

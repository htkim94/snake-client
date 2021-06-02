const {IP, PORT} = require("./constants");
const net = require("net");

//connection with game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connected!");
    conn.write("Name: HTK");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 3000);
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {
  connect,
};

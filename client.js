const net = require("net");

//connection with game server
const connect = () => {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50542,
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

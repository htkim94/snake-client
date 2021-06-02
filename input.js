let conn;

const handleUserInput = (key) => {
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "a") {
    conn.write("Move: left");
  }
  if (key === "w") {
    conn.write("Move: up");
  }
  if (key === "d") {
    conn.write("Move: right");
  }
  if (key === "s") {
    conn.write("Move: down");
  }
  if (key === "m") {
    conn.write("Say: I got you!");
  }
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

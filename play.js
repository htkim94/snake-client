const { connect } = require("./client");
const { setupInput } = require("./input");

//Connect
console.log("Connecting ...");
setupInput(connect());

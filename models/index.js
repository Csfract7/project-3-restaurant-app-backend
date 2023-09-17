const mongoose = require("mongoose");
const Restaurant = require("./Restaurant");
const {DATABASE_URL} = process.env

// DATABASE CONNECTION
// Establish Connection
mongoose.connect(DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});


// Connection Events
mongoose.connection
  .on("open", () => console.log("You are connected to mongoose"))
  .on("close", () => console.log("You are disconnected from mongoose"))
  .on("error", (error) => console.log(error));


//all code above this
module.exports = {
  Menu: require('./Menu'),
  Restaurant: require('./Restaurant')
}
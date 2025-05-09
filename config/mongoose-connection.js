const mongooose = require("mongoose");
mongooose
  .connect("mongodb://127.0.0.1:27017/scatch")
  .then(() => console.log("Mongo Connected SuccessFully"))
  .catch((err) => console.log("Mongo Connection Failed->", err));

module.exports = mongooose.connection;

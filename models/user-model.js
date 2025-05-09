const mongooose = require("mongoose");
// mongooose.connect("mongodb://127.0.0.1:27017/scatch");
const userSchema = mongooose.Schema({
  fullname: {
    type: String,
    minLength: 3,
    trim: true,
  },
  email: String,
  password: String,
  products: {
    type: Array,
    default: [],
  },
  picture: String,
});

module.exports = mongooose.model("user", userSchema);

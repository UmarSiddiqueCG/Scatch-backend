const mongooose = require("mongoose");
// mongooose.connect("mongodb://127.0.0.1:27017/scatch");
const ownerSchema = mongooose.Schema({
  fullname: {
    type: String,
    minLength: 3,
    trim: true,
  },
  email: String,
  password: String,
  cart: {
    type: Array,
    default: [],
  },
  isAdmin: Boolean,
  orders: {
    type: Array,
    default: [],
  },
  contact: Number,
  picture: String,
});

module.exports = mongooose.model("owner", ownerSchema);

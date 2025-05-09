const mongooose = require("mongoose");
// mongooose.connect("mongodb://127.0.0.1:27017/scatch");
const productSchema = mongooose.Schema({
  name: String,
  image: String,
  price: String,
  discount: {
    type: Number,
    default: 0,
  },
  bgColor: String,
  panelColor: String,
  textColor: String,
});

module.exports = mongooose.model("product", productSchema);

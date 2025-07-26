const mongoose = require("mongoose");

// schema for adding product into inventory
const productSchema = new mongoose.Schema({
  name: String,
  type: String,
  sku: String,
  image_url: String,
  description: String,
  quantity: Number,
  price: Number,
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);

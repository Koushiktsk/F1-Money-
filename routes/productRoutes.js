const express = require("express");
const auth = require("../middleware/auth");
const {
  addProduct,
  updateQuantity,
  getProducts,
  getAnalytics,
} = require("../controllers/productController");

const router = express.Router();

// routes for products and analytics
router.post("/products", auth, addProduct);
router.put("/products/:id/quantity", auth, updateQuantity);
router.get("/products", auth, getProducts);
router.get("/analytics", auth, getAnalytics);

module.exports = router;


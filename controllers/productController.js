const Product = require("../models/Product");

// function for adding products to inventory
exports.addProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({ id: product._id, message: "Product added" });
};

// function to update products to inventory
exports.updateQuantity = async (req, res) => {
  const { quantity } = req.body;
  const updated = await Product.findByIdAndUpdate(
    req.params.id,
    { quantity },
    { new: true }
  );
  res.json(updated);
};

// function to retrive products from inventory
exports.getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// function to get analytics like total products, total inventory products, recently added products, low stock products etc.
exports.getAnalytics = async (req, res) => {
  const totalProducts = await Product.countDocuments();

  const totalStock = await Product.aggregate([
    { $group: { _id: null, totalQuantity: { $sum: "$quantity" } } },
  ]);

  const inventoryValue = await Product.aggregate([
    {
      $group: {
        _id: null,
        totalValue: { $sum: { $multiply: ["$price", "$quantity"] } },
      },
    },
  ]);

  const lowStock = await Product.find({ quantity: { $lt: 10 } });

  res.json({
    totalProducts,
    totalStock: totalStock[0]?.totalQuantity || 0,
    totalInventoryValue: inventoryValue[0]?.totalValue || 0,
    lowStock,
  });
};

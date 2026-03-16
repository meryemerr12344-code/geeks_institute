const Product = require('../models/Product');

const getProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 12;

    const products = await Product.find()
      .select('title price image category')
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getProducts };
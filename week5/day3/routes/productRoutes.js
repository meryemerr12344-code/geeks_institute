const express = require('express');
const { getProducts } = require('../controllers/productController');

const router = express.Router();

// GET /api/products?page=1
router.get('/', getProducts);

module.exports = router;
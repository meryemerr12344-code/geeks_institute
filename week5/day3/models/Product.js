const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String },
});

// ✅ Compound index for fast search + sort
productSchema.index({ category: 1, price: -1 });

module.exports = mongoose.model('Product', productSchema);
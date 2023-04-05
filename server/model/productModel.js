const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  title: { type: String, require: true },
  brand: { type: String, require: true },
  category: { type: String, require: false },
  description: {
    type: String,
    required: [true, "Please Enter product Description"],
  },
  discounted_price: { type: Number, require: true },
  strike_price: { type: Number, require: true },
  discount: { type: String, require: true },
  rating: { type: Number, require: false },
  rating_count: { type: String, require: false },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  size: { type: Array, require: false },
  Stock: {
    type: Number,
    required: [true, "Please Enter product Stock"],
    maxLength: [4, "Stock cannot exceed 4 characters"],
    default: 1,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;

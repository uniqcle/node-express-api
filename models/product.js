const mongooseDb = require("../db/mongoose");

const schema = new mongooseDb.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 255,
      minlength: 2,
      trim: true,
    },
    price: Number,
    img: String,
    description: {
      type: String,
      maxlength: 1000,
    },
    sku: {
      type: String,
      required: true,
      maxlength: 255,
      unique: true,
      trim: true,
    },
    published: {
      type: Boolean,
      default: true,
    },
    category: {
      type: String,
      required: true,
    },
    manufacturer: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    }
  }
);

module.exports = mongooseDb.model("Product", schema);

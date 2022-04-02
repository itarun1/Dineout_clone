const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    about: { type: String, required: true },
    price: { type: String, required: true },
    type: [{ type: String, required: true }],
    bestItems: [{ type: String, required: true }],
    features: [{ type: String, required: true }],
    image_urls: [{ type: String, required: true }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("restaurant", restaurantSchema);

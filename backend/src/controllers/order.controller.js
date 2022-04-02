const express = require("express");
const orderModel = require("../models/order.model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const restaurants = await orderModel.find().lean().exec();
    return res.status(200).send(restaurants);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const restaurant = await orderModel.create(req.body);
    return res.status(201).send(restaurant);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.delete("/delete_all", async (req, res) => {
  try {
    await orderModel.deleteMany().lean().exec();
    return res.status(201).send("all deleted");
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;

const express = require("express");
const resModel = require("../models/restaurants.model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const restaurants = await resModel.find().lean().exec();
    return res.status(200).send(restaurants);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const rest = await resModel.findById(req.params.id).lean().exec();
    return res.status(200).send(rest);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const restaurant = await resModel.create(req.body);
    return res.status(201).send(restaurant);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// router.delete("/delete_all", async (req, res) => {
//   try {
//     await resModel.deleteMany().lean().exec();
//     return res.status(201).send("all deleted");
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// });

module.exports = router;

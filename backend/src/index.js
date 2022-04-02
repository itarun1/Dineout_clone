const express = require("express");
const restController = require("./controllers/restaurants.controller");
const orderController = require("./controllers/order.controller");

const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json());

app.use("/restaurants", restController);
app.use("/orders", orderController);

module.exports = app;

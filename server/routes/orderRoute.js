const express = require("express");
const {
  newOrder,
  myOrders,
  getSingleOrder,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controller/orderController");
const { requireSignIn, isAdmin } = require("../middleware/authMiddleware");

const orderRoute = express.Router();

orderRoute.post("/new", requireSignIn, newOrder);
// {=====myorders:---LOGED IN USER ORERS=========}
orderRoute.get("/me", requireSignIn, myOrders);
orderRoute.get("/:id", requireSignIn, isAdmin, getSingleOrder);
orderRoute.get("/admin/orders", requireSignIn, isAdmin, getAllOrders);
orderRoute.put("/admin/order/:id", requireSignIn, isAdmin, updateOrder);
orderRoute.delete("/admin/order/:id", requireSignIn, deleteOrder);
module.exports = orderRoute;

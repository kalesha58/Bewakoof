const express = require("express");
const {
  createProduct,
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
  getAdminProducts,
  getAdminAllProducts,
} = require("../controller/productController");
const { requireSignIn, isAdmin } = require("../middleware/authMiddleware");

const productRoute = express.Router();

productRoute.post("/create", requireSignIn, isAdmin, createProduct);

productRoute.get("/getproducts", getAllProducts);
productRoute.get("/getproducts", requireSignIn, isAdmin, getAllProducts);
productRoute.get("/admin/getproducts", requireSignIn, isAdmin, getAdminAllProducts);

productRoute.get("/getproducts/:id", getSingleProduct);

productRoute.delete("/getproducts/:id", requireSignIn, isAdmin, deleteProduct);

productRoute.put("/getproducts/:id", requireSignIn, isAdmin, updateProduct);

module.exports = productRoute;

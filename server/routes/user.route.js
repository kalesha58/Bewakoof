const express = require("express");
const {
  registerUser,
  loginUser,
  getAllUser,
  getSingleUser,
  deleteUser,
  forgotPasswordController,
  updateUserRole
} = require("../controller/user.controller");
const { requireSignIn, isAdmin } = require("../middleware/authMiddleware");

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/admin/user/:id", requireSignIn, isAdmin, getSingleUser);
userRouter.get("/admin/allusers", requireSignIn, isAdmin, getAllUser);
userRouter.delete("/:id", requireSignIn, isAdmin, deleteUser);
//Forgot Password || POST
userRouter.post("/forgot-password", requireSignIn, forgotPasswordController);
userRouter.put("/admin/user/:id", requireSignIn, updateUserRole);

//protected User route auth
userRouter.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected Admin route auth
userRouter.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});
module.exports = userRouter;

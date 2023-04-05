const express = require("express");
const cloudinary = require("cloudinary");
const connection = require("./config/db");
const orderRoute = require("./routes/orderRoute");
const productRoute = require("./routes/productRoute");
const userRouter = require("./routes/user.route");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const bodyParser=require("body-parser")
const fileUpload = require("express-fileupload");
const app = express();
require("dotenv").config();
app.use(express.json());
const port = process.env.PORT;
app.use(cookieParser());

app.use(
  cors({
    origin: true,
    // origin: "http://localhost:3000",
    methods:["GET","POST","PUT","DELETE"],
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);

app.use(fileUpload());

app.get("/", (req, res) => {
  res.send("home page");
});
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
app.use("/api/v1/auth", userRouter);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/orders", orderRoute);

connection();
app.listen(port, () => {
  console.log(`port is running at ${port}`);
});

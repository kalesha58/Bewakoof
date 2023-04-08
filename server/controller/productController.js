const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Product = require("../model/productModel");
const ApiFeatures = require("../utils/apifeature");
const product = require("../db.json");
const ErrorHandler = require("../utils/errorhandler");
const cloudinary = require("cloudinary");
// {====================Create-Product========= ADMIN  ++++=================}
exports.createProduct = catchAsyncErrors(async (req, res) => {
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "products",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

// {========================GET_ALL_PRODCUTS===================}
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
  const resultPerPage = 20;
  const productsCount = await Product.countDocuments();
  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  // const products = await Product.find();
  const products = await apiFeature.query;
  res
    .status(200)
    .json({ success: true, products, productsCount, resultPerPage });
});
// {========================GET_ALL_PRODCUTS----Admin-----===================}
exports.getAdminAllProducts = catchAsyncErrors(async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ success: true, products });
});

// const insertProduct = async () => {
//     try {
//         const docs = await Product.insertMany(product);
//         return Promise.resolve(docs);
//     } catch (err) {
//         return Promise.reject(err)
//     }
// };

// insertProduct()
//     .then((docs) => console.log(docs))
//     .catch((err) => console.log(err))

// {========================GET-SINGLE -PRODUCT--------------------------===================}
exports.getSingleProduct = catchAsyncErrors(async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.status(201).json({
    success: true,
    product,
  });
});

// {========================DELETE-PRODUCT--------------------------===================}
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }
  // Deleting Images From Cloudinary
  for (let i = 0; i < product.images.length; i++) {
    await cloudinary.v2.uploader.destroy(product.images[i].public_id);
  }

  await product.remove();
  res.status(200).json({
    success: true,
    message: "Product Delete Successfully",
  });
});

// {========================UPDATE-PRODUCT----------ADMIN----------------===================}
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  // Images Start Here
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // Deleting Images From Cloudinary
    for (let i = 0; i < product.images.length; i++) {
      await cloudinary.v2.uploader.destroy(product.images[i].public_id);
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "products",
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.images = imagesLinks;
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

// {===================Get All Product (Admin)================}
exports.getAdminProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    products,
  });
});

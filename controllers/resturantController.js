const asyncHandler =require('express-async-handler');
const Resturant =require('../models/resturantModel.js');
const Order =require('../models/orderModel.js');
const resturants =require('../data/resturants.js');
const { validationResult } =require('express-validator');

// @desc    Fetch all resturant
// @route   GET /api/resturant
// @access  Public
const getResturants = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};

  const count = await Resturant.countDocuments({ ...keyword });
  const resturants = await Resturant.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ resturants, page, pages: Math.ceil(count / pageSize) });
});

// @desc    Fetch single resturant
// @route   GET /api/resturant/:id
// @access  Public
const getResturantById = asyncHandler(async (req, res) => {
  try {
    const resturant = await Resturant.findById(req.params.id);

    if (resturant) {
      res.json(resturant);
    } else {
      res.status(404);
      throw new Error('Resturant not found');
    }
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

const createOrder = asyncHandler(async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      userId,
      products,
      deliveryAddress,
      cardNumber,
      mobile,
      expiryMonth,
      expiryYear,
      cvc,
    } = req.body;
    // productList = [];
    // productId.map(async (product) => {
    //   const prod = await Resturant.find({
    //     products: { $elemMatch: { _id: product } },
    //   });
    //   productList.push(prod);
    // });

    const order = await Order.create({
      userId,
      products,
      deliveryAddress,
      cardNumber,
      mobile,
      expiryMonth: parseInt(expiryMonth),
      expiryYear: parseInt(expiryYear),
      cvc: parseInt(cvc),
    });
    res.status(201).json({
      order,
    });
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

module.exports= { getResturants, getResturantById, createOrder };

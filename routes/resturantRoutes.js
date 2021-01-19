const express =require('express');
const router = express.Router();
const {
  getResturants,
  getResturantById,
  createOrder,
} =require('../controllers/resturantController.js');
const { protect } =require('../middleware/authMiddleware.js');
const { check } =require('express-validator');

router.route('/').get(getResturants);
router.route('/order').post(
  [
    check('deliveryAddress', ' Location  is required').not().isEmpty(),
    check('expiryMonth', ' Expiry Month is required').not().isEmpty(),
    check('expiryYear', ' Expiry Year is required').not().isEmpty(),
    check('cardNumber', 'Please include a valid Card Number').isCreditCard(),
    check('cvc', 'Please enter a correct CVC').isLength({ min: 3, max: 3 }),
  ],

  createOrder
);

router.route('/:id').get(getResturantById);

module.exports= router;

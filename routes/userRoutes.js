const express =require('express');
const router = express.Router();
const {
  authUser,
  registerUser,
  getUsers,
  getUserById,
} =require('../controllers/userController.js');
const { protect } =require('../middleware/authMiddleware.js');
const { check } =require('express-validator');

router
  .route('/')
  .post(
    [
      check('name', ' Name is required').not().isEmpty(),
      check('email', 'Please include a valid email').isEmail(),
      check(
        'password',
        'Please enter a password with 8 or more characters'
      ).isLength({ min: 8 }),
    ],
    registerUser
  )
  .get(protect, getUsers);

router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 8 or more characters'
    ).isLength({ min: 8 }),
  ],
  authUser
);
module.exports= router;

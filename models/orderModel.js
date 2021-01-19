const mongoose =require('mongoose');

const orderSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },

    product: [
      {
        resturantId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Resturant',
        },
        productId: {
          type: String,
        },
      },
    ],
    mobile: {
      type: String,
    },
    deliveryAddress: {
      type: String,
      required: true,
    },
    cardNumber: {
      type: String,
      required: true,
    },
    expiryMonth: {
      type: Number,
      required: true,
    },
    expiryYear: {
      type: Number,
      required: true,
    },
    cvc: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


module.exports= mongoose.model('Order', orderSchema);

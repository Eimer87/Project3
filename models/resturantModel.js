const mongoose =require('mongoose');

const categorySchema = mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  products: [
    {
      name: {
        type: String,
      },
      price: {
        type: Number,
      },
      desc: {
        type: String,
      },
      itemImage: {
        type: String,
      },
    },
  ],
});
const resturantSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    headerImage: {
      type: String,
      required: true,
    },
    category: [
      {
        type: String,
        required: true,
      },
    ],
    address: {
      type: String,
      required: true,
    },
    deliverytime: {
      type: String,
      required: true,
      default: '25-30 min',
    },
    category: [categorySchema],
  },
  {
    timestamps: true,
  }
);


module.exports= mongoose.model('Resturant', resturantSchema);


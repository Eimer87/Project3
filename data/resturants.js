const resturants = [
  {
    name: "McDonald's® (Stamford)",
    headerImage: 'https://source.unsplash.com/featured/?fastfood5421',
    category: ['Burger', 'Breakfast and brunch'],
    address: '1103 E Main St, Stamford, CT 06901',
    category: [
      {
        categoryName: 'Burger',
        products: [
          {
            name: 'Hamburger',
            price: 4,
            desc: 'cheddar, onions, gherkins, mustard, yum yum',
            itemImage: 'https://source.unsplash.com/featured/?fastfood243',
          },
          {
            name: 'Cheeseburger',
            price: 6,
            desc: 'onions, gherkins, mustard, yum yum sauce',
            itemImage: 'https://source.unsplash.com/featured/?fastfood2389',
          },
          {
            name: 'McRib',
            price: 8,
            desc:
              'crispy bacon, chilli jam, cheddar, gherkins, tomato ketchup, baco...',
            itemImage: 'https://source.unsplash.com/featured/?fastfood92384',
          },
        ],
      },
      {
        categoryName: 'Breakfast and brunch',
        products: [
          {
            name: 'Breaded Butterfly King Shrimp, Sweet Chilli',
            price: 10,
            desc:
              'crispy bacon, cheddar, onions, gherkins, english mustard, yum yum sauce',
            itemImage: 'https://source.unsplash.com/featured/?fastfood645',
          },
          {
            name: 'Spicy Chicken Wings, Peri Peri Sauce (G)',
            price: 10,
            desc:
              'crispy bacon, cheddar, onions, gherkins, english mustard, yum yum sauce',
            itemImage: 'https://source.unsplash.com/featured/?fastfood987',
          },
        ],
      },
    ],
  },
  {
    name: 'Fuji (Stamford)',
    headerImage: 'https://source.unsplash.com/featured/?fastfood92431',
    category: ['Asian', 'Beef'],
    address: '94 Bedford St, Stamford, CT 06901',
    category: [
      {
        categoryName: 'Asian',
        products: [
          {
            name: 'Fried Pork Dumplings',
            price: 10,
            desc: 'eight pieces',
            itemImage: 'https://source.unsplash.com/featured/?asianfood9243',
          },
          {
            name: 'Sesame Chicken',
            price: 20,
            desc: 'with rice',
            itemImage: 'https://source.unsplash.com/featured/?asianfood948235',
          },
          {
            name: 'Sesame Chicken with Honey Cashew Nuts',
            price: 14,
            desc:
              'With white rice, deep fried chicken in special sauce with sesame seeds',
            itemImage: 'https://source.unsplash.com/featured/?asianfood29450',
          },
        ],
      },
      {
        categoryName: 'Beef',
        products: [
          {
            name: 'Beef with Mixed Vegetables',
            price: 20,
            desc: 'With white rice.',
            itemImage: 'https://source.unsplash.com/featured/?asianfood865498',
          },
          {
            name: 'Beef with Broccoli',
            price: 30,
            desc: 'With white rice.',
            itemImage: 'https://source.unsplash.com/featured/?asianfood68590',
          },
        ],
      },
    ],
  },
];

module.exports= resturants;

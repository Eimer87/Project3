const resturants = [
  {
    name: "Six Thirteen",
    headerImage: 'SixThirteen.jpeg',
    category: ['Appetizer', 'Entree'],
    address: '108 Prospect St, Stamford, CT 06901',
    phone:"(203) 614-8777",
    foodType:"(311) · $$$ · Kosher",
    rating:"4.6",
    description:"Bright, modern bistro serving kosher eats, craft beer & cocktails, with a fireplace & shaded patio.",
    category: [
      {
        categoryName: 'Appetizer',
        products: [
          {
            name: 'Smoked Brisket Egg Rolls',
            price: 12,
            desc: 'Two Crispy Egg Rolls with Texas Style Smoked Brisket, Asian Vegetables, with a Sweet Chili Sauce',
            itemImage: 'Smoked_Brisket.jpeg',
          },
          {
            name: 'Wings',
            price: 10,
            desc: 'BBQ, Buffalo, Honey Mustard, Teriyaki, Spicy Honey Lime, Plain, Grilled, Angel of Death ',
            itemImage: 'Wings.jpeg',
          },
          {
            name: 'Chili Nachos',
            price: 10,
              desc:
              'Choice of BeefChili or Veggie Chili, Served with Pico de Gallo and Guacamole',
            itemImage: 'ChilliCheese.jpeg',
          },
        ],
      },
      {
        categoryName: 'Entree',
        products: [
          {
            name: 'Pan Seared Atlantic Salmon',
            price: 26,
            desc:
              'Green Bean -Fingerling Potato -Oven Dried TomatoHash,Lemon Vinaigrette',
            itemImage: 'PanSearedSalmon.jpeg',
          },
          {
            name: 'Pan Seared Sesame Crusted Tuna',
            price: 27,
            desc:
              'Crispy Sushi Rice, SpicyCauliflower, Sriracha Aioli',
            itemImage: 'PanSearedTuna.jpeg',
          },
        ],
      },
    ],
  },
  {
    name: "Capriccio Cafe",
    headerImage: 'Capriccio.jpeg',
    category: ['Pizza', 'Panini'],
    address: '189 Bedford St, Stamford, CT 06901',
    phone:"(203) 356-9819",
    foodType:"(260) · $$ · Italian",
    rating:"4.3",
    description:"Casual, trendy spot serving Italian fare & wine indoors & out at a large sidewalk seating area.",
    category: [
      {
        categoryName: 'Pizza',
        products: [
          {
            name: 'Margherita Pizza',
            price: 13,
            desc: 'Tomato sauce, mozzarella, fresh basil.',
            itemImage: 'Margherita.jpeg',
          },
          {
            name: 'Pollo Pizza',
            price: 15,
            desc: 'Tomato sauce, mozzarella, spinach, grilled chicken, goat cheese.',
            itemImage: 'Pollo_Pizza.jpeg',
          },
          {
            name: 'Campagna Pizza',
            price: 14,
            desc:
              'Meatball, cherry peppers, mozzarella, tomato sauce.',
            itemImage: 'Campagna_Pizza.jpeg',
          },
        ],
      },
      {
        categoryName: 'Panini',
        products: [
          {
            name: 'Capri Panini',
            price: 9,
            desc:
              'Mozzarella, plum tomato, basil.',
            itemImage: 'Capri_Panini.jpeg',
          },
          {
            name: 'Bistecca Panini',
            price: 11.50,
            desc:
              'Steak, provolone, sauteed onions, portobello mushrooms.',
            itemImage: 'Bisteca_Panini.jpeg',
          },
        ],
      },
    ],
  },
  {
    name: "The Stamford Diner",
    headerImage: 'StamfordDiner.jpeg',
    category: ['Burger', 'Wraps'],
    address: "135 Harvard Ave, Stamford, CT 06902",
    phone:"(203) 348-7000",
    foodType:"(1,028) · $$ · Diner",
    rating:4.4,
    description:"Old school diner, grill & bar with retro décor serving American grub from breakfast to dinner.",
    category: [
      {
        categoryName: 'Burger',
        products: [
          {
            name: 'CLASSIC BURGER',
            price: 11.99,
            desc: 'Char-Grilled on a Sesame Seed Bun with lettuce & Tomato',
            itemImage: 'Classic_Burger.jpeg',
          },
          {
            name: 'BLACK JACK BURGER',
            price: 14.99,
            desc: 'Cajun Blackened House Ground Beef Burger with Melted Monterey Jack ',
            itemImage: 'Black_Jack_Burger.jpeg',
          },
          {
            name: 'CHEESEBURGER',
            price: 12.99,
            desc:
              'Char-Grilled, with Choice of American, Swiss, Mozzarella or Cheddar, lettuce & Tomato on a Sesame Seed Bun',
            itemImage: 'Cheese_Burger.jpeg',
          },
        ],
      },
      {
        categoryName: 'Wraps',
        products: [
          {
            name: 'CHICKEN CAESAR',
            price: 13.99,
            desc:
              'Grilled Chicken, Romaine Lettuce, Croutons, Parmesan Cheese and Caesar Dressing',
            itemImage: 'ChickenCeasar.jpeg',
          },
          {
            name: 'CRUNCHY CHICKEN CHEDDAR WRAP',
            price: 14.99,
            desc:
              'Breaded Chicken Tenderloins with Cheddar Cheese, Lettuce, Tomatoes',
            itemImage: 'Chicken_Cheddar.jpeg',
          },
        ],
      },
    ],
  },
  {
    name: "Kashi Stamford",
    headerImage: 'Kashi.jpeg',
    category: ['Burger', 'Breakfast and brunch'],
    address: "131 Summer St, Stamford, CT 06901",
    phone:"(203) 890-9995",
    foodType:"(365) · $$ · Japanese",
    rating:4.4,
    description:"Innovative sushi rolls, hibachi & teriyaki in buzzy, illuminated digs with a sake bar.",
    category: [
      {
        categoryName: 'Special Cold Appetizers',
        products: [
          {
            name: 'Yellowtail Jalapeno',
            price: 12,
            desc: 'Foam ponzu, wasabi aioli ',
            itemImage: 'YellowTail.jpeg',
          },
          {
            name: 'Winter Truffle White Tuna',
            price: 11,
            desc: 'Seared white tuna, yuzu citrus & shaved truffle ',
            itemImage: 'White_Truffle.jpeg',
          },
          {
            name: 'Spicy Tuna Gyoza ',
            price: 11,
            desc:'Crispy tuna gyoza, guacamole, Thai mango chili aioli ',
            itemImage: 'Spicy_Tuna.jpeg',
          },
        ],
      },
      {
        categoryName: 'Special Hot Appetizers',
        products: [
          {
            name: 'Slow Cooked Baby Back Ribs ',
            price: 12,
            desc:
              'Tamarind chili glazed ',
            itemImage: 'BackRibs.jpeg',
          },
          {
            name: 'Blue Crab Fajita',
            price: 12,
            desc:
              'Fresh fajita w. blue crab, cream cheese and onion ',
            itemImage: 'BlueCrab.jpeg',
          },
        ],
      },
    ],
  },
  {
    name: "Tutti Pazzi",
    headerImage: 'tuttiipazi.jpeg',
    category: ['APPETIZERS', 'FLATBREADS'],
    address: "269 Bedford St, Stamford, CT 06901",
    phone:"(203) 324-7000",
    foodType:"(233) · $$ · Italian",
    rating:4.4,
    description:"Italian menu with lots of choices, including house-made pasta, in a light-filled bi-level space.",
    category: [
      {
        categoryName: 'APPETIZERS',
        products: [
          {
            name: 'GARLIC BREAD',
            price: 6,
            desc: 'Garlic, Parsley, Oregano, Olive Oil',
            itemImage: 'Garlic_Bread.jpeg',
          },
          {
            name: 'PASTA E FAGIOLI GF',
            price: 8,
            desc: 'Papa Pasta and Bean Soup',
            itemImage: 'PastaEFagoli.jpeg',
          },
          {
            name: 'FRIED MONTAUK CALAMARI',
            price: 14,
            desc:
              'Spicy Marinara Sauce',
            itemImage: 'FriedMontak.jpeg',
          },
        ],
      },
      {
        categoryName: 'FLATBREADS',
        products: [
          {
            name: 'MARGARITA',
            price: 8,
            desc:
              'Marinara, Mozzarella, Basil',
            itemImage: 'Margarita.jpeg',
          },
          {
            name: 'CHICKEN',
            price:  11,
            desc:
              'Mozzarella, Pesto',
            itemImage: 'Chicken.jpeg',
          },
        ],
      },
    ],
  },
  {
    name: "The Whale Tea Stamford",
    headerImage: 'TheWhiteTea.jpeg',
    category: ['Fresh Fruit Tea Series', 'Milk Foam Fresh Tea Series'],
    address: "1 Bank St, Stamford, CT 06901",
    phone:"(203) 355-9578",
    foodType:"(38)·Bubble Tea",
    rating:4.6,
    description:"Bubble tea store",
    category: [
      {
        categoryName: 'Fresh Fruit Tea Series',
        products: [
          {
            name: 'Mango Fruit Tea',
            price:5.75, 
            desc: 'Mango Pulp,black Tea,lemon juice,mint leaves,cane sugar',
            itemImage: 'Mango.jpeg',
          },
          {
            name: 'Pineapple Fruit Tea',
            price: 5.75,
            desc: 'Pineapple juice,tea bags,lemon juice,sugar,fresh mint leaves',
            itemImage: 'Pineapple.jpeg',
          },
          {
            name: 'GrapeFruit Fruit Tea',
            price: 5.75,
            desc:
              'Cinnamon sticks,fresh ginger',
            itemImage: 'GrapeFruit.jpeg',
          },
        ],
      },
      {
        categoryName: 'Milk Foam Fresh Tea Series',
        products: [
          {
            name: 'Milk Foam Black Tea',
            price: 5.75,
            desc:
              'heavy cream,sugar,hot water',
            itemImage: 'BlackTea.jpeg',
          },
          {
            name: 'Milk Foam Grape Tea',
            price: 5.95,
            desc:
              'heavy cream,sugar,hot water',
            itemImage: 'GrapeTea.jpeg',
          },
        ],
      },
    ],
  },
];

module.exports= resturants;

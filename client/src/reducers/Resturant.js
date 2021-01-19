import { SET_RESTURANT, ADD_CART, CLEAR_CART,FILTER_RESTURANTS } from '../actions/types';

const initialState = {
  ResturantList: [],
  filterResturant:[],
  ResturantItem: {},
  CategroyItem: {},
  products: [],
  Cart: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_RESTURANT: {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    }
    case ADD_CART: {
      return {
        ...state,
        Cart: [...state.Cart, action.payload],
        products: [
          ...state.products,
          {
            productId: action.payload.cartItem._id,
            resturantId: action.payload.resturantId,
          },
        ],
      };
    }
    case CLEAR_CART:{
      return {
        ...state,
        Cart: [],
      }
    }
    case FILTER_RESTURANTS:{
      return{
        ...state,
        filterResturant: state.ResturantList.filter((resturant) => {
         const regex = new RegExp(`${action.payload}`, "gi");
         return resturant.name.match(regex);
       }),
      } 
    }

    default:
      return state;
  }
};

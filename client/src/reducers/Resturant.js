import { SET_RESTURANT, ADD_CART, CLEAR_CART,FILTER_RESTURANTS, REMOVE_CARTITEM } from '../actions/types';

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
      let Exists=false;
      state.Cart.map((item)=>{
        if(action.payload.cartItem._id===item.cartItem._id){
          Exists=true;
        }
        return item;
      });
      if(Exists){
        return{
          ...state,
          Cart:state.Cart.map((item)=>{
            if(item.cartItem._id===action.payload.cartItem._id){
              return {...action.payload,quantity:(item.quantity+action.payload.quantity)
              }
            }else{
              return item
            }
          })
        }
      }else{
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
    case REMOVE_CARTITEM:{
      return{
        ...state,
        Cart:state.Cart.filter((item)=>{
          return item.cartItem._id!==action.payload
        })
      }
    }

    default:
      return state;
  }
};

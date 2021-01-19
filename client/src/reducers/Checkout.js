import {
    CLEAR_CART,
 SET_CHECKOUT
} from "../actions/types";


const initialState = {
    Location:"",
    Mobile:"",
    Account:"",
    Month:"",
    Year:"",
    CVC:""
};

export default (state = initialState, action) => {
   switch (action.type) {
       case SET_CHECKOUT:{ 
           return {
               ...state,                                                                                                                                                                                                                                                                                                                                                         
           [action.payload.name]:action.payload.value  
           }                                                                                                                                                                                                                                                                                                                                                                                                                                               
       }
       case CLEAR_CART:{
           return{
               ...state,
               Location:"",
               Mobile:"",
               Account:"",
               Month:"",
               Year:"",
               CVC:""
           }
       }

       default:
           return state;
   }
};
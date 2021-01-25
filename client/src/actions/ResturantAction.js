import Axios from "axios";
import { ADD_CART, CLEAR_CART, FILTER_RESTURANTS, SET_RESTURANT } from "./types";

export const setResturant = (data) => async (dispatch) => {
    try {
        dispatch({ type: SET_RESTURANT, payload: data })
    } catch (error) {
        console.error(error);
    }
}
export const FilterResturant = (data) => async (dispatch) => {
    try {
        dispatch({ type: FILTER_RESTURANTS, payload: data })
    } catch (error) {
        console.error(error);
    }
}
export const clearCart = (data) => async (dispatch) => {
    try {
        dispatch({ type: CLEAR_CART, payload: data })
    } catch (error) {
        console.error(error);
    }
}
export const addToCart = (data) => async (dispatch) => {
    try {
        dispatch({ type: ADD_CART, payload: data })
    } catch (error) {
        console.error(error);
    }
}
export const getResturant = (data) => async (dispatch) => {
    try {
           console.log(data);

       let response  = await Axios.get("/api/resturant/");
       
       console.log(response);
       dispatch({
           type:SET_RESTURANT,
           payload:{
               name:"ResturantList",
               value:response.data.resturants
           }
       })
   
    } catch (error) {
        console.log(error.response);
   }
}
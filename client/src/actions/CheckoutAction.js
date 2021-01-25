import Axios from 'axios';
import { REMOVE_CARTITEM, SET_CHECKOUT } from './types';
// import store from '../store';
import Swal from 'sweetalert2';

export const setCheckout = (data) => async (dispatch) => {
  try {
    dispatch({ type: SET_CHECKOUT, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const createOrder = (data) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    // alert(await localStorage.getItem('token'));
    // let resturants
    let response = await Axios.post(
      '/api/resturant/order',
      {
        userId: data.userId,
        deliveryAddress: data.Location,
        mobile: data.Mobile,
        cardNumber: data.Account,
        expiryMonth: data.Month,
        expiryYear: data.Year,
        cvc: data.CVC,
        products: data.products,
      },
      config
    );
      return response;
  } catch (error) {
    console.log(error.response);
    if(error.response.data.errors)
    Swal.fire({
       icon: 'error',
       title: 'Error Occured',
       text: error.response.data.errors[0].msg
       })
       console.error(error);
  }
};

export const RemoveCartItem = (data) => async (dispatch) => {
  try {
    dispatch({ type: REMOVE_CARTITEM, payload: data });
  } catch (error) {
    console.error(error);
  }
};
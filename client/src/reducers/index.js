import { combineReducers } from "redux";
import Checkout from "./Checkout";
import Auth from "./Auth";
import Resturant from "./Resturant";


export default combineReducers({
    Auth:Auth,
    Resturant:Resturant,
    Checkout:Checkout
});
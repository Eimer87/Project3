import {
    SET_AUTH
} from "../actions/types";


const initialState = {
    Register_Name:"",
    Register_Email:"",
    Register_Password:"",
    Register_ConfirmPass:"",
    Login_Email:"",
    Login_Password:"",
    LoggedInUser:{}

};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:{ 
            return {
                ...state,                                                                                                                                                                                                                                                                                                                                                         
            [action.payload.name]:action.payload.value  
            }                                                                                                                                                                                                                                                                                                                                                                                                                                               
        }

        default:
            return state;
    }
};
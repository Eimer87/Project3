import Axios from "axios";
import { SET_AUTH, SET_LOGGEDINUSER } from "./types";
import Swal from "sweetalert2";

export const setAuth = (data) => async (dispatch) => {
    try {
        dispatch({ type: SET_AUTH, payload: data })
    } catch (error) {
        console.error(error);
    }
}

export const RegisterUser = (data) => async (dispatch) => {
 try {
        console.log(data);
        const config ={
            headers:{
             "Content-Type":"application/json"
        }
    };
    let response  = await Axios.post("/api/users/",{
        name:data.Register_Name,
        email:data.Register_Email,
        password:data.Register_Password
    });
    if(response){
        localStorage.setItem("token",response.data.token);
        dispatch({
            type:SET_AUTH,
            payload:{
                name:"LoggedInUser",
                value:{
                    id:  response.data._id,
                    name:response.data.name,
                    email:response.data.email
                }
            }
        });
    }
    console.log(response);

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
}
export const LoginUser = (data) => async (dispatch) => {
    try {
           console.log(data);
           const config ={
               headers:{
                "Content-Type":"application/json"
           }
       };
       let response  = await Axios.post("/api/users/login",{
           email:data.Login_Email,
           password:data.Login_Password
       });
       if(response){
           localStorage.setItem("token",response.data.token);
           dispatch({
               type:SET_AUTH,
               payload:{
                   name:"LoggedInUser",
                   value:{
                       id:  response.data._id,
                       name:response.data.name,
                       email:response.data.email
                   }
               }
           });
       }
       console.log(response);
   
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
   }
export const LogOut = (data) => async (dispatch) => {
    try {
        localStorage.removeItem("token");
        dispatch({ type: SET_AUTH, payload: {
            name:"LoggedInUser",
            value:{}
        } });
    } catch (error) {
        console.error(error);
    }
}
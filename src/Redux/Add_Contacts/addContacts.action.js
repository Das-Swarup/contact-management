
import axios from "axios"
import { ADD_CONTACT_ERROR, ADD_CONTACT_SUCCESS } from "./addContacts.actiontype";


export const addContact=(contact)=>async(dispatch)=>{
  try {
    let res=await axios.post("https://my-json-server.typicode.com/Das-Swarup/contact-management/contacts",contact)
    dispatch({ type: ADD_CONTACT_SUCCESS, payload:res.data });
  } catch (error) {
    dispatch({ type: ADD_CONTACT_ERROR, payload: error.message });
  }
}
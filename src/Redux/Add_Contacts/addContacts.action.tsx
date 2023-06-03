
import axios from "axios"
import { ADD_CONTACT_ERROR, ADD_CONTACT_SUCCESS } from "./addContacts.actiontype";


export const addContact=(contact:any)=>async(dispatch:any)=>{
  try {
    let res=await axios.post("http://localhost:3000/contacts",contact)
    dispatch({ type: ADD_CONTACT_SUCCESS, payload:res.data });
  } catch (error:any) {
    dispatch({ type: ADD_CONTACT_ERROR, payload: error.message });
  }
}
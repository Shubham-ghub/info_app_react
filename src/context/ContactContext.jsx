import { createContext, useReducer } from "react";
import { ContactReducer } from "./ContactReducer";


const ContactContext = createContext();



export const ContactProvider = ({children}) => {

   const initialState  = {
    contacts :[{ id: 1 , name :'shubham' , number : 1234567890 , email:"shubham@gmail.com" , relation : "friend"}],
    edit: { contacts : {} , isEdit : false}
   }


   
 const [state , dispatch] =  useReducer (ContactReducer, initialState )








    return (
    <ContactContext.Provider value={{...state , dispatch
    }}>
        {children}
    </ContactContext.Provider>
    )
}
export default ContactContext;
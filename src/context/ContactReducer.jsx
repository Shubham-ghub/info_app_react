export const ContactReducer = (state, action) => {

  switch (action.type) {
    case "ADD":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      }
    case "REMOVE":
      return {
        ...state,
        contacts: state.contacts.filter((item) => item.id !== action.payload)
      }
    case "EDIT":
      return {
        ...state,
        edit : {contacts: action.payload , isEdit : true}
      }  
     case "UPDATE":
       return {
         ...state,
         contacts: state.contacts.map((item) => item.id === action.payload.id ? action.payload : item),
         edit : {contacts : {} , isEdit : false}
       } 
  } 





}

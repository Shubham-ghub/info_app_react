import React, { useContext } from "react";
import  ContactContext  from "../context/ContactContext";


const Listitems = ({contact}) => {

  const {dispatch} = useContext(ContactContext)

  const handleRemove = (id) => {
    dispatch( {
      type: "REMOVE",
      payload: id
    })
  }

  const handleEdit = (contact) => {
    dispatch ({
      type : "EDIT",
      payload:contact,
    })
  }

 

  
  return (
    <li className="relative my-1  p-3">
      <h1 className=" "> {contact.name}  </h1>
      <p>{contact.number} </p>
      <p>{contact.email}  </p>
      <p> {contact.relation}</p>

      <span>
        <button className="bg-amber-400 p-2  mx-2 absolute top-1 left-240 rounded-sm float-end" onClick={() => handleEdit(contact)}>Edit</button>
        <button className="bg-red-600 p-2 mx-2  absolute top-1 left-260  rounded-sm float-end" onClick={() => handleRemove(contact.id)} >Delete</button>
      </span>



    </li>
  )
}
export default Listitems
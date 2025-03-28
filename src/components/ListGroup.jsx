import React, { useContext } from "react";
import Listitems from "./ListItems";
import contactContext from "../context/ContactContext";


const ListGroup = () => {

    const { contacts } = useContext(contactContext)


    return (
        <ul className="p-5 mx-5 w-6xl   bg-[#F5ECE0]">
            {contacts?.map((contact) => (
                <Listitems key={contact.id} contact={contact} />
            ))}





        </ul>
    )
}
export default ListGroup 
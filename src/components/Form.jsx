import React, { useContext, useEffect } from "react";
import { useState } from "react";
import contactContext from "../context/ContactContext";


const Form = () => {
    
    const {dispatch , edit} = useContext(contactContext)

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [relation, setRelation] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();


       !edit.isEdit ?
         dispatch({
            type: "ADD",
            payload: {id:crypto.randomUUID() , name , number , email ,relation}
        }) 
       : dispatch({
            type: "UPDATE",
            payload: {id:edit.contacts.id , name , number , email ,relation}
        })

         


        setName("");
        setNumber("");  
        setEmail("");
        setRelation("");

    }

    useEffect(() => {
        setName(edit.contacts.name);
        setNumber(edit.contacts.number);
        setEmail(edit.contacts.email);
        setRelation(edit.contacts.relation);
      } , [edit])



   

    return (
        <div className="p-5">
            <form
                onSubmit={handleSubmit}
                className="p-5 mx-10 w-6xl grid grid-cols-2 grid-rows-4 gap-1"
            >
                <label className="text-xl font-bold text-start" htmlFor="name">
                    Name
                </label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-2 w-md"
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                />

                <label className="text-xl font-bold text-start" htmlFor="moNumber">
                    Mobile No.
                </label>
                <input
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                    className="p-2 w-md"
                    type="text"
                    name="number"
                    placeholder="Enter Your Number"
                />

                <label className="text-xl font-bold text-start" htmlFor="email">
                    Email
                </label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="p-2 w-md"
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                />

                <label className="text-xl font-bold text-start" htmlFor="relation">
                    Relation
                </label>
                <input
                    value={relation}
                    onChange={(e) => setRelation(e.target.value)}
                    required
                    className="p-2 w-md"
                    type="text"
                    name="relation"
                    placeholder="Enter Your Relation"
                />

                <button className="bg-green-500 py-2 w-5xl rounded-md my-2 font-semibol  cursor-pointer hover:bg-green-600 duration-150">
                    Submit Your contactrmation
                </button>
            </form>

            
        </div>
    );
};

export default Form;

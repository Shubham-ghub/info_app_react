import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import { ContactProvider } from "./context/contactContext";




const App = () => {
    return (
        <ContactProvider>
           <Navbar/>
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center mt-10">Welcome to contact App</h1>
                <h3 className="text-xl font-bold text-center mt-10">Enter Your Details</h3>
                <Form />
                <ListGroup/>


            </div >
        </ContactProvider>
    )
}
export default App;
import React from'react'
import {Route , Routes} from "react-router-dom";
import Contact from '../pages/Contact.jsx'
import Home from '../pages/Home.jsx'
import Register from '../pages/Register.jsx'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/register" element={<Register/>} />
        </Routes>
    )
}
export default AllRoutes;
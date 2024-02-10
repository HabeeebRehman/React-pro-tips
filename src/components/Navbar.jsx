import React from'react'
import './Navbar.css'
import { Link } from'react-router-dom'

const Navbar = () => {
    return (
        <div className="navBar">
        <div className="logo-Container">
          <Link to={"/"}>
            <img src="https://kalvium.com/wp-content/uploads/2023/04/Kalvium-Logo-SVG.svg"alt="kalvium-logo"
              className="logo"
            ></img>
          </Link>
        </div>
        <ul>
          <h3>
            <Link to={"/contact"} className="linkTag">Contact</Link>
          </h3>
          <h3>
            <Link to={"/register"} className="linkTag">Register</Link>
          </h3>
        </ul>
      </div>
    )
}
export default Navbar
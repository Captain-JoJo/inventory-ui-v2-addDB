import React from 'react'
import './Navbar.css'
import { NavLink, Link } from 'react-router-dom'

function NavBar() {
    return(
        <div className="navbar">
            <NavLink to="/home" className="active">Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    )
}
export default NavBar

{/* 

<a href="#home" className="active">Home</a>
<a href="#about">About</a> 

*/}
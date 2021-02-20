import React from 'react'
import './Navbar.css'

function NavBar() {
    return(
        <div className="navbar" id="myNavBar">
            <a href="#home" className="active">Home</a>
            <a href="#about">About</a>
        </div>
    )
}

export default NavBar

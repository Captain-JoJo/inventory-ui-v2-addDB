import React from 'react'
import './Navbar.css'
import { NavLink, Link } from 'react-router-dom'

function NavBar() {
    return(
        <div className="navbar">
            <NavLink to="/home" activeClassName="active" exact={true}>Home</NavLink>
            <NavLink to="/favs">Favorites</NavLink>
        </div>
    )
}
export default NavBar
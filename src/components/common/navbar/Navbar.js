import React from "react";
import "./Navbar.css";
import {NavLink, Link} from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/home" activeClassName="active" exact={true}>
        Home
      </NavLink>
      <NavLink to="/favs" activeClassName="active">
        Favorites
      </NavLink>
      <Link
        to={{pathname: "https://github.com/Captain-JoJo/inventory-ui-v2-addDB"}}
        className="gitHubLink"
        target="_blank"
      >
        GitHub
      </Link>
      
    </div>
  );
}
export default NavBar;

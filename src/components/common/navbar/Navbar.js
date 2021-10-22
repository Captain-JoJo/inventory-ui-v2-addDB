import React, { useState } from 'react';
import "./Navbar.css";
import {NavLink, Link} from "react-router-dom";
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";


function NavBar() {


  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <div className="navbar">
      <NavLink to="/home" activeClassName="active" exact={true}>
        Home
      </NavLink>
      <NavLink to="/favs" activeClassName="active">
        ReOrder
      </NavLink>
      <div class="dropdown">
        <button class="dropbtn">Categories
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="#">Meat</a>
          <a href="#">Fruit</a>
          <a href="#">Link 3</a>  
        </div>
      </div>
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

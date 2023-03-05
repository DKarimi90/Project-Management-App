import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar"> 
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projectsList">Projects</NavLink>
         <NavLink to="/add-new-project">Add New Project</NavLink>
    </nav>
);
}

export default Navbar;
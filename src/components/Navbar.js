import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar"> 
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
         <NavLink to="/create-project">Create Project</NavLink>
    </nav>
);
}

export default Navbar;
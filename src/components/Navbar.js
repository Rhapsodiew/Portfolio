import { Link } from "react-router-dom";
import React from 'react';
import "./NavbarStyles.css";


const Navbar = () => {
  return (
    <div className="header">
        <Link to="/">
            <h1>portfolio</h1>
        </Link>
        <ul className="navbar-menu">
          <li>
            <a href="/resume">Resume</a>
          </li>
        </ul>
    </div>
  )
}

export default Navbar
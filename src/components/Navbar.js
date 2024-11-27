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
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Competence</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
    </div>
  )
}

export default Navbar
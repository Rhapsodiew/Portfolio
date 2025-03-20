import { Link } from "react-router-dom";
import React from "react";
import "./NavbarStyles.css";
import cv from "../images/CV.pdf";

const Navbar = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className="navbar-menu">
        <li>
          <a href={cv} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
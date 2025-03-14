import { Link } from "react-router-dom";
import React from 'react';
import "./NavbarStyles.css";
import cv from '../images/CV.pdf'

const Navbar = () => {

  const onResumeClick = () => {
    window.open(cv);
  }

  return (
    <div className="header">
        <Link to="/">
            <h1>portfolio</h1>
        </Link>
        <ul className="navbar-menu">
          <li>
            <a href="" onClick={onResumeClick}>Resume</a>
          </li>
        </ul>
    </div>
  )
}

export default Navbar
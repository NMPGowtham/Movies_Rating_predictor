import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false); // State to handle the menu toggle

  const toggleMenu = () => {
    setIsActive(!isActive); // Toggle the active state on hamburger click
  };

  return (
    <nav className={`navbar ${isActive ? "active" : ""}`}>
      <div className="logo">
        <h2 style={{color: "orange"}}>⭐ Movie Rating Predictor</h2>
      </div>
      {/* Desktop Navigation Links */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/trending">Trending Movies</Link></li>
        <li><Link to="/awards">Awards</Link></li>
      </ul>
      {/* Hamburger Menu Icon for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      
      {/* Mobile Navigation Links */}
      <ul className={`nav-links-mobile ${isActive ? "show" : ""}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/trending">Trending Movies</Link></li>
        <li><Link to="/awards">Awards</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

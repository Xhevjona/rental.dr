import React, { useState } from 'react';
import '../Layout/header.scss';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="responsive-navbar">
        <div className="navbar-brand">
          <button className={isOpen ? "navbar-toggler open" : "navbar-toggler"} onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="logo"><h3> Rental.Dr </h3></div>
        </div>
        <ul className={isOpen ? "navbar-nav open" : "navbar-nav"}>
          <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
          <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
    );
  };
  

export default Header;
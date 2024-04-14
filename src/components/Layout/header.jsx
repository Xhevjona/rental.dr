import React, { useState } from "react";
import "../Layout/header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="responsive-navbar">
      <div className="navbar-brand">
        <button
          className={isOpen ? "navbar-toggler open" : "navbar-toggler"}
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="logo">
          <h3> Rental.Dr </h3>
        </div>
      </div>
      <ul className={isOpen ? "navbar-nav open" : "navbar-nav"}>
        <li className="nav-item">
          {" "}
          <NavLink to="/" className="nav-link">
            {" "}
            Home
          </NavLink>{" "}
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

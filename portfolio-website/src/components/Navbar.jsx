import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure to import the correct CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Tamil Mughilan</h2>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;

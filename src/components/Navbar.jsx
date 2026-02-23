import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <h1 className="logo">GlobusTrip</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#destinations">Destinations</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;

import React from 'react';
import '../Styles/Navbar.css';
import logo from '../Assets/unsplash-logo.png';
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="unsplash" className="logo" />
        <input
          type="text"
          className="search"
          placeholder="Search photos and illustrations"
        />
      </div>

      <div className="nav-links">
        <p>Get Unsplash+</p>
        <p>Log in</p>
        <button className="submit-btn">Submit an image</button>
      </div>
    </nav>
  );
}

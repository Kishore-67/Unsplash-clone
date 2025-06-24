import React, { useState } from 'react';
import '../Styles/Navbar.css';
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="Container">
      <div className="logo">Unsplash</div>

      <div className={`nav-elements ${menuOpen ? 'show' : ''}`}>
        <p>Get Unsplash+</p>
        <p>Log in</p>
        <button>Submit an Image</button>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>
    </div>
  );
}

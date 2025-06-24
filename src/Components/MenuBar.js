import React from 'react';
import '../Styles/MenuBar.css';

export default function Menubar() {
  const menuItems = [
    'Featured',
    'Wallpapers',
    'Nature',
    '3D Renders',
    'Textures',
    'Travel',
    'Film',
    'People',
    'Architecture & Interiors',
    'Street Photography',
    'Experimental',
  ];
  return (
    <div className="menubar">
      {menuItems.map((item, index) => (
        <p key={index} className={`menu-item ${index === 0 ? 'active' : ''}`}>
          {item}
        </p>
      ))}
    </div>
  );
}

import React from 'react';
import './Collections.css';

export default function Collections() {
  const collections = [
    { title: 'Glass Portraits', count: 101, img: 'https://...' },
    { title: 'Modern Interiors', count: 55, img: 'https://...' },
    { title: 'From Above', count: 40, img: 'https://...' },
    { title: 'Cyber, Punk & Industrial Vibes', count: 828, img: 'https://...' },
  ];

  return (
    <div className="collections-container">
      <h4>Collections</h4>
      {collections.map((col, index) => (
        <div key={index} className="collection-item">
          <img src={col.img} alt={col.title} />
          <div>
            <p>{col.title}</p>
            <small>{col.count} images</small>
          </div>
        </div>
      ))}
    </div>
  );
}

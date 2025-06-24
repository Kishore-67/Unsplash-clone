import React from 'react';
import '../Styles/Collection.css';

export default function Collections() {
  const collections = [
    { title: 'Glass Portraits', count: 101, img: 'https://plus.unsplash.com/premium_photo-1747852228961-0421e58942c6?w=40&dpr=2&h=40&auto=format&fit=crop&q=60&ixlib=rb-4.1.0' },
    { title: 'Modern Interiors', count: 55, img: 'https://plus.unsplash.com/premium_photo-1747189286942-bc91257a2e39?w=40&dpr=2&h=40&auto=format&fit=crop&q=60&ixlib=rb-4.1.0' },
    { title: 'From Above', count: 40, img: 'https://plus.unsplash.com/premium_photo-1745950166788-96be20d65198?w=40&dpr=2&h=40&auto=format&fit=crop&q=60&ixlib=rb-4.1.0' },
    { title: 'Cyber, Punk & Industrial Vibes', count: 828, img: 'https://images.unsplash.com/photo-1611739669923-1702037eb9a9?w=40&dpr=2&h=40&auto=format&fit=crop&q=60&ixlib=rb-4.1.0' },
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

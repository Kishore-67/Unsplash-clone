import React from 'react';
import '../Styles/ImageGrid.css';

export default function ImageGrid() {
  const images = [
    {src:'../Assets/pic1.jpg'},
    {src:'../Assets/pic2.jpg'},
    {src:'../Assets/pic3.jpg'},
    {src:'../Assets/pic4.jpg'},
    {src:'../Assets/pic5.jpg'},
  ];

  return (
    <div className="image-grid">
      {images.map((url, index) => (
        <img src={url} key={index} alt={`Image ${index}`} className="grid-img" />
      ))}
    </div>
  );
}

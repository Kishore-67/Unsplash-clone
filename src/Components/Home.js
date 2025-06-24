import React from 'react';
import Collections from './Collection';
import ImageGrid from './ImageGrid';
import '../Styles/Home.css';

export default function Home() {
  return (
    <div className="home-layout">
      <div className="main-section">
        <h1>Unsplash</h1>
        <p>The internet's source for visuals. Powered by creators everywhere.</p>
        <input type="text" className="big-search" placeholder="Search photos and illustrations" />
        <ImageGrid />
      </div>

      <div className="right-section">
        <Collections />
        <div className="license-info">
          <h4>Yes, it's really free.</h4>
          <p>All images can be downloaded and used for personal or commercial projects.</p>
          <a href="#">Learn about our License</a>
        </div>
      </div>
    </div>
  );
}

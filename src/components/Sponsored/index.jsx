import React from 'react';
import { Button } from '@blueprintjs/core';
import './Sponsored.css';

const Sponsored = () => {
  const ads = [
    {
      id: 1,
      title: 'New Tech Gadgets',
      description: 'Check out the latest tech gadgets for your home office',
      image: '#4267B2'
    },
    {
      id: 2,
      title: 'Summer Sale',
      description: 'Up to 50% off on summer collection',
      image: '#FF5E3A'
    }
  ];

  return (
    <div className="sponsored-section">
      <div className="section-header">
        <h3>Sponsored</h3>
        <Button icon="info-sign" variant="minimal" size="small" />
      </div>
      {ads.map(ad => (
        <div key={ad.id} className="sponsored-item">
          <div className="sponsored-image" style={{ backgroundColor: ad.image }}></div>
          <div className="sponsored-content">
            <div className="sponsored-title">{ad.title}</div>
            <div className="sponsored-description">{ad.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sponsored; 
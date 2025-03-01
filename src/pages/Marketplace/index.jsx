import React from 'react';
import { Button, Icon } from '@blueprintjs/core';
import './Marketplace.css';

const Marketplace = () => {
  const products = [
    {
      id: 1,
      title: 'Laptop Computer',
      price: '$899',
      location: 'San Francisco, CA',
      image: '#4267B2'
    },
    {
      id: 2,
      title: 'Vintage Bicycle',
      price: '$120',
      location: 'Austin, TX',
      image: '#FF5E3A'
    },
    {
      id: 3,
      title: 'Smartphone - Like New',
      price: '$450',
      location: 'Seattle, WA',
      image: '#FFD700'
    },
    {
      id: 4,
      title: 'Wooden Dining Table',
      price: '$250',
      location: 'Portland, OR',
      image: '#8A2BE2'
    },
    {
      id: 5,
      title: 'Gaming Console',
      price: '$350',
      location: 'Chicago, IL',
      image: '#32CD32'
    },
    {
      id: 6,
      title: 'Digital Camera',
      price: '$180',
      location: 'Denver, CO',
      image: '#20B2AA'
    }
  ];
  
  const categories = [
    'All Items', 'Vehicles', 'Electronics', 'Furniture', 'Clothing', 'Entertainment', 'Home & Garden', 'Sports'
  ];
  
  return (
    <div className="marketplace-page">
      <div className="marketplace-header">
        <h1>Marketplace</h1>
        <div className="marketplace-actions">
          <Button icon="search" minimal title="Search Marketplace" />
          <Button icon="plus" intent="primary" text="Sell Something" />
        </div>
      </div>
      
      <div className="marketplace-categories">
        {categories.map((category, index) => (
          <Button 
            key={index} 
            className={`category-btn ${index === 0 ? 'active' : ''}`}
            text={category}
            minimal={index !== 0}
          />
        ))}
      </div>
      
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image" style={{ backgroundColor: product.image }}></div>
            <div className="product-info">
              <div className="product-price">{product.price}</div>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-location">{product.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace; 
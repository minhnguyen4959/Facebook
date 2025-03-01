import React from 'react';
import { Card, Elevation, Button, Icon } from '@blueprintjs/core';
import './MarketplaceSection.css';

const MarketplaceSection = () => {
  return (
    <div className="marketplace-content">
      <div className="main-header">
        <h1>Marketplace</h1>
        <div className="marketplace-actions">
          <Button icon="search" minimal className="search-btn" />
          <Button icon="plus" text="Sell Something" className="sell-btn" />
        </div>
      </div>

      <div className="marketplace-filters">
        <Button icon="map-marker" text="Location • 50km" minimal />
        <Button icon="filter" text="Filters" minimal />
        <Button icon="sort" text="Sort" minimal />
      </div>

      <div className="marketplace-section">
        <div className="section-header">
          <h3>Today's Picks</h3>
          <span className="see-all">See All</span>
        </div>

        <div className="items-grid">
          <Card elevation={Elevation.TWO} className="marketplace-item">
            <div className="item-image">
              <div className="media-block" style={{ backgroundColor: '#32CD32' }}></div>
              <Icon icon="heart" className="favorite-icon" />
            </div>
            <div className="item-info">
              <span className="item-price">$800</span>
              <span className="item-title">Gaming Laptop</span>
              <span className="item-condition">Like New</span>
              <div className="item-location">
                <Icon icon="map-marker" size={12} />
                <span>2.5 km • San Francisco</span>
              </div>
            </div>
          </Card>

          <Card elevation={Elevation.TWO} className="marketplace-item">
            <div className="item-image">
              <div className="media-block" style={{ backgroundColor: '#FF69B4' }}></div>
              <Icon icon="heart" className="favorite-icon" />
            </div>
            <div className="item-info">
              <span className="item-price">$300</span>
              <span className="item-title">iPhone 12 Pro</span>
              <span className="item-condition">Good</span>
              <div className="item-location">
                <Icon icon="map-marker" size={12} />
                <span>4.8 km • Oakland</span>
              </div>
            </div>
          </Card>

          <Card elevation={Elevation.TWO} className="marketplace-item">
            <div className="item-image">
              <div className="media-block" style={{ backgroundColor: '#4682B4' }}></div>
              <Icon icon="heart" className="favorite-icon" />
            </div>
            <div className="item-info">
              <span className="item-price">$150</span>
              <span className="item-title">Nike Air Max</span>
              <span className="item-condition">New</span>
              <div className="item-location">
                <Icon icon="map-marker" size={12} />
                <span>1.2 km • Berkeley</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="marketplace-categories">
        <h3>Categories</h3>
        <div className="categories-grid">
          <Button className="category-item" minimal>
            <Icon icon="mobile-phone" />
            <span>Electronics</span>
          </Button>
          <Button className="category-item" minimal>
            <Icon icon="car" />
            <span>Vehicles</span>
          </Button>
          <Button className="category-item" minimal>
            <Icon icon="home" />
            <span>Property</span>
          </Button>
          <Button className="category-item" minimal>
            <Icon icon="shop" />
            <span>Apparel</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceSection; 
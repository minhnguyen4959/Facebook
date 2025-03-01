import React from 'react';
import { Button, Icon } from '@blueprintjs/core';
import './News.css';

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'New Technology Breakthrough Could Revolutionize Renewable Energy',
      source: 'Tech News Daily',
      time: '2 hours ago',
      image: '#4267B2',
      category: 'Technology'
    },
    {
      id: 2,
      title: 'Global Economic Forum Predicts Growth in Emerging Markets',
      source: 'Financial Times',
      time: '5 hours ago',
      image: '#FF5E3A',
      category: 'Business'
    },
    {
      id: 3,
      title: 'Scientists Discover New Species in Amazon Rainforest',
      source: 'Science Today',
      time: '1 day ago',
      image: '#FFD700',
      category: 'Science'
    },
    {
      id: 4,
      title: 'Major Sports League Announces Expansion Teams',
      source: 'Sports Network',
      time: '3 hours ago',
      image: '#8A2BE2',
      category: 'Sports'
    }
  ];
  
  const categories = [
    'For You', 'Technology', 'Business', 'Science', 'Entertainment', 'Sports', 'Health', 'Politics'
  ];
  
  return (
    <div className="news-page">
      <div className="news-header">
        <h1>News Feed</h1>
        <div className="news-actions">
          <Button icon="search" variant="minimal" title="Search News" />
          <Button icon="filter" variant="minimal" title="Filter" />
        </div>
      </div>
      
      <div className="news-categories">
        {categories.map((category, index) => (
          <Button 
            key={index} 
            className={`category-btn ${index === 0 ? 'active' : ''}`}
            text={category}
            {...(index !== 0 ? { variant: "minimal" } : {})}
          />
        ))}
      </div>
      
      <div className="news-articles">
        {newsArticles.map(article => (
          <div key={article.id} className="news-card">
            <div className="news-image" style={{ backgroundColor: article.image }}>
              <div className="news-category">{article.category}</div>
            </div>
            <div className="news-content">
              <h3 className="news-title">{article.title}</h3>
              <div className="news-meta">
                <span className="news-source">{article.source}</span>
                <span className="news-time">{article.time}</span>
              </div>
              <div className="news-actions">
                <Button icon="bookmark" variant="minimal" title="Save" />
                <Button icon="share" variant="minimal" title="Share" />
                <Button icon="more" variant="minimal" title="More Options" />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="news-load-more">
        <Button text="Load More News" fill />
      </div>
    </div>
  );
};

export default News; 
import React from 'react';
import { Button, Icon, Tab, Tabs } from '@blueprintjs/core';
import './Saved.css';

const Saved = () => {
  const savedItems = [
    {
      id: 1,
      title: 'How to Build a React Application from Scratch',
      source: 'Tech Blog',
      date: 'Saved 2 days ago',
      type: 'article',
      color: '#4267B2'
    },
    {
      id: 2,
      title: 'The Future of Web Development: Trends to Watch',
      source: 'Web Dev Magazine',
      date: 'Saved 1 week ago',
      type: 'article',
      color: '#FF5E3A'
    },
    {
      id: 3,
      title: 'Healthy Meal Prep Ideas for Busy Developers',
      source: 'Health & Tech',
      date: 'Saved 3 days ago',
      type: 'video',
      color: '#FFD700'
    },
    {
      id: 4,
      title: 'JavaScript Performance Optimization Techniques',
      source: 'JavaScript Weekly',
      date: 'Saved 5 days ago',
      type: 'article',
      color: '#8A2BE2'
    }
  ];
  
  const collections = [
    { name: 'Articles to Read', count: 12, color: '#4267B2' },
    { name: 'Recipes', count: 8, color: '#FF5E3A' },
    { name: 'Travel Ideas', count: 15, color: '#FFD700' },
    { name: 'Tech Resources', count: 23, color: '#8A2BE2' }
  ];
  
  return (
    <div className="saved-page">
      <div className="saved-header">
        <h1>Saved Items</h1>
        <div className="saved-actions">
          <Button icon="search" minimal title="Search Saved Items" />
          <Button icon="plus" minimal title="Create Collection" />
          <Button icon="settings" minimal title="Settings" />
        </div>
      </div>
      
      <Tabs id="saved-tabs" className="saved-tabs">
        <Tab 
          id="all-items" 
          title="All Items" 
          panel={
            <div className="saved-items-grid">
              {savedItems.map(item => (
                <div key={item.id} className="saved-item-card">
                  <div className="saved-item-banner" style={{ backgroundColor: item.color }}>
                    <div className="saved-item-type">
                      <Icon icon={item.type === 'video' ? 'video' : 'document'} />
                    </div>
                  </div>
                  <div className="saved-item-info">
                    <h3 className="saved-item-title">{item.title}</h3>
                    <p className="saved-item-source">{item.source}</p>
                    <p className="saved-item-date">{item.date}</p>
                  </div>
                  <div className="saved-item-actions">
                    <Button icon="link" minimal title="Open Link" />
                    <Button icon="add-to-folder" minimal title="Add to Collection" />
                    <Button icon="more" minimal title="More Options" />
                  </div>
                </div>
              ))}
            </div>
          } 
        />
        <Tab 
          id="collections" 
          title="Collections" 
          panel={
            <div className="collections-grid">
              <div className="collection-card new-collection">
                <div className="collection-new-icon">
                  <Icon icon="plus" size={24} />
                </div>
                <h3 className="collection-title">Create New Collection</h3>
                <p className="collection-description">Organize your saved items into collections</p>
              </div>
              
              {collections.map((collection, index) => (
                <div key={index} className="collection-card">
                  <div className="collection-icon" style={{ backgroundColor: collection.color }}>
                    <Icon icon="folder-close" size={24} />
                  </div>
                  <h3 className="collection-title">{collection.name}</h3>
                  <p className="collection-count">{collection.count} items</p>
                </div>
              ))}
            </div>
          } 
        />
      </Tabs>
    </div>
  );
};

export default Saved; 
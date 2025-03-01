import React from 'react';
import { Button, Icon } from '@blueprintjs/core';
import './Memories.css';

const Memories = () => {
  const memories = [
    {
      id: 1,
      title: '5 Years Ago',
      description: 'Your trip to Paris',
      image: '#4267B2',
      date: 'May 15, 2019'
    },
    {
      id: 2,
      title: '3 Years Ago',
      description: 'Graduation day',
      image: '#FF5E3A',
      date: 'June 22, 2021'
    },
    {
      id: 3,
      title: '1 Year Ago',
      description: 'Your new job',
      image: '#FFD700',
      date: 'April 10, 2023'
    }
  ];
  
  return (
    <div className="memories-page">
      <div className="memories-header">
        <h1>Memories</h1>
        <p className="memories-subtitle">Look back on your memories and moments from the past.</p>
      </div>
      
      <div className="memories-grid">
        {memories.map(memory => (
          <div key={memory.id} className="memory-card">
            <div className="memory-image" style={{ backgroundColor: memory.image }}>
              <div className="memory-date">{memory.date}</div>
            </div>
            <div className="memory-content">
              <h3 className="memory-title">{memory.title}</h3>
              <p className="memory-description">{memory.description}</p>
              <div className="memory-actions">
                <Button icon="share" variant="minimal" text="Share" />
                <Button icon="more" variant="minimal" />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="memories-archive">
        <div className="archive-header">
          <h2>Archive</h2>
          <Button icon="calendar" text="Browse by Date" />
        </div>
        <div className="archive-placeholder">
          <Icon icon="history" size={64} />
          <p>Browse your memories by year and month</p>
        </div>
      </div>
    </div>
  );
};

export default Memories; 
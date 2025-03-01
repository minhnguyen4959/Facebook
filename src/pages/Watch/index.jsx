import React from 'react';
import { Button, Icon } from '@blueprintjs/core';
import './Watch.css';

const Watch = () => {
  const videos = [
    {
      id: 1,
      title: 'How to Build a Modern Web Application',
      channel: 'Tech Tutorials',
      channelColor: '#4267B2',
      views: '125K',
      time: '2 days ago',
      thumbnail: '#FF5E3A'
    },
    {
      id: 2,
      title: 'The Future of Artificial Intelligence',
      channel: 'Future Tech',
      channelColor: '#8A2BE2',
      views: '89K',
      time: '1 week ago',
      thumbnail: '#4267B2'
    },
    {
      id: 3,
      title: 'Travel Vlog: Exploring Japan',
      channel: 'Travel Adventures',
      channelColor: '#32CD32',
      views: '250K',
      time: '3 days ago',
      thumbnail: '#FFD700'
    },
    {
      id: 4,
      title: 'Cooking Tutorial: Easy Pasta Recipes',
      channel: 'Food & Cooking',
      channelColor: '#FF5E3A',
      views: '75K',
      time: '5 days ago',
      thumbnail: '#20B2AA'
    }
  ];
  
  const categories = [
    'For You', 'Live', 'Gaming', 'Music', 'Sports', 'News', 'Entertainment', 'Learning'
  ];
  
  return (
    <div className="watch-page">
      <div className="watch-header">
        <h1>Watch</h1>
        <div className="watch-actions">
          <Button icon="filter" variant="minimal" title="Search Videos" />
          <Button icon="settings" variant="minimal" title="Settings" />
        </div>
      </div>
      
      <div className="watch-categories">
        {categories.map((category, index) => (
          <Button 
            key={index} 
            className={`category-btn ${index === 0 ? 'active' : ''}`}
            text={category}
            {...(index !== 0 ? { variant: "minimal" } : {})}
          />
        ))}
      </div>
      
      <div className="videos-grid">
        {videos.map(video => (
          <div key={video.id} className="video-card">
            <div className="video-thumbnail" style={{ backgroundColor: video.thumbnail }}>
              <div className="video-duration">10:25</div>
            </div>
            <div className="video-info">
              <div className="video-channel-avatar" style={{ backgroundColor: video.channelColor }}></div>
              <div className="video-details">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-channel">{video.channel}</p>
                <p className="video-stats">{video.views} views • {video.time}</p>
              </div>
              <Button icon="more" variant="minimal" className="video-more-btn" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watch; 
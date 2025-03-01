import React from 'react';
import './Story.css';

const Story = ({ story }) => {
  return (
    <div className={`story-card ${story.viewed ? 'viewed' : ''}`}>
      <div className="story-image">
        <img src={story.image} alt={story.user.name} />
      </div>
      <div className="story-user">
        <div className="story-avatar">
          <img src={story.user.avatar} alt={story.user.name} />
        </div>
        <div className="story-username">{story.user.name}</div>
      </div>
    </div>
  );
};

export default Story; 
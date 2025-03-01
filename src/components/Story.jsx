import React from 'react';
import { useTheme } from '../hooks/useTheme.jsx';
import './Story.css';

const Story = ({ story, isCreateStory }) => {
  const { darkMode } = useTheme();
  
  return (
    <div className={`story ${darkMode ? 'dark-mode' : ''}`}>
      <div className="story-image">
        <img src={story.image} alt={story.user?.name || 'Create Story'} />
      </div>
      
      {isCreateStory ? (
        <>
          <div className="create-story-button">
            <div className="create-story-icon">+</div>
          </div>
          <div className="story-footer create-story-footer">
            <span>Tạo tin</span>
          </div>
        </>
      ) : (
        <>
          <div className="story-avatar">
            <img src={story.user.avatar} alt={story.user.name} />
          </div>
          <div className="story-footer">
            <span>{story.user.name}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Story; 
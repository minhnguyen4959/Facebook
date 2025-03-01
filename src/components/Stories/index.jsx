import React from 'react';
import { Button, Icon } from '@blueprintjs/core';
import './Stories.css';

const Stories = ({ currentUser }) => {
  const stories = [
    {
      id: 1,
      user: currentUser || {
        name: 'Your Story',
        avatar: null,
        avatarColor: '#1877F2'
      },
      image: null,
      isYourStory: true
    },
    {
      id: 2,
      user: {
        name: 'John Doe',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        avatarColor: '#4267B2'
      },
      image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    },
    {
      id: 3,
      user: {
        name: 'Emily Davis',
        avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
        avatarColor: '#FF5E3A'
      },
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80'
    },
    {
      id: 4,
      user: {
        name: 'Michael Brown',
        avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
        avatarColor: '#FFD700'
      },
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    },
    {
      id: 5,
      user: {
        name: 'Sarah Johnson',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        avatarColor: '#FF5E3A'
      },
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    },
    {
      id: 6,
      user: {
        name: 'David Wilson',
        avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
        avatarColor: '#20B2AA'
      },
      image: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80'
    },
    {
      id: 7,
      user: {
        name: 'Jessica Taylor',
        avatar: 'https://randomuser.me/api/portraits/women/56.jpg',
        avatarColor: '#8A2BE2'
      },
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    }
  ];
  
  // Cập nhật story đầu tiên với thông tin người dùng hiện tại
  if (currentUser) {
    stories[0].user = {
      ...currentUser,
      name: 'Your Story'
    };
  }
  
  return (
    <div className="stories">
      <div className="stories-container">
        {stories.map(story => (
          <div key={story.id} className="story-card">
            <div 
              className="story-background" 
              style={{ backgroundImage: story.image ? `url(${story.image})` : 'none' }}
            >
              <div className="story-overlay"></div>
              <div 
                className={`story-avatar ${story.isYourStory ? 'your-story' : ''}`}
                style={{ backgroundColor: story.user.avatarColor }}
              >
                {story.user.avatar ? (
                  <img src={story.user.avatar} alt={story.user.name} />
                ) : (
                  story.isYourStory && <Icon icon="plus" size={20} color="#fff" />
                )}
              </div>
              <div className="story-username">{story.user.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories; 
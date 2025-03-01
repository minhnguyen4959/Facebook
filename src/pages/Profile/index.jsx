import React from 'react';
import { Button, Icon } from '@blueprintjs/core';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-cover">
          <div className="profile-cover-bg" style={{ backgroundColor: '#1877F2' }}></div>
          <div className="profile-avatar-container">
            <div className="profile-avatar" style={{ backgroundColor: '#FFD700' }}></div>
            <Button icon="camera" className="change-avatar-btn" variant="minimal" />
          </div>
          <div className="profile-cover-actions">
            <Button icon="camera" text="Edit Cover Photo" />
          </div>
        </div>
        
        <div className="profile-info">
          <div className="profile-info-main">
            <h1 className="profile-name">Your Name</h1>
            <p className="profile-bio">Software Developer | Tech Enthusiast | Coffee Lover</p>
          </div>
          
          <div className="profile-actions">
            <Button icon="edit" variant="minimal" intent="primary" text="Edit Profile" />
            <Button icon="more" variant="minimal" />
          </div>
        </div>
        
        <div className="profile-nav">
          <div className="profile-nav-items">
            <Button className="profile-nav-item active" text="Posts" />
            <Button className="profile-nav-item" text="About" />
            <Button className="profile-nav-item" text="Friends" />
            <Button className="profile-nav-item" text="Photos" />
            <Button className="profile-nav-item" text="Videos" />
          </div>
        </div>
      </div>
      
      <div className="profile-content">
        <div className="profile-placeholder">
          <Icon icon="user" size={64} />
          <h2>Profile Content</h2>
          <p>This is a placeholder for the profile content.</p>
        </div>
      </div>
    </div>
  );
};

export default Profile; 
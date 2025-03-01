import React from 'react';
import { Card, Elevation, Button, Icon } from '@blueprintjs/core';
import './GroupsSection.css';

const GroupsSection = () => {
  return (
    <div className="groups-content">
      <div className="main-header">
        <h1>Groups</h1>
        <div className="header-actions">
          <Button icon="search" minimal className="search-btn" />
          <Button icon="plus" text="Create New Group" className="create-group-btn" />
        </div>
      </div>

      <div className="groups-tabs">
        <Button className="tab active" minimal>Your Groups</Button>
        <Button className="tab" minimal>Discover</Button>
        <Button className="tab" minimal>Your Feed</Button>
      </div>

      <div className="group-section">
        <div className="section-header">
          <h3>Groups You Manage</h3>
          <span className="see-all">See All</span>
        </div>
        
        <Card elevation={Elevation.TWO} className="group-item">
          <div className="group-image">
            <div className="media-block" style={{ backgroundColor: '#FF4500' }}></div>
            <div className="group-privacy">
              <Icon icon="lock" size={12} />
              <span>Private</span>
            </div>
          </div>
          <div className="group-info">
            <span className="group-name">AI Enthusiasts</span>
            <span className="group-stats">10K members · 5 new posts</span>
            <div className="group-activity">
              <Icon icon="chat" size={12} />
              <span>Very Active</span>
            </div>
          </div>
        </Card>

        <Card elevation={Elevation.TWO} className="group-item">
          <div className="group-image">
            <div className="media-block" style={{ backgroundColor: '#4682B4' }}></div>
            <div className="group-privacy">
              <Icon icon="globe" size={12} />
              <span>Public</span>
            </div>
          </div>
          <div className="group-info">
            <span className="group-name">Space Explorers</span>
            <span className="group-stats">8K members · 3 new posts</span>
            <div className="group-activity">
              <Icon icon="chat" size={12} />
              <span>Active Today</span>
            </div>
          </div>
        </Card>
      </div>

      <div className="group-section">
        <div className="section-header">
          <h3>Suggested For You</h3>
          <span className="see-all">See All</span>
        </div>

        <Card elevation={Elevation.TWO} className="group-item suggestion">
          <div className="group-image">
            <div className="media-block" style={{ backgroundColor: '#32CD32' }}></div>
            <div className="group-privacy">
              <Icon icon="globe" size={12} />
              <span>Public</span>
            </div>
          </div>
          <div className="group-info">
            <span className="group-name">Gamers Hub</span>
            <span className="group-stats">15K members</span>
            <div className="mutual-friends">
              <div className="friend-avatars">
                <div className="friend-avatar" style={{ backgroundColor: '#FFD700' }}></div>
                <div className="friend-avatar" style={{ backgroundColor: '#FF69B4' }}></div>
              </div>
              <span>5 friends are members</span>
            </div>
          </div>
          <Button intent="primary" text="Join Group" className="join-btn" />
        </Card>
      </div>
    </div>
  );
};

export default GroupsSection; 
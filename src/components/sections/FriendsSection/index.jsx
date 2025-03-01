import React from 'react';
import { Card, Elevation, Button } from '@blueprintjs/core';
import './FriendsSection.css';

const FriendsSection = () => {
  return (
    <div className="friends-content">
      <div className="main-header">
        <h1>Friends</h1>
        <Button className="find-friends-btn" text="Find Friends" />
      </div>

      <div className="friend-section">
        <div className="section-header">
          <h3>Friend Requests <span className="request-count">5</span></h3>
          <span className="see-all">See All</span>
        </div>
        
        <Card elevation={Elevation.TWO} className="friend-request">
          <div className="avatar" style={{ backgroundColor: '#FF69B4' }}></div>
          <div className="friend-info">
            <span className="username">Friend4</span>
            <span className="mutual-friends">2 mutual friends</span>
          </div>
          <div className="friend-actions">
            <Button intent="primary" text="Confirm" small className="confirm-btn" />
            <Button text="Delete" small className="delete-btn" />
          </div>
        </Card>

        <Card elevation={Elevation.TWO} className="friend-request">
          <div className="avatar" style={{ backgroundColor: '#00CED1' }}></div>
          <div className="friend-info">
            <span className="username">Friend5</span>
            <span className="mutual-friends">1 mutual friend</span>
          </div>
          <div className="friend-actions">
            <Button intent="primary" text="Confirm" small className="confirm-btn" />
            <Button text="Delete" small className="delete-btn" />
          </div>
        </Card>
      </div>

      <div className="friend-section">
        <div className="section-header">
          <h3>People You May Know</h3>
          <span className="see-all">See All</span>
        </div>
        
        <Card elevation={Elevation.TWO} className="friend-suggestion">
          <div className="avatar" style={{ backgroundColor: '#FF6347' }}></div>
          <div className="friend-info">
            <span className="username">Friend6</span>
            <span className="mutual-friends">3 mutual friends</span>
          </div>
          <Button intent="primary" text="Add Friend" small className="add-friend-btn" />
        </Card>
      </div>
    </div>
  );
};

export default FriendsSection; 
import React from 'react';
import { Button, Icon, Tabs, Tab } from '@blueprintjs/core';
import './Friends.css';

const Friends = () => {
  const friendRequests = [
    { name: 'Alex Johnson', mutualFriends: 5, color: '#4267B2' },
    { name: 'Sarah Williams', mutualFriends: 3, color: '#FF5E3A' },
    { name: 'Michael Brown', mutualFriends: 8, color: '#FFD700' }
  ];
  
  const friendSuggestions = [
    { name: 'Emily Davis', mutualFriends: 12, color: '#8A2BE2' },
    { name: 'David Wilson', mutualFriends: 7, color: '#32CD32' },
    { name: 'Jessica Taylor', mutualFriends: 4, color: '#20B2AA' },
    { name: 'Ryan Martinez', mutualFriends: 9, color: '#FF4500' }
  ];
  
  return (
    <div className="friends-page">
      <div className="friends-header">
        <h1>Friends</h1>
        <div className="friends-actions">
          <Button icon="search" variant="minimal" title="Search Friends" />
          <Button icon="filter" variant="minimal" title="Filter" />
        </div>
      </div>
      
      <Tabs id="friends-tabs" className="friends-tabs">
        <Tab 
          id="all-friends" 
          title="All Friends" 
          panel={
            <div className="friends-placeholder">
              <Icon icon="people" size={64} />
              <h2>Your Friends</h2>
              <p>Connect with friends and share your moments.</p>
            </div>
          } 
        />
        <Tab 
          id="requests" 
          title="Friend Requests" 
          panel={
            <div className="friend-requests">
              {friendRequests.map((request, index) => (
                <div key={index} className="friend-card">
                  <div className="friend-avatar" style={{ backgroundColor: request.color }}></div>
                  <div className="friend-info">
                    <h3 className="friend-name">{request.name}</h3>
                    <p className="mutual-friends">{request.mutualFriends} mutual friends</p>
                  </div>
                  <div className="friend-actions">
                    <Button intent="primary" text="Confirm" />
                    <Button variant="minimal" text="Delete" />
                  </div>
                </div>
              ))}
            </div>
          } 
        />
        <Tab 
          id="suggestions" 
          title="Suggestions" 
          panel={
            <div className="friend-suggestions">
              {friendSuggestions.map((suggestion, index) => (
                <div key={index} className="friend-card">
                  <div className="friend-avatar" style={{ backgroundColor: suggestion.color }}></div>
                  <div className="friend-info">
                    <h3 className="friend-name">{suggestion.name}</h3>
                    <p className="mutual-friends">{suggestion.mutualFriends} mutual friends</p>
                  </div>
                  <div className="friend-actions">
                    <Button intent="primary" text="Add Friend" />
                    <Button variant="minimal" text="Remove" />
                  </div>
                </div>
              ))}
            </div>
          } 
        />
      </Tabs>
    </div>
  );
};

export default Friends; 
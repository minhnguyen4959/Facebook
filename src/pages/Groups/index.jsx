import React from 'react';
import { Button, Icon, Tab, Tabs } from '@blueprintjs/core';
import './Groups.css';

const Groups = () => {
  const yourGroups = [
    { name: 'Web Developers', members: 12500, color: '#4267B2', isAdmin: true },
    { name: 'UI/UX Design', members: 8700, color: '#FF5E3A', isAdmin: false },
    { name: 'Tech News', members: 25000, color: '#FFD700', isAdmin: false },
    { name: 'Gaming Community', members: 45000, color: '#8A2BE2', isAdmin: false }
  ];
  
  const suggestedGroups = [
    { name: 'JavaScript Enthusiasts', members: 32000, color: '#32CD32' },
    { name: 'Mobile App Developers', members: 18500, color: '#20B2AA' },
    { name: 'Data Science Hub', members: 22000, color: '#9370DB' }
  ];
  
  return (
    <div className="groups-page">
      <div className="groups-header">
        <h1>Groups</h1>
        <div className="groups-actions">
          <Button icon="search" variant="minimal" title="Search Groups" />
          <Button icon="plus" intent="primary" text="Create Group" />
        </div>
      </div>
      
      <Tabs id="groups-tabs" className="groups-tabs">
        <Tab 
          id="your-groups" 
          title="Your Groups" 
          panel={
            <div className="groups-grid">
              {yourGroups.map((group, index) => (
                <div key={index} className="group-card">
                  <div className="group-banner" style={{ backgroundColor: group.color }}></div>
                  <div className="group-info">
                    <h3 className="group-name">{group.name}</h3>
                    <p className="group-members">{group.members.toLocaleString()} members</p>
                    {group.isAdmin && <span className="admin-badge">Admin</span>}
                  </div>
                  <div className="group-actions">
                    <Button icon="chat" variant="minimal" title="Group Chat" />
                    <Button icon="more" variant="minimal" title="More Options" />
                  </div>
                </div>
              ))}
            </div>
          } 
        />
        <Tab 
          id="discover" 
          title="Discover" 
          panel={
            <div className="groups-grid">
              {suggestedGroups.map((group, index) => (
                <div key={index} className="group-card">
                  <div className="group-banner" style={{ backgroundColor: group.color }}></div>
                  <div className="group-info">
                    <h3 className="group-name">{group.name}</h3>
                    <p className="group-members">{group.members.toLocaleString()} members</p>
                  </div>
                  <div className="group-actions">
                    <Button intent="primary" text="Join Group" />
                  </div>
                </div>
              ))}
            </div>
          } 
        />
        <Tab 
          id="create" 
          title="Create" 
          panel={
            <div className="create-group">
              <div className="create-group-placeholder">
                <Icon icon="group-objects" size={64} />
                <h2>Create a New Group</h2>
                <p>Connect with people who share your interests.</p>
                <Button intent="primary" icon="plus" text="Create Group" />
              </div>
            </div>
          } 
        />
      </Tabs>
    </div>
  );
};

export default Groups; 
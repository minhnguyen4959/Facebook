import React from 'react';
import { Button, Icon } from '@blueprintjs/core';
import './CreateRoom.css';

const CreateRoom = () => {
  const friends = [
    { name: 'Friend1', color: '#32CD32', online: true },
    { name: 'Friend2', color: '#FF69B4', online: true },
    { name: 'Friend3', color: '#4682B4', online: true },
  ];

  return (
    <div className="create-room">
      <Button 
        icon="video-camera" 
        text="Create Room" 
        className="create-room-btn"
      />
      <div className="online-friends">
        {friends.map((friend, index) => (
          <div key={index} className="friend-avatar">
            <div className="avatar" style={{ backgroundColor: friend.color }}></div>
            <div className="online-indicator"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateRoom; 
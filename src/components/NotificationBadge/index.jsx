import React from 'react';
import './NotificationBadge.css';

const NotificationBadge = ({ count, type = 'default' }) => {
  if (!count || count <= 0) return null;
  
  const displayCount = count > 99 ? '99+' : count;
  
  return (
    <div className={`notification-badge ${type}`}>
      {displayCount}
    </div>
  );
};

export default NotificationBadge; 
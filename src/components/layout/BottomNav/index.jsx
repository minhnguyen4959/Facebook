import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@blueprintjs/core';
import './BottomNav.css';

const BottomNav = () => {
  const navItems = [
    { path: '/', icon: 'home' },
    { path: '/friends', icon: 'people' },
    { path: '/watch', icon: 'video' },
    { path: '/marketplace', icon: 'shop' },
    { path: '/notifications', icon: 'notifications' }
  ];

  return (
    <div className="bottom-nav">
      {navItems.map((item, index) => (
        <NavLink 
          key={index} 
          to={item.path} 
          className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
        >
          <Icon icon={item.icon} size={24} />
        </NavLink>
      ))}
    </div>
  );
};

export default BottomNav; 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Menu, MenuItem, Popover, Position } from '@blueprintjs/core';
import { useTheme } from '../../../hooks/useTheme.jsx';
import './Header.css';

const Header = ({ currentUser }) => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Tìm kiếm:', searchQuery);
  };
  
  return (
    <header className={`header ${darkMode ? 'dark-mode' : ''}`}>
      <div className="header-left">
        <Link to="/" className="header-logo">
          <img src="/facebook-logo.svg" alt="Facebook" />
        </Link>
        
        <form className="header-search" onSubmit={handleSearchSubmit}>
          <Icon icon="search" />
          <input 
            type="text" 
            placeholder="Tìm kiếm trên Facebook" 
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </form>
      </div>
      
      <div className="header-center">
        <Link to="/" className="header-tab active">
          <Icon icon="home" size={20} />
        </Link>
        <Link to="/videos" className="header-tab">
          <Icon icon="video" size={20} />
        </Link>
        <Link to="/marketplace" className="header-tab">
          <Icon icon="shop" size={20} />
        </Link>
        <Link to="/groups" className="header-tab">
          <Icon icon="group-objects" size={20} />
        </Link>
        <Link to="/gaming" className="header-tab">
          <Icon icon="play" size={20} />
        </Link>
      </div>
      
      <div className="header-right">
        <Popover
          content={
            <Menu>
              <MenuItem icon="user" text="Trang cá nhân" />
              <MenuItem icon="settings" text="Cài đặt" />
              <MenuItem icon="help" text="Trợ giúp" />
              <MenuItem icon="moon" text={darkMode ? "Chế độ sáng" : "Chế độ tối"} onClick={toggleDarkMode} />
              <MenuItem icon="log-out" text="Đăng xuất" />
            </Menu>
          }
          position={Position.BOTTOM_RIGHT}
        >
          <Button className="header-profile" minimal={true}>
            <img src={currentUser.avatar} alt={currentUser.name} />
          </Button>
        </Popover>
        
        <Button className="header-icon-button" icon="plus" minimal={true} />
        <Button className="header-icon-button" icon="chat" minimal={true} />
        <Button className="header-icon-button" icon="notifications" minimal={true} />
      </div>
    </header>
  );
};

export default Header; 
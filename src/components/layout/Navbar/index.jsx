import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Icon, InputGroup, Popover, Menu, MenuItem } from '@blueprintjs/core';
import ThemeToggle from '../../ThemeToggle';
import './Navbar.css';

const Navbar = () => {
  const [searchFocused, setSearchFocused] = useState(false);
  
  const userMenu = (
    <Menu>
      <MenuItem icon="user" text="Your Profile" />
      <MenuItem icon="settings" text="Settings & Privacy" />
      <MenuItem icon="help" text="Help & Support" />
      <MenuItem icon="moon" text="Display & Accessibility" />
      <MenuItem icon="log-out" text="Log Out" />
    </Menu>
  );

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Link to="/" className="navbar__logo">
          <Icon icon="social-media" size={30} color="#1877F2" />
        </Link>
        <div className={`navbar__search ${searchFocused ? 'focused' : ''}`}>
          <Icon icon="search" />
          <InputGroup
            placeholder="Search Facebook"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="navbar__search-input"
          />
        </div>
      </div>

      <div className="navbar__center">
        <NavLink to="/" className="navbar__tab" activeClassName="active" exact>
          <Icon icon="home" size={24} />
        </NavLink>
        <NavLink to="/watch" className="navbar__tab" activeClassName="active">
          <Icon icon="video" size={24} />
        </NavLink>
        <NavLink to="/marketplace" className="navbar__tab" activeClassName="active">
          <Icon icon="shop" size={24} />
        </NavLink>
        <NavLink to="/groups" className="navbar__tab" activeClassName="active">
          <Icon icon="group-objects" size={24} />
        </NavLink>
        <NavLink to="/gaming" className="navbar__tab" activeClassName="active">
          <Icon icon="games" size={24} />
        </NavLink>
      </div>

      <div className="navbar__right">
        <div className="navbar__actions">
          <Button className="navbar__action-btn" icon="grid" minimal />
          <Button className="navbar__action-btn" icon="chat" minimal />
          <Button className="navbar__action-btn" icon="notifications" minimal />
          <Popover content={userMenu} position="bottom-right">
            <Button className="navbar__profile-btn">
              <div className="avatar" style={{ backgroundColor: '#FFD700' }}></div>
            </Button>
          </Popover>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar; 
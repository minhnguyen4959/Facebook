import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUserFriends, FaVideo, FaStore, FaUsers, FaGamepad, FaBell, FaCalendarAlt, FaCog, FaSearch, FaCompass } from 'react-icons/fa';
import {
  NavbarContainer,
  NavbarLeft,
  NavbarCenter,
  NavbarRight,
  Logo,
  SearchContainer,
  SearchInput,
  SearchIcon,
  NavLinks,
  NavLink,
  NavLinkActive,
  ProfileButton,
  ProfileImage,
  IconButton,
  IconButtonContainer,
  NotificationBadge
} from './styles';

const Navbar = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <NavbarContainer>
      <NavbarLeft>
        <Link to="/">
          <Logo>
            <img src="/logo.png" alt="Logo" />
          </Logo>
        </Link>
        
        <SearchContainer>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
          <SearchInput 
            placeholder="Tìm kiếm trên mạng xã hội" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
      </NavbarLeft>
      
      <NavbarCenter>
        <NavLinks>
          {isActive('/') ? (
            <NavLinkActive to="/">
              <FaHome />
            </NavLinkActive>
          ) : (
            <NavLink to="/">
              <FaHome />
            </NavLink>
          )}
          
          {isActive('/friends') ? (
            <NavLinkActive to="/friends">
              <FaUserFriends />
            </NavLinkActive>
          ) : (
            <NavLink to="/friends">
              <FaUserFriends />
            </NavLink>
          )}
          
          {isActive('/watch') ? (
            <NavLinkActive to="/watch">
              <FaVideo />
            </NavLinkActive>
          ) : (
            <NavLink to="/watch">
              <FaVideo />
            </NavLink>
          )}
          
          {isActive('/marketplace') ? (
            <NavLinkActive to="/marketplace">
              <FaStore />
            </NavLinkActive>
          ) : (
            <NavLink to="/marketplace">
              <FaStore />
            </NavLink>
          )}
          
          {isActive('/groups') ? (
            <NavLinkActive to="/groups">
              <FaUsers />
            </NavLinkActive>
          ) : (
            <NavLink to="/groups">
              <FaUsers />
            </NavLink>
          )}
          
          {isActive('/gaming') ? (
            <NavLinkActive to="/gaming">
              <FaGamepad />
            </NavLinkActive>
          ) : (
            <NavLink to="/gaming">
              <FaGamepad />
            </NavLink>
          )}
        </NavLinks>
      </NavbarCenter>
      
      <NavbarRight>
        <IconButtonContainer>
          <IconButton to="/explore">
            <FaCompass />
          </IconButton>
        </IconButtonContainer>
        
        <IconButtonContainer>
          <IconButton to="/notifications">
            <FaBell />
            <NotificationBadge>3</NotificationBadge>
          </IconButton>
        </IconButtonContainer>
        
        <IconButtonContainer>
          <IconButton to="/events">
            <FaCalendarAlt />
          </IconButton>
        </IconButtonContainer>
        
        <IconButtonContainer>
          <IconButton to="/settings">
            <FaCog />
          </IconButton>
        </IconButtonContainer>
        
        <ProfileButton to="/profile">
          <ProfileImage src="https://randomuser.me/api/portraits/men/1.jpg" alt="Profile" />
        </ProfileButton>
      </NavbarRight>
    </NavbarContainer>
  );
};

export default Navbar; 
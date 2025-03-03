import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaSearch, FaHome, FaUserFriends, FaVideo, FaStore, FaGamepad, FaBell, FaCaretDown, FaUserCircle, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../../../context/ThemeContext';
import {
  NavbarContainer,
  NavbarLeft,
  FacebookLogo,
  SearchContainer,
  SearchIcon,
  SearchInput,
  NavbarCenter,
  TabButton,
  NavbarRight,
  IconButton,
  ProfileButton
} from './styles';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme.name === 'dark';

  return (
    <NavbarContainer>
      <NavbarLeft>
        <FacebookLogo to="/">
          <FaFacebook />
        </FacebookLogo>
        <SearchContainer>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
          <SearchInput placeholder="Tìm kiếm trên Facebook" />
        </SearchContainer>
      </NavbarLeft>
      
      <NavbarCenter>
        <TabButton to="/" active={true}>
          <FaHome />
        </TabButton>
        <TabButton to="/friends">
          <FaUserFriends />
        </TabButton>
        <TabButton to="/watch">
          <FaVideo />
        </TabButton>
        <TabButton to="/marketplace">
          <FaStore />
        </TabButton>
        <TabButton to="/gaming">
          <FaGamepad />
        </TabButton>
      </NavbarCenter>
      
      <NavbarRight>
        <ProfileButton>
          <FaUserCircle />
        </ProfileButton>
        <IconButton onClick={toggleTheme}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </IconButton>
        <IconButton>
          <FaBell />
        </IconButton>
        <IconButton>
          <FaCaretDown />
        </IconButton>
      </NavbarRight>
    </NavbarContainer>
  );
};

export default Navbar; 
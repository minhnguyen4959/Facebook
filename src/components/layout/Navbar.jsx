import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebook, FaSearch, FaHome, FaUserFriends, FaVideo, FaStore, FaGamepad, FaBell, FaCaretDown, FaUserCircle, FaComments, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const NavbarContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.navbar.background};
  box-shadow: ${({ theme }) => theme.colors.navbar.shadow};
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
`;

const FacebookLogo = styled(Link)`
  color: #1877f2;
  font-size: 40px;
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const SearchContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.input.background};
  border-radius: 50px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 40px;
  margin-left: 8px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchIcon = styled.div`
  color: ${({ theme }) => theme.colors.icon};
  margin-right: 8px;
`;

const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  font-size: 15px;
  outline: none;
  width: 240px;
  color: ${({ theme }) => theme.colors.text.primary};
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

const NavbarCenter = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  
  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`;

const TabButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  min-width: 110px;
  border-radius: 8px;
  color: ${props => props.active ? props.theme.colors.navbar.activeTab : props.theme.colors.navbar.inactiveTab};
  border-bottom: ${props => props.active ? `3px solid ${props.theme.colors.navbar.activeTab}` : 'none'};
  text-decoration: none;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
  
  svg {
    font-size: 24px;
  }
  
  @media (max-width: 1100px) {
    min-width: 70px;
  }
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
`;

const IconButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.input.background};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.primary};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
  
  svg {
    font-size: 20px;
  }
`;

const ProfileButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  cursor: pointer;
  overflow: hidden;
  
  svg {
    font-size: 40px;
    color: ${({ theme }) => theme.colors.icon};
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NotificationBadge = styled.div`
  position: relative;
  
  &::after {
    content: '1';
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: #e41e3f;
    color: white;
    font-size: 12px;
    font-weight: bold;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  
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
        <NotificationBadge>
          <IconButton>
            <FaComments />
          </IconButton>
        </NotificationBadge>
        <IconButton>
          <FaBell />
        </IconButton>
        <IconButton onClick={toggleTheme}>
          {theme.name === 'dark' ? <FaSun /> : <FaMoon />}
        </IconButton>
        <IconButton>
          <FaCaretDown />
        </IconButton>
      </NavbarRight>
    </NavbarContainer>
  );
};

export default Navbar;

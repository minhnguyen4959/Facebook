import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.navbar.background};
  box-shadow: ${({ theme }) => theme.colors.navbar.shadow};
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  position: sticky;
  top: 0;
  z-index: 100;
  transition: background-color ${({ theme }) => theme.transitions.normal} ease;
`;

export const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const FacebookLogo = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 40px;
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const SearchContainer = styled.div`
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

export const SearchIcon = styled.div`
  color: ${({ theme }) => theme.colors.icon};
  margin-right: 8px;
`;

export const SearchInput = styled.input`
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

export const NavbarCenter = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  
  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`;

export const TabButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  min-width: 110px;
  border-radius: 8px;
  color: ${props => props.active 
    ? props.theme.colors.navbar.activeTab 
    : props.theme.colors.navbar.inactiveTab};
  border-bottom: ${props => props.active 
    ? `3px solid ${props.theme.colors.navbar.activeTab}` 
    : 'none'};
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

export const NavbarRight = styled.div`
  display: flex;
  align-items: center;
`;

export const IconButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.input.background};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
  
  svg {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const ProfileButton = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 18px;
  margin-left: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
  
  svg {
    font-size: 28px;
    color: ${({ theme }) => theme.colors.icon};
  }
`; 
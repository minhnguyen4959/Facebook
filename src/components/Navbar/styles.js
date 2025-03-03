import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.card.background};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Logo = styled.div`
  width: 40px;
  height: 40px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 240px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 8px 12px 8px 36px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  border: none;
  background-color: ${({ theme }) => theme.colors.input.background};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 14px;
  
  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.input.backgroundFocus};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 14px;
`;

export const NavbarCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 22px;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
`;

export const NavLinkActive = styled(NavLink)`
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    right: 0;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const IconButtonContainer = styled.div`
  position: relative;
`;

export const IconButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.input.background};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 18px;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
`;

export const NotificationBadge = styled.div`
  position: absolute;
  top: -2px;
  right: -2px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.error};
  color: white;
  font-size: 11px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.colors.card.background};
`;

export const ProfileButton = styled(Link)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  
  &:hover {
    opacity: 0.9;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  margin-left: 8px;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.card.background};
  z-index: 2000;
  padding: 16px;
  overflow-y: auto;
`;

export const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const MobileMenuTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const MobileMenuClose = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
`;

export const MobileMenuItem = styled.div`
  padding: 12px 0;
  
  a {
    display: flex;
    align-items: center;
    color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.text.primary};
    font-weight: ${({ active }) => active ? '600' : '500'};
    
    svg {
      font-size: 24px;
      margin-right: 12px;
    }
  }
`;

export const MobileMenuDivider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.divider};
  margin: 8px 0;
`; 
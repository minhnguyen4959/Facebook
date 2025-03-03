import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 360px;
  flex-shrink: 0;
  padding: 16px;
  height: calc(100vh - 60px);
  overflow-y: auto;
  position: sticky;
  top: 60px;
  
  @media (max-width: 1200px) {
    width: 280px;
  }
  
  @media (max-width: 992px) {
    width: 80px;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.divider};
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const SidebarList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${({ active }) => active ? '600' : '500'};
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.text.primary};
  background-color: ${({ active, theme }) => active ? theme.colors.hover.background : 'transparent'};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
  
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 12px;
    
    @media (max-width: 992px) {
      margin-right: 0;
    }
  }
  
  @media (max-width: 992px) {
    justify-content: center;
    padding: 12px 8px;
  }
`;

export const SidebarIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.input.background};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  color: ${({ theme }) => theme.colors.primary};
  
  svg {
    font-size: 20px;
  }
  
  &.more {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3px;
    
    span {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.text.primary};
    }
  }
  
  @media (max-width: 992px) {
    margin-right: 0;
  }
`;

export const SidebarText = styled.div`
  font-size: 15px;
  
  @media (max-width: 992px) {
    display: none;
  }
`;

export const SidebarDivider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.divider};
  margin: 8px 0;
`;

export const SidebarTitle = styled.h3`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 16px 0 8px;
  
  @media (max-width: 992px) {
    display: none;
  }
`;

export const SidebarShortcut = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
  
  @media (max-width: 992px) {
    display: none;
  }
`;

export const SidebarShortcutIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 12px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SidebarShortcutText = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const SidebarFooter = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.tertiary};
  margin-top: 16px;
  padding: 0 8px;
  line-height: 1.6;
  
  @media (max-width: 992px) {
    display: none;
  }
`;

export const SidebarFooterLink = styled.a`
  color: ${({ theme }) => theme.colors.text.tertiary};
  margin: 0 2px;
  
  &:hover {
    text-decoration: underline;
  }
`; 
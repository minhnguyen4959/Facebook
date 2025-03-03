import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 280px;
  padding: 16px 8px;
  overflow-y: auto;
  max-height: calc(100vh - 60px);
  position: sticky;
  top: 60px;
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.divider};
    border-radius: 4px;
  }
  
  @media (max-width: 1100px) {
    width: 70px;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.primary};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
  
  @media (max-width: 1100px) {
    justify-content: center;
  }
`;

export const SidebarIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  color: ${({ theme }) => theme.colors.primary};
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
  
  svg {
    font-size: 24px;
  }
  
  @media (max-width: 1100px) {
    margin-right: 0;
  }
`;

export const SidebarText = styled.div`
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const SidebarDivider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.divider};
  margin: 8px 0;
`;

export const SidebarTitle = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.secondary};
  padding: 8px;
  margin-top: 8px;
  
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const SeeMoreButton = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.primary};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
  
  @media (max-width: 1100px) {
    justify-content: center;
  }
`;

export const SeeMoreIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.input.background};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  color: ${({ theme }) => theme.colors.text.primary};
  
  svg {
    font-size: 16px;
  }
  
  @media (max-width: 1100px) {
    margin-right: 0;
  }
`;

export const SeeMoreText = styled.div`
  font-size: 15px;
  font-weight: 500;
  
  @media (max-width: 1100px) {
    display: none;
  }
`; 
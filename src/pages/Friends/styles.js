import styled from 'styled-components';

export const FriendsContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
  gap: 16px;
`;

export const FriendsLeftSidebar = styled.div`
  width: 360px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 8px 0;
  height: fit-content;
  position: sticky;
  top: 76px;
  
  @media (max-width: 992px) {
    width: 280px;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 15px;
  font-weight: ${({ active }) => active ? '600' : '500'};
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.text.primary};
  background-color: ${({ active, theme }) => active ? theme.colors.hover.background : 'transparent'};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
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
`;

export const SidebarText = styled.div`
  font-size: 15px;
  flex: 1;
`;

export const SidebarBadge = styled.div`
  background-color: ${({ theme }) => theme.colors.error};
  color: white;
  font-size: 12px;
  font-weight: 600;
  min-width: 18px;
  height: 18px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
`;

export const FriendsContent = styled.div`
  flex: 1;
  overflow: hidden;
`;

export const FriendsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const FriendsTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.input.background};
  border-radius: 20px;
  padding: 0 12px;
  width: 300px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchIcon = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-right: 8px;
`;

export const SearchInput = styled.input`
  flex: 1;
  height: 36px;
  border: none;
  background: transparent;
  font-size: 15px;
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const FriendsTabs = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  margin-bottom: 16px;
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const FriendsTab = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  font-size: 15px;
  font-weight: ${({ active }) => active ? '600' : '500'};
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.text.primary};
  border-bottom: ${({ active, theme }) => active ? `3px solid ${theme.colors.primary}` : '3px solid transparent'};
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
`;

export const FriendsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FriendCard = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const FriendAvatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 16px;
  
  @media (max-width: 576px) {
    margin-right: 0;
  }
`;

export const FriendInfo = styled.div`
  flex: 1;
`;

export const FriendName = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 4px;
`;

export const FriendMutual = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 4px;
`;

export const FriendActions = styled.div`
  display: flex;
  gap: 8px;
  
  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const FriendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  background-color: ${({ primary, theme }) => primary ? theme.colors.primary : theme.colors.input.background};
  color: ${({ primary }) => primary ? 'white' : 'inherit'};
  border: none;
  
  svg {
    font-size: 16px;
  }
  
  &:hover {
    background-color: ${({ primary, theme }) => primary ? theme.colors.hover.primaryButton : theme.colors.hover.background};
  }
  
  @media (max-width: 576px) {
    flex: 1;
  }
`;

export const FriendGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  
  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const SuggestionCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const SuggestionAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 12px;
`;

export const SuggestionInfo = styled.div`
  margin-bottom: 16px;
`;

export const SuggestionName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 4px;
`;

export const SuggestionMutual = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const SuggestionActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const SuggestionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  background-color: ${({ primary, theme }) => primary ? theme.colors.primary : theme.colors.input.background};
  color: ${({ primary }) => primary ? 'white' : 'inherit'};
  border: none;
  width: 100%;
  
  svg {
    font-size: 16px;
  }
  
  &:hover {
    background-color: ${({ primary, theme }) => primary ? theme.colors.hover.primaryButton : theme.colors.hover.background};
  }
`; 
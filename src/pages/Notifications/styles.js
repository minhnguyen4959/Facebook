import styled from 'styled-components';

export const NotificationsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
`;

export const NotificationsHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 24px;
  margin-bottom: 24px;
`;

export const NotificationsTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
  
  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

export const NotificationsDescription = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 24px;
  
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  max-width: 600px;
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px 12px 48px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ theme }) => theme.colors.input.background};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 15px;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}40;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const NotificationsContent = styled.div`
  display: flex;
  gap: 24px;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const NotificationsLeftSidebar = styled.div`
  width: 280px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const CategoryList = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  overflow: hidden;
`;

export const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  background-color: ${({ active, theme }) => active ? theme.colors.hover.background : 'transparent'};
  border-left: 3px solid ${({ active, theme }) => active ? theme.colors.primary : 'transparent'};
  position: relative;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
`;

export const CategoryIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ active, theme }) => active ? `${theme.colors.primary}20` : theme.colors.input.background};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.text.secondary};
  
  svg {
    font-size: 18px;
  }
`;

export const CategoryText = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
  flex: 1;
`;

export const NotificationBadge = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 12px;
  font-weight: 600;
  min-width: 20px;
  height: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
`;

export const FilterSection = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 20px;
`;

export const FilterTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const FilterOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FilterOption = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  input {
    cursor: pointer;
  }
  
  label {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text.primary};
    cursor: pointer;
  }
`;

export const NotificationsMainContent = styled.div`
  flex: 1;
`;

export const MarkAllButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.input.background};
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 16px;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
  
  svg {
    color: ${({ theme }) => theme.colors.success};
    font-size: 16px;
  }
`;

export const NotificationsList = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  overflow: hidden;
`;

export const NotificationItem = styled.div`
  display: flex;
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  position: relative;
  background-color: ${({ isRead, theme }) => isRead ? 'transparent' : `${theme.colors.primary}08`};
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background-color: ${({ isRead, theme }) => isRead ? 'transparent' : theme.colors.primary};
  }
`;

export const NotificationAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 16px;
  flex-shrink: 0;
`;

export const NotificationContent = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
`;

export const NotificationInfo = styled.div`
  flex: 1;
  
  .notification-content {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-top: 4px;
    font-style: italic;
  }
`;

export const NotificationText = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.4;
`;

export const NotificationDate = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-top: 4px;
`;

export const NotificationStatus = styled.div`
  margin-left: 12px;
  margin-right: 12px;
`;

export const NotificationIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ type, theme }) => {
    switch (type) {
      case 'friend_request':
      case 'friend_accepted':
        return `${theme.colors.success}20`;
      case 'like':
        return `${theme.colors.error}20`;
      case 'comment':
        return `${theme.colors.info}20`;
      case 'share':
        return `${theme.colors.secondary}20`;
      case 'birthday':
      case 'event':
        return `${theme.colors.warning}20`;
      case 'mention':
        return `${theme.colors.primary}20`;
      default:
        return theme.colors.input.background;
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ type, theme }) => {
    switch (type) {
      case 'friend_request':
      case 'friend_accepted':
        return theme.colors.success;
      case 'like':
        return theme.colors.error;
      case 'comment':
        return theme.colors.info;
      case 'share':
        return theme.colors.secondary;
      case 'birthday':
      case 'event':
        return theme.colors.warning;
      case 'mention':
        return theme.colors.primary;
      default:
        return theme.colors.text.secondary;
    }
  }};
  
  svg {
    font-size: 16px;
  }
`;

export const NotificationActions = styled.div`
  position: relative;
`;

export const NotificationAction = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.input.background};
  }
  
  svg {
    font-size: 16px;
  }
`;

export const NotificationDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 10;
  min-width: 200px;
`;

export const DropdownContent = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-top: 8px;
`;

export const DropdownItem = styled.div`
  padding: 12px 16px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.primary};
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
  
  svg {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 16px;
  }
  
  &:last-child {
    color: ${({ theme }) => theme.colors.error};
    
    svg {
      color: ${({ theme }) => theme.colors.error};
    }
  }
`;

export const NotificationEmpty = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 40px 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EmptyIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.input.background};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.text.secondary};
  
  svg {
    font-size: 32px;
  }
`;

export const EmptyText = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
`;

export const EmptyDescription = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 400px;
  margin: 0 auto 24px;
`;

export const NotificationButton = styled.button`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.primaryButton};
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  gap: 16px;
`;

export const PageButton = styled.button`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.input.background};
  color: ${({ theme, disabled }) => disabled ? theme.colors.text.secondary : theme.colors.text.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 14px;
  font-weight: 500;
  cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
  opacity: ${({ disabled }) => disabled ? 0.6 : 1};
  
  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
`;

export const PageInfo = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
`; 
import styled from 'styled-components';

export const ActivityContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
`;

export const ActivityHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 24px;
  margin-bottom: 24px;
`;

export const ActivityTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
  
  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

export const ActivityDescription = styled.div`
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

export const ActivityContent = styled.div`
  display: flex;
  gap: 24px;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const ActivityLeftSidebar = styled.div`
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
  margin-bottom: 20px;
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

export const DateFilter = styled.div`
  margin-bottom: 16px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const DateFilterLabel = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const DateFilterInput = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.input.background};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ActivityMainContent = styled.div`
  flex: 1;
`;

export const ActivityList = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  overflow: hidden;
`;

export const ActivityItem = styled.div`
  display: flex;
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  position: relative;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
`;

export const ActivityIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ type, theme }) => {
    switch (type) {
      case 'post':
        return `${theme.colors.primary}20`;
      case 'like':
        return `${theme.colors.error}20`;
      case 'comment':
        return `${theme.colors.info}20`;
      case 'friend':
        return `${theme.colors.success}20`;
      case 'photo':
      case 'video':
        return `${theme.colors.warning}20`;
      case 'share':
        return `${theme.colors.secondary}20`;
      default:
        return theme.colors.input.background;
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  color: ${({ type, theme }) => {
    switch (type) {
      case 'post':
        return theme.colors.primary;
      case 'like':
        return theme.colors.error;
      case 'comment':
        return theme.colors.info;
      case 'friend':
        return theme.colors.success;
      case 'photo':
      case 'video':
        return theme.colors.warning;
      case 'share':
        return theme.colors.secondary;
      default:
        return theme.colors.text.secondary;
    }
  }};
  flex-shrink: 0;
  
  svg {
    font-size: 20px;
  }
`;

export const ActivityInfo = styled.div`
  flex: 1;
  
  .activity-content {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-top: 4px;
    font-style: italic;
  }
`;

export const ActivityText = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.primary};
  
  .privacy-icon {
    display: inline-flex;
    margin-left: 8px;
    color: ${({ theme }) => theme.colors.text.secondary};
    
    svg {
      font-size: 14px;
    }
  }
`;

export const ActivityDate = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-top: 4px;
`;

export const ActivityActions = styled.div`
  position: relative;
`;

export const ActivityAction = styled.button`
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

export const ActivityDropdown = styled.div`
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

export const ActivityEmpty = styled.div`
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

export const ActivityButton = styled.button`
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
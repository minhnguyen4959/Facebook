import styled from 'styled-components';

export const SavedContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
  gap: 16px;
`;

export const SavedLeftSidebar = styled.div`
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
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  color: ${({ theme }) => theme.colors.primary};
  overflow: hidden;
  
  svg {
    font-size: 20px;
  }
`;

export const SidebarText = styled.div`
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SidebarDivider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.divider};
  margin: 8px 16px;
`;

export const SidebarTitle = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  padding: 8px 16px;
  margin-top: 8px;
`;

export const SavedContent = styled.div`
  flex: 1;
  overflow: hidden;
`;

export const SavedHeader = styled.div`
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

export const SavedTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
`;

export const SavedSubtitle = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.secondary};
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

export const FilterContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  overflow-x: auto;
  padding-bottom: 8px;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.divider};
    border-radius: 4px;
  }
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background-color: ${({ active, theme }) => 
    active ? theme.colors.primary : theme.colors.card.background};
  color: ${({ active, theme }) => 
    active ? 'white' : theme.colors.text.primary};
  border: 1px solid ${({ active, theme }) => 
    active ? theme.colors.primary : theme.colors.divider};
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
  
  &:hover {
    background-color: ${({ active, theme }) => 
      active ? theme.colors.hover.primaryButton : theme.colors.hover.background};
  }
`;

export const FilterIcon = styled.div`
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

export const FilterText = styled.div``;

export const SavedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const SavedCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
`;

export const SavedCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  
  svg {
    color: ${({ theme }) => theme.colors.text.secondary};
    cursor: pointer;
    font-size: 16px;
  }
`;

export const SavedCardTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 4px;
`;

export const SavedCardDate = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const SavedCardImage = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
`;

export const SavedCardContent = styled.div`
  padding: 16px;
`;

export const SavedCardText = styled.div`
  font-size: 15px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SavedCardActions = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
  padding-top: 12px;
`;

export const SavedCardAction = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.text.primary};
  cursor: pointer;
  font-size: 14px;
  padding: 8px;
  flex: 1;
  justify-content: center;
  
  svg {
    font-size: 18px;
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }
`;

export const SavedCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
  font-size: 14px;
`;

export const SavedCardSource = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
`;

export const SavedCardCategory = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const CollectionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
  
  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CollectionCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 16px;
  cursor: pointer;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

export const CollectionIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.input.background};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.primary};
  
  svg {
    font-size: 24px;
  }
`;

export const CollectionTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 4px;
`;

export const CollectionCount = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const NoSavedContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 16px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  margin-bottom: 24px;
`;

export const NoSavedIcon = styled.div`
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

export const NoSavedTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
`;

export const NoSavedText = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 500px;
  line-height: 1.4;
`; 
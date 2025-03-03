import styled from 'styled-components';

export const MemoriesContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
  gap: 16px;
`;

export const MemoriesLeftSidebar = styled.div`
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

export const MemoriesContent = styled.div`
  flex: 1;
  overflow: hidden;
`;

export const MemoriesHeader = styled.div`
  margin-bottom: 24px;
`;

export const MemoriesTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
`;

export const MemoriesSubtitle = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const MemoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const MemoryCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
`;

export const MemoryHeader = styled.div`
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

export const MemoryTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 4px;
`;

export const MemoryDate = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const MemoryImage = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
`;

export const MemoryContent = styled.div`
  padding: 16px;
`;

export const MemoryText = styled.div`
  font-size: 15px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 16px;
`;

export const MemoryActions = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
  padding-top: 12px;
`;

export const MemoryAction = styled.button`
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

export const OnThisDayCard = styled(MemoryCard)``;
export const OnThisDayHeader = styled(MemoryHeader)``;
export const OnThisDayTitle = styled(MemoryTitle)``;
export const OnThisDayDate = styled(MemoryDate)``;
export const OnThisDayImage = styled(MemoryImage)``;
export const OnThisDayContent = styled(MemoryContent)``;
export const OnThisDayText = styled(MemoryText)``;
export const OnThisDayActions = styled(MemoryActions)``;
export const OnThisDayAction = styled(MemoryAction)``;

export const MemoryCollection = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  margin-bottom: 16px;
  padding: 16px;
`;

export const CollectionTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 4px;
`;

export const CollectionDate = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 16px;
`;

export const CollectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  
  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CollectionItem = styled.div`
  aspect-ratio: 1;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
`;

export const CollectionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const YearInReviewCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  margin-bottom: 24px;
`;

export const YearInReviewHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
`;

export const YearInReviewTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const YearInReviewContent = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const YearInReviewImage = styled.img`
  width: 100%;
  max-width: 400px;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: 16px;
`;

export const YearInReviewText = styled.div`
  font-size: 15px;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 16px;
  max-width: 500px;
`;

export const YearInReviewButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 8px 16px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.primaryButton};
  }
`; 
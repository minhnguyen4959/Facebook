import styled from 'styled-components';

export const ExploreContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
`;

export const ExploreHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 24px;
  margin-bottom: 24px;
`;

export const ExploreTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
  
  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

export const ExploreDescription = styled.div`
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

export const ExploreContent = styled.div`
  display: flex;
  gap: 24px;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const ExploreLeftSidebar = styled.div`
  width: 280px;
  flex-shrink: 0;
  
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

export const ExploreMainContent = styled.div`
  flex: 1;
`;

export const TrendingSection = styled.div`
  margin-bottom: 32px;
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 16px;
`;

export const TrendingList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
`;

export const TrendingItem = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 16px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.colors.card.hoverShadow};
  }
`;

export const TrendingInfo = styled.div``;

export const TrendingTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
`;

export const TrendingMeta = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 12px;
`;

export const TrendingTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const TrendingTag = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => `${theme.colors.primary}10`};
  padding: 4px 8px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

export const FilterBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 12px;
`;

export const FilterButton = styled.button`
  padding: 8px 16px;
  background-color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.input.background};
  color: ${({ active }) => active ? 'white' : 'inherit'};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.hover.background};
  }
`;

export const ActiveFilterButton = styled(FilterButton)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.primaryButton};
  }
`;

export const LocationFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.input.background};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  margin-left: auto;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
  
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const LocationIcon = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 14px;
`;

export const LocationText = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 32px;
`;

export const ContentCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.colors.card.hoverShadow};
  }
`;

export const CardImage = styled.div`
  height: 180px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.4), transparent);
  }
  
  .duration {
    position: absolute;
    bottom: 8px;
    right: 8px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
  }
`;

export const CardContent = styled.div`
  padding: 16px;
  
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 12px;
  }
  
  .tag {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => `${theme.colors.primary}10`};
    padding: 4px 8px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
  }
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
  line-height: 1.4;
`;

export const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  
  .time {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const CardAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  span {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const CardStats = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 12px;
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text.secondary};
  
  svg {
    font-size: 14px;
  }
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
  padding-top: 12px;
`;

export const CardAction = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background: none;
  border: none;
  padding: 6px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  svg {
    font-size: 14px;
    
    &.liked {
      color: ${({ theme }) => theme.colors.error};
    }
  }
`;

export const HashtagCloud = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 32px;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 24px;
`;

export const HashtagItem = styled.div`
  font-size: ${({ popularity }) => 14 + popularity * 2}px;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => `${theme.colors.primary}10`};
  padding: 6px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  transition: transform 0.2s;
  display: flex;
  align-items: center;
  gap: 6px;
  
  &:hover {
    transform: scale(1.05);
    background-color: ${({ theme }) => `${theme.colors.primary}20`};
  }
  
  .count {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-weight: 500;
  }
`;

export const LoadMoreButton = styled.button`
  display: block;
  margin: 0 auto 32px;
  padding: 10px 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.primaryButton};
  }
`;

export const ExploreEmpty = styled.div`
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

export const ExploreButton = styled.button`
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
import styled from 'styled-components';

export const DatingContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
  gap: 16px;
`;

export const DatingLeftSidebar = styled.div`
  width: 300px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 8px 0;
  height: fit-content;
  position: sticky;
  top: 76px;
  
  @media (max-width: 992px) {
    width: 250px;
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
  margin-bottom: 8px;
`;

export const DatingContent = styled.div`
  flex: 1;
  overflow: hidden;
`;

export const DatingHeader = styled.div`
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

export const DatingTitle = styled.h1`
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

export const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.input.background};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
  
  svg {
    font-size: 16px;
  }
  
  @media (max-width: 576px) {
    width: 100%;
    justify-content: center;
  }
`;

export const FilterItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 150px;
  
  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const FilterLabel = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const FilterSelect = styled.select`
  height: 36px;
  padding: 0 8px;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.input.background};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 15px;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ProfilesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

export const ProfileCard = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  overflow: hidden;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
  }
`;

export const ProfileInfo = styled.div`
  flex: 1;
  padding: 16px;
`;

export const ProfileName = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 4px;
`;

export const ProfileLocation = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 12px;
`;

export const ProfileBio = styled.div`
  font-size: 15px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 12px;
  
  @media (max-width: 576px) {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const ProfileStats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const ProfileStat = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  display: flex;
  align-items: center;
  gap: 4px;
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ProfileActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  justify-content: center;
  min-width: 140px;
  
  @media (max-width: 768px) {
    flex-direction: row;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const ProfileButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  background-color: ${({ primary, active, theme }) => 
    primary ? theme.colors.primary : 
    active ? theme.colors.hover.primaryButton : 
    theme.colors.input.background};
  color: ${({ primary, active }) => 
    primary || active ? 'white' : 'inherit'};
  border: none;
  
  svg {
    font-size: 18px;
    color: ${({ primary, active }) => 
      primary || active ? 'white' : 'inherit'};
  }
  
  &:hover {
    background-color: ${({ primary, theme }) => 
      primary ? theme.colors.hover.primaryButton : theme.colors.hover.background};
  }
`;

export const DiscoverSection = styled.div`
  margin-bottom: 24px;
`;

export const DiscoverTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 16px;
`;

export const DiscoverGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const DiscoverCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  overflow: hidden;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

export const DiscoverImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const DiscoverInfo = styled.div`
  padding: 16px;
`;

export const DiscoverName = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 4px;
`;

export const DiscoverLocation = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
`;

export const DiscoverMatch = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  display: flex;
  align-items: center;
  gap: 4px;
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const DiscoverActions = styled.div`
  display: flex;
  gap: 8px;
  padding: 0 16px 16px;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const DiscoverButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  background-color: ${({ primary, active, theme }) => 
    primary ? theme.colors.primary : 
    active ? theme.colors.hover.primaryButton : 
    theme.colors.input.background};
  color: ${({ primary, active }) => 
    primary || active ? 'white' : 'inherit'};
  border: none;
  flex: 1;
  
  svg {
    font-size: 18px;
    color: ${({ primary, active }) => 
      primary || active ? 'white' : 'inherit'};
  }
  
  &:hover {
    background-color: ${({ primary, theme }) => 
      primary ? theme.colors.hover.primaryButton : theme.colors.hover.background};
  }
`;

export const MatchesContainer = styled.div`
  margin-top: 24px;
`;

export const MatchesTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 16px;
`;

export const MatchesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MatchItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
  background-color: ${({ unread, theme }) => 
    unread ? `${theme.colors.hover.background}50` : 'transparent'};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
`;

export const MatchAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
  object-fit: cover;
`;

export const MatchInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const MatchName = styled.div`
  font-size: 15px;
  font-weight: ${({ unread }) => unread ? '600' : '500'};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 2px;
`;

export const MatchLastMessage = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text.secondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MatchTime = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.secondary};
  white-space: nowrap;
  margin-left: 8px;
`;

export const ProfileDetailContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  overflow: hidden;
  margin-bottom: 24px;
`;

export const ProfileDetailHeader = styled.div`
  display: flex;
  padding: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const ProfileDetailImages = styled.div`
  width: 300px;
  flex-shrink: 0;
  margin-right: 24px;
  
  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`;

export const ProfileDetailImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

export const ProfileDetailInfo = styled.div`
  flex: 1;
`;

export const ProfileDetailName = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
`;

export const ProfileDetailLocation = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text.secondary};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 16px;
`;

export const ProfileDetailBio = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 16px;
`;

export const ProfileDetailStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
`;

export const ProfileDetailStat = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.secondary};
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 18px;
  }
  
  span {
    margin-right: 4px;
  }
  
  strong {
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: 600;
  }
`;

export const ProfileDetailActions = styled.div`
  display: flex;
  gap: 8px;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const ProfileDetailButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  background-color: ${({ primary, active, theme }) => 
    primary ? theme.colors.primary : 
    active ? theme.colors.hover.primaryButton : 
    theme.colors.input.background};
  color: ${({ primary, active }) => 
    primary || active ? 'white' : 'inherit'};
  border: none;
  
  svg {
    font-size: 18px;
    color: ${({ primary, active }) => 
      primary || active ? 'white' : 'inherit'};
  }
  
  &:hover {
    background-color: ${({ primary, theme }) => 
      primary ? theme.colors.hover.primaryButton : theme.colors.hover.background};
  }
`;

export const ProfileDetailSection = styled.div`
  margin-bottom: 24px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ProfileDetailSectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 16px;
`;

export const ProfileDetailList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`;

export const ProfileDetailListItem = styled.li`
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ProfileDetailTabs = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
`;

export const ProfileDetailTab = styled.div`
  padding: 16px 24px;
  font-size: 16px;
  font-weight: ${({ active }) => active ? '600' : '500'};
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.text.primary};
  border-bottom: ${({ active, theme }) => active ? `3px solid ${theme.colors.primary}` : '3px solid transparent'};
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
`;

export const ProfileDetailContent = styled.div`
  padding: 24px;
`;

export const ProfileDetailPhotos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const ProfileDetailPhoto = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.02);
  }
`;

export const ProfileDetailInterests = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const ProfileDetailInterest = styled.div`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.input.background};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.primary};
`; 
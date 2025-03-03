import styled from 'styled-components';

export const EventsContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
  gap: 16px;
`;

export const EventsLeftSidebar = styled.div`
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

export const EventsContent = styled.div`
  flex: 1;
  overflow: hidden;
`;

export const EventsHeader = styled.div`
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

export const EventsTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
`;

export const EventsSubtitle = styled.p`
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

export const EventTabs = styled.div`
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

export const EventTab = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  font-size: 15px;
  font-weight: ${({ active }) => active ? '600' : '500'};
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.text.primary};
  border-bottom: ${({ active, theme }) => active ? `3px solid ${theme.colors.primary}` : '3px solid transparent'};
  white-space: nowrap;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
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
  background-color: ${({ theme }) => theme.colors.card.background};
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  white-space: nowrap;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
`;

export const FilterIcon = styled.div`
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

export const FilterText = styled.div``;

export const EventsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const EventCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  cursor: pointer;
  position: relative;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

export const EventDate = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 4px 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const EventMonth = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
`;

export const EventDay = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const EventImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

export const EventInfo = styled.div`
  padding: 16px;
`;

export const EventTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 44px;
`;

export const EventTime = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 4px;
  
  svg {
    font-size: 12px;
  }
`;

export const EventLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  svg {
    font-size: 12px;
    flex-shrink: 0;
  }
`;

export const EventAttendees = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 12px;
  
  svg {
    font-size: 12px;
  }
`;

export const EventActions = styled.div`
  display: flex;
  gap: 8px;
`;

export const EventButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  background-color: ${({ primary, secondary, theme }) => 
    primary ? theme.colors.primary : 
    secondary ? '#e7f3ff' : 
    theme.colors.input.background};
  color: ${({ primary, secondary, theme }) => 
    primary ? 'white' : 
    secondary ? theme.colors.primary : 
    theme.colors.text.primary};
  border: none;
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  
  svg {
    font-size: 16px;
  }
  
  &:hover {
    background-color: ${({ primary, secondary, theme }) => 
      primary ? theme.colors.hover.primaryButton : 
      secondary ? '#dbe7f2' : 
      theme.colors.hover.background};
  }
`;

export const CreateEventCard = styled(EventCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  height: 100%;
  min-height: 200px;
`;

export const CreateEventIcon = styled.div`
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

export const CreateEventText = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
`;

export const NoEventsContent = styled.div`
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

export const NoEventsIcon = styled.div`
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

export const NoEventsTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
`;

export const NoEventsText = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 500px;
  line-height: 1.4;
`;

export const FeaturedEvent = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  margin-bottom: 24px;
`;

export const FeaturedEventImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const FeaturedEventContent = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const FeaturedEventInfo = styled.div`
  flex: 1;
`;

export const FeaturedEventTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const FeaturedEventTime = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 4px;
  
  svg {
    font-size: 14px;
  }
`;

export const FeaturedEventLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.secondary};
  
  svg {
    font-size: 14px;
  }
`;

export const FeaturedEventDescription = styled.div`
  padding: 16px;
  font-size: 15px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
`;

export const FeaturedEventActions = styled.div`
  display: flex;
  gap: 8px;
`;

export const FeaturedEventButton = styled(EventButton)`
  padding: 8px 16px;
  font-size: 15px;
`;

export const FeaturedEventAttendees = styled.div`
  padding: 16px;
`;

export const AttendeeAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`; 
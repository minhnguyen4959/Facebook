import styled from 'styled-components';

export const WatchContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
  gap: 16px;
`;

export const WatchLeftSidebar = styled.div`
  width: 240px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 8px 0;
  height: fit-content;
  position: sticky;
  top: 76px;
  
  @media (max-width: 992px) {
    width: 80px;
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
  
  @media (max-width: 992px) {
    padding: 8px;
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
  overflow: hidden;
  
  svg {
    font-size: 20px;
  }
  
  @media (max-width: 992px) {
    margin-right: 0;
  }
`;

export const SidebarText = styled.div`
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  @media (max-width: 992px) {
    display: none;
  }
`;

export const SidebarDivider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.divider};
  margin: 8px 16px;
  
  @media (max-width: 992px) {
    margin: 8px;
  }
`;

export const SidebarTitle = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  padding: 8px 16px;
  margin-top: 8px;
  
  @media (max-width: 992px) {
    display: none;
  }
`;

export const WatchContent = styled.div`
  flex: 1;
  overflow: hidden;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.input.background};
  border-radius: 20px;
  padding: 0 12px;
  height: 40px;
  margin-bottom: 16px;
`;

export const SearchIcon = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-right: 8px;
`;

export const SearchInput = styled.input`
  flex: 1;
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

export const VideoPlayerContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  margin-bottom: 24px;
`;

export const VideoPlayer = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  background-color: #000;
  position: relative;
  cursor: pointer;
`;

export const VideoPlayerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
`;

export const VideoControls = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 8px 0;
`;

export const VideoProgressBar = styled.div`
  padding: 0 8px;
  margin-bottom: 8px;
`;

export const VideoProgress = styled.input`
  width: 100%;
  height: 4px;
  -webkit-appearance: none;
  background: #555;
  border-radius: 2px;
  outline: none;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const VideoControlButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  padding: 4px 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const VideoTime = styled.div`
  font-size: 14px;
  margin-left: 8px;
`;

export const VideoVolume = styled.div`
  display: flex;
  align-items: center;
`;

export const VideoVolumeSlider = styled.input`
  width: 80px;
  height: 4px;
  -webkit-appearance: none;
  background: #555;
  border-radius: 2px;
  outline: none;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    cursor: pointer;
  }
  
  @media (max-width: 576px) {
    width: 60px;
  }
`;

export const VideoPlayerInfo = styled.div`
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
`;

export const VideoPlayerTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
`;

export const VideoPlayerChannel = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 4px;
`;

export const VideoPlayerViews = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const VideoPlayerDate = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const VideoCardActions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  
  @media (max-width: 576px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`;

export const VideoCardAction = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.text.primary};
  cursor: pointer;
  font-size: 14px;
  padding: 8px;
  
  svg {
    font-size: 18px;
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }
`;

export const VideoCardDescription = styled.div`
  padding: 16px;
  font-size: 15px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const VideoCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  cursor: pointer;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

export const VideoCardImage = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
`;

export const VideoCardHeader = styled.div`
  display: flex;
  padding: 12px;
`;

export const VideoCardTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 4px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const VideoCardChannel = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 2px;
`;

export const VideoCardViews = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
`; 
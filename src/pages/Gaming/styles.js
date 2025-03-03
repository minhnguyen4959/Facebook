import styled from 'styled-components';

export const GamingContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
  gap: 16px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const GamingLeftSidebar = styled.div`
  width: 280px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 8px 0;
  height: fit-content;
  position: sticky;
  top: 76px;
  
  @media (max-width: 992px) {
    width: 240px;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    position: static;
  }
`;

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
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
    font-size: 18px;
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

export const GamingContent = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 24px;
  
  @media (max-width: 576px) {
    padding: 16px;
  }
`;

export const GamingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const GamingTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 12px 10px 40px;
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

export const GamingTabs = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  margin-bottom: 24px;
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const GamingTab = styled.div`
  padding: 12px 16px;
  font-size: 15px;
  font-weight: 600;
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.text.secondary};
  border-bottom: 3px solid ${({ active, theme }) => active ? theme.colors.primary : 'transparent'};
  cursor: pointer;
  white-space: nowrap;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const GamingSection = styled.div`
  margin-bottom: 32px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SectionLink = styled.a`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const GamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  
  @media (max-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const GameCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

export const GameImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
`;

export const GameInfo = styled.div`
  padding: 12px;
`;

export const GameTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const GamePlayers = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 4px;
`;

export const GameCategory = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 12px;
`;

export const GameButton = styled.button`
  width: 100%;
  padding: 8px 0;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.primaryButton};
  }
`;

export const FeaturedGamesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const FeaturedGame = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  height: 200px;
  cursor: pointer;
  
  &:hover {
    img {
      transform: scale(1.05);
    }
  }
`;

export const FeaturedGameImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
`;

export const FeaturedGameOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
`;

export const FeaturedGameTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
`;

export const FeaturedGamePlayers = styled.div`
  font-size: 14px;
  margin-bottom: 12px;
  opacity: 0.9;
`;

export const FeaturedGamePlayButton = styled.button`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.primaryButton};
  }
`;

export const GamingPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const GamingPost = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 16px;
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  
  svg {
    color: ${({ theme }) => theme.colors.text.secondary};
    cursor: pointer;
  }
`;

export const PostAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const PostAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostName = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const PostTime = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const PostContent = styled.div`
  margin-bottom: 12px;
`;

export const PostText = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 12px;
  white-space: pre-wrap;
`;

export const PostImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

export const PostStats = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  margin-bottom: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const PostActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PostAction = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.text.secondary};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
  
  svg {
    font-size: 16px;
  }
`; 
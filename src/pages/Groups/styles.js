import styled from 'styled-components';

export const GroupsContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
  gap: 16px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const GroupsLeftSidebar = styled.div`
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

export const GroupsContent = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 24px;
  
  @media (max-width: 576px) {
    padding: 16px;
  }
`;

export const GroupsHeader = styled.div`
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

export const GroupsTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const GroupsFilter = styled.div`
  display: flex;
  gap: 8px;
`;

export const FilterButton = styled.button`
  padding: 8px 16px;
  background-color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.input.background};
  color: ${({ active }) => active ? 'white' : 'inherit'};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ active, theme }) => active ? theme.colors.hover.primaryButton : theme.colors.hover.background};
  }
`;

export const GroupsSection = styled.div`
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

export const GroupsTabs = styled.div`
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

export const GroupsTab = styled.div`
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

export const GroupsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const GroupCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  cursor: pointer;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

export const GroupCoverImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
`;

export const GroupImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

export const GroupInfo = styled.div`
  padding: 12px;
`;

export const GroupName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
`;

export const GroupMembers = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 8px;
`;

export const GroupPrivacy = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 12px;
`;

export const GroupActions = styled.div`
  display: flex;
  gap: 8px;
`;

export const GroupButton = styled.button`
  flex: 1;
  padding: 8px 0;
  background-color: ${({ primary, theme }) => primary ? theme.colors.primary : theme.colors.input.background};
  color: ${({ primary }) => primary ? 'white' : 'inherit'};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ primary, theme }) => primary ? theme.colors.hover.primaryButton : theme.colors.hover.background};
  }
`;

export const GroupDetailContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  overflow: hidden;
  margin-bottom: 24px;
`;

export const GroupDetailCover = styled.div`
  position: relative;
  height: 200px;
`;

export const GroupDetailCoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const GroupDetailInfo = styled.div`
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
`;

export const GroupDetailName = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
`;

export const GroupDetailStats = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const GroupDetailStat = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const GroupDetailDescription = styled.div`
  font-size: 15px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 16px;
`;

export const GroupDetailActions = styled.div`
  display: flex;
  gap: 8px;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const GroupPostsContainer = styled.div`
  padding: 16px;
`;

export const GroupPostCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 16px;
  margin-bottom: 16px;
`;

export const GroupPostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  
  svg {
    color: ${({ theme }) => theme.colors.text.secondary};
    cursor: pointer;
  }
`;

export const GroupPostAuthor = styled.div`
  display: flex;
  align-items: center;
`;

export const GroupPostAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const GroupPostInfo = styled.div``;

export const GroupPostName = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const GroupPostTime = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const GroupPostText = styled.div`
  font-size: 15px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 12px;
`;

export const GroupPostImage = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: contain;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: 12px;
`;

export const GroupPostStats = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  margin-bottom: 12px;
`;

export const GroupPostActions = styled.div`
  display: flex;
  justify-content: space-around;
  
  @media (max-width: 576px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`;

export const GroupPostAction = styled.button`
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

export const GroupFeedContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
`;

export const GroupFeedHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  overflow: hidden;
  margin-bottom: 16px;
  position: relative;
`;

export const GroupFeedImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  
  @media (max-width: 768px) {
    height: 200px;
  }
`;

export const GroupFeedInfo = styled.div`
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
`;

export const GroupFeedName = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 4px;
`;

export const GroupFeedPrivacy = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const GroupFeedActions = styled.div`
  display: flex;
  gap: 8px;
  padding: 16px;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const GroupFeedAction = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  background-color: ${({ primary, theme }) => primary ? theme.colors.primary : theme.colors.input.background};
  color: ${({ primary }) => primary ? 'white' : 'inherit'};
  border: none;
  
  &:hover {
    background-color: ${({ primary, theme }) => primary ? theme.colors.hover.primaryButton : theme.colors.hover.background};
  }
  
  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const GroupFeedContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CreatePostContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 16px;
`;

export const CreatePostInput = styled.input`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.input.background};
  font-size: 15px;
  margin-bottom: 16px;
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const CreatePostActions = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
  padding-top: 16px;
  
  @media (max-width: 576px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`;

export const CreatePostAction = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  font-size: 14px;
  padding: 8px;
  
  svg {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
    border-radius: ${({ theme }) => theme.borderRadius.md};
  }
`;

export const GroupFeedPost = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 16px;
`;

export const GroupFeedPostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  
  svg {
    color: ${({ theme }) => theme.colors.text.secondary};
    cursor: pointer;
  }
`;

export const GroupFeedPostAuthor = styled.div`
  display: flex;
  align-items: center;
`;

export const GroupFeedPostAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const GroupFeedPostInfo = styled.div``;

export const GroupFeedPostName = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const GroupFeedPostTime = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const GroupFeedPostText = styled.div`
  font-size: 15px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 12px;
`;

export const GroupFeedPostImage = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: contain;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: 12px;
`;

export const GroupFeedPostActions = styled.div`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
  padding-top: 12px;
  
  @media (max-width: 576px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`;

export const GroupFeedPostAction = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.primary};
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

export const CreateGroupButton = styled.div`
  display: flex;
  align-items: center;
  margin: 16px;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.input.background};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
`;

export const CreateGroupIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  color: white;
  
  svg {
    font-size: 18px;
  }
`;

export const CreateGroupText = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const FeaturedGroup = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  margin-bottom: 24px;
`;

export const FeaturedGroupCover = styled.div`
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const FeaturedGroupContent = styled.div`
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

export const FeaturedGroupInfo = styled.div`
  flex: 1;
`;

export const FeaturedGroupName = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const FeaturedGroupMeta = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const FeaturedGroupDescription = styled.div`
  padding: 16px;
  font-size: 15px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
`;

export const FeaturedGroupMembers = styled.div`
  padding: 16px;
`;

export const MemberAvatar = styled.div`
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
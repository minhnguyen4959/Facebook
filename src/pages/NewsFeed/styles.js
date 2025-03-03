import styled from 'styled-components';
import { FaCalendarAlt, FaUsers } from 'react-icons/fa';

export const NewsfeedContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
`;

export const NewsfeedContent = styled.div`
  display: flex;
  gap: 24px;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const RightSidebar = styled.div`
  width: 280px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const LeftSidebar = styled.div`
  width: 280px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
`;

export const SidebarLinkActive = styled(SidebarLink)`
  background-color: ${({ theme }) => theme.colors.hover.background};
  font-weight: 600;
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
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
  
  svg {
    font-size: 20px;
  }
`;

export const SidebarText = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

// Stories Section
export const StoriesSection = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 20px;
`;

export const StoriesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const StoriesTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const StoriesViewAll = styled.a`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const StoriesContainer = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 8px;
  
  &::-webkit-scrollbar {
    height: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.input.background};
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.divider};
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const StoryCard = styled.div`
  position: relative;
  width: 120px;
  height: 200px;
  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  cursor: pointer;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6));
    pointer-events: none;
  }
  
  &:hover {
    transform: scale(1.02);
    transition: transform 0.2s ease;
  }
`;

export const StoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StoryUser = styled.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  right: 12px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StoryUserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  margin-bottom: 6px;
`;

export const StoryUserName = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: white;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`;

export const CreateStoryCard = styled(StoryCard)`
  position: relative;
  
  &::after {
    background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7));
  }
`;

export const CreateStoryIcon = styled.div`
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 2;
  border: 4px solid ${({ theme }) => theme.colors.card.background};
`;

export const CreateStoryText = styled.div`
  position: absolute;
  bottom: 12px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  color: white;
  z-index: 2;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`;

// Create Post Card
export const CreatePostCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 16px;
`;

export const CreatePostHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

export const CreatePostUserImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

export const CreatePostInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ theme }) => theme.colors.input.background};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 15px;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}20;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const CreatePostActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  padding: 8px 12px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
  
  svg {
    font-size: 18px;
  }
  
  @media (max-width: 576px) {
    font-size: 13px;
    padding: 6px 10px;
    
    svg {
      font-size: 16px;
    }
  }
`;

export const CreatePostButton = styled.button`
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

// Feed Section
export const FeedSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const PostCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  overflow: hidden;
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const PostAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const PostAuthorImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

export const PostAuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostAuthorName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const PostMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const PostTime = styled.span``;

export const PostPrivacy = styled.span`
  display: flex;
  align-items: center;
`;

export const PostOptions = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
`;

export const PostContent = styled.div`
  padding: 0 16px 16px;
`;

export const PostText = styled.div`
  font-size: 15px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 16px;
  white-space: pre-line;
`;

export const PostImage = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

export const PostStats = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  
  & > div {
    display: flex;
    gap: 12px;
  }
`;

export const PostLikes = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  
  svg {
    color: ${({ theme }) => theme.colors.error};
  }
`;

export const PostComments = styled.div``;

export const PostShares = styled.div``;

export const PostActions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
`;

export const PostAction = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
  
  svg {
    font-size: 18px;
    
    &.liked {
      color: ${({ theme }) => theme.colors.error};
    }
  }
`;

export const CommentSection = styled.div`
  padding: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
`;

export const CommentForm = styled.form`
  display: flex;
  gap: 12px;
`;

export const CommentInput = styled.input`
  flex: 1;
  padding: 10px 16px;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ theme }) => theme.colors.input.background};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const CommentButton = styled.button`
  padding: 10px 16px;
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

// Sidebar
export const SidebarSection = styled.div`
  margin-bottom: 24px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const SidebarCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  overflow: hidden;
`;

export const SidebarTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
`;

export const SidebarContent = styled.div`
  padding: 16px;
`;

// Events
export const EventItem = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const EventDate = styled.div`
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.colors.primary}15;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  flex-shrink: 0;
  
  .day {
    font-size: 18px;
  }
  
  .month {
    font-size: 12px;
  }
`;

export const EventInfo = styled.div`
  flex: 1;
`;

export const EventTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 4px;
`;

export const EventMeta = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.secondary};
  
  .location {
    margin-bottom: 2px;
  }
`;

// Birthdays
export const BirthdayItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const BirthdayIcon = styled.div`
  font-size: 24px;
`;

export const BirthdayText = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.4;
`;

// Suggested Friends
export const SuggestedFriend = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  cursor: pointer;
  padding: 8px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const SuggestedFriendImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`;

export const SuggestedFriendInfo = styled.div`
  flex: 1;
`;

export const SuggestedFriendName = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const SuggestedFriendMeta = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const SuggestedFriendActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FriendButton = styled.button`
  padding: 6px 12px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.primaryButton};
  }
`;

export const DismissButton = styled.button`
  padding: 6px 12px;
  background-color: ${({ theme }) => theme.colors.input.background};
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
`; 
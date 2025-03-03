import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProfileContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
`;

export const ProfileHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  overflow: hidden;
  margin-bottom: 16px;
  position: relative;
`;

export const CoverPhoto = styled.div`
  height: 350px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  position: relative;
  
  @media (max-width: 768px) {
    height: 250px;
  }
  
  @media (max-width: 576px) {
    height: 200px;
  }
`;

export const CoverPhotoOverlay = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
`;

export const CoverPhotoButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.colors.card.background};
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
  
  svg {
    font-size: 16px;
  }
`;

export const ProfileAvatar = styled.div`
  position: absolute;
  left: 32px;
  bottom: -64px;
  width: 168px;
  height: 168px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.colors.card.background};
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
    bottom: -50px;
    left: 24px;
  }
  
  @media (max-width: 576px) {
    width: 120px;
    height: 120px;
    bottom: -40px;
    left: 16px;
  }
`;

export const ProfileAvatarOverlay = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s;
  
  ${ProfileAvatar}:hover & {
    opacity: 1;
  }
`;

export const ProfileAvatarButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.card.background};
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
  
  svg {
    font-size: 18px;
  }
`;

export const ProfileInfo = styled.div`
  padding: 16px 24px 24px 220px;
  
  @media (max-width: 768px) {
    padding: 16px 24px 24px 180px;
  }
  
  @media (max-width: 576px) {
    padding: 80px 16px 16px 16px;
    text-align: center;
  }
`;

export const ProfileName = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 4px;
  
  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

export const ProfileBio = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 16px;
`;

export const ProfileStats = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
  
  @media (max-width: 576px) {
    justify-content: center;
  }
`;

export const ProfileStat = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileStatNumber = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const ProfileStatLabel = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const ProfileActions = styled.div`
  display: flex;
  gap: 8px;
  
  @media (max-width: 576px) {
    justify-content: center;
  }
`;

export const ProfileActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: ${({ primary, theme }) => primary ? theme.colors.primary : theme.colors.input.background};
  color: ${({ primary }) => primary ? 'white' : 'inherit'};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ primary, theme }) => primary ? theme.colors.hover.primaryButton : theme.colors.hover.background};
  }
  
  svg {
    font-size: 16px;
  }
`;

export const ProfileTabs = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  margin-bottom: 16px;
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const ProfileTab = styled.div`
  padding: 16px 24px;
  font-size: 15px;
  font-weight: 600;
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.text.secondary};
  border-bottom: 3px solid ${({ active, theme }) => active ? theme.colors.primary : 'transparent'};
  cursor: pointer;
  white-space: nowrap;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  gap: 16px;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const ProfileLeftSidebar = styled.div`
  width: 360px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const ProfileAbout = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 16px;
`;

export const ProfileAboutTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 16px;
`;

export const ProfileAboutItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ProfileAboutIcon = styled.div`
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

export const ProfileAboutText = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const ProfilePhotos = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 16px;
`;

export const ProfilePhotosTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  a {
    font-size: 15px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ProfilePhotosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;

export const ProfilePhotoItem = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.02);
  }
`;

export const ProfileFriends = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 16px;
`;

export const ProfileFriendsTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  a {
    font-size: 15px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ProfileFriendsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  
  @media (max-width: 1200px) and (min-width: 993px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ProfileFriendItem = styled.div`
  cursor: pointer;
`;

export const ProfileFriendAvatar = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: 4px;
`;

export const ProfileFriendName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProfileFriendMutual = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const ProfileMainContent = styled.div`
  flex: 1;
`;

export const CreatePostContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 16px;
  margin-bottom: 16px;
`;

export const CreatePostInput = styled.input`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.input.background};
  color: ${({ theme }) => theme.colors.text.primary};
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

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PostCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
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
`;

export const PostAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
`;

export const PostInfo = styled.div``;

export const PostName = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const PostTime = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const PostVisibility = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const PostContent = styled.div`
  margin-bottom: 12px;
`;

export const PostText = styled.div`
  font-size: 15px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 12px;
`;

export const PostImage = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: contain;
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

export const PostStats = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  margin-bottom: 12px;
`;

export const PostActions = styled.div`
  display: flex;
  justify-content: space-around;
  
  @media (max-width: 576px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`;

export const PostAction = styled.button`
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
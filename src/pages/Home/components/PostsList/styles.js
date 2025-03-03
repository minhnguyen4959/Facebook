import styled from 'styled-components';

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PostCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 12px 16px;
  transition: background-color ${({ theme }) => theme.transitions.normal} ease;
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const PostAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 8px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostAuthor = styled.div`
  font-weight: 600;
  font-size: 15px;
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
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.text.primary};
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
  padding: 8px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  margin-bottom: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const LikeCount = styled.div``;

export const CommentCount = styled.div``;

export const PostActions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  margin-bottom: 8px;
  position: relative;
`;

export const PostAction = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  border-radius: 4px;
  padding: 8px;
  flex: 1;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  color: ${({ active, color, theme }) => 
    active ? color || theme.colors.primary : theme.colors.text.secondary};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
  
  svg {
    margin-right: 4px;
    font-size: 18px;
  }
  
  span {
    margin-right: 4px;
    font-size: 18px;
  }
`;

export const ReactionsContainer = styled.div`
  position: absolute;
  top: -50px;
  left: 0;
  display: flex;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: 20px;
  padding: 5px 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

export const ReactionButton = styled.button`
  background: none;
  border: none;
  font-size: 22px;
  padding: 4px;
  cursor: pointer;
  position: relative;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.3);
    
    span {
      animation: bounce 0.5s;
    }
    
    div {
      visibility: visible;
      opacity: 1;
    }
  }
  
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
`;

export const ReactionTooltip = styled.div`
  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.2s;
`;

export const CommentsContainer = styled.div`
  margin-bottom: 8px;
`;

export const CommentItem = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

export const CommentAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 8px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CommentContent = styled.div`
  background-color: ${({ theme }) => theme.colors.input.background};
  border-radius: 18px;
  padding: 8px 12px;
  max-width: calc(100% - 40px);
`;

export const CommentAuthor = styled.div`
  font-weight: 600;
  font-size: 13px;
  margin-bottom: 2px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const CommentText = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const CommentInputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CommentInputAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 8px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CommentInput = styled.input`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.input.background};
  border: none;
  border-radius: 20px;
  padding: 8px 12px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.primary};
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`; 
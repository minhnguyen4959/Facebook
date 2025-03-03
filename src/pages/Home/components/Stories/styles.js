import styled from 'styled-components';

export const StoriesContainer = styled.div`
  margin-bottom: 16px;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding-bottom: 16px;
`;

export const StoriesHeader = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  margin-bottom: 12px;
`;

export const StoriesTab = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  cursor: pointer;
  position: relative;
  color: ${({ active, theme }) => 
    active ? theme.colors.primary : theme.colors.text.secondary};
  font-weight: ${({ active }) => active ? '600' : '500'};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
`;

export const StoriesTabText = styled.div`
  font-size: 15px;
`;

export const StoriesTabIndicator = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const StoriesWrapper = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding: 4px 16px;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const StoryCard = styled.div`
  position: relative;
  width: 112px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  
  &:hover {
    transform: scale(1.02);
    transition: transform 0.2s;
  }
`;

export const CreateStoryCard = styled(StoryCard)`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.card.background};
`;

export const StoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StoryUser = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px;
`;

export const StoryUserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.colors.primary};
  position: absolute;
  top: 8px;
  left: 8px;
  object-fit: cover;
`;

export const StoryUsername = styled.div`
  position: absolute;
  bottom: 8px;
  left: 8px;
  right: 8px;
  color: white;
  font-size: 13px;
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CreateStoryIcon = styled.div`
  position: absolute;
  bottom: 36px;
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
  border: 4px solid ${({ theme }) => theme.colors.card.background};
`;

export const CreateStoryText = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 8px;
  font-size: 13px;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.card.background};
  color: ${({ theme }) => theme.colors.text.primary};
`; 
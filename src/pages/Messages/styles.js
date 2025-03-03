import styled from 'styled-components';

export const MessagesContainer = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
  gap: 16px;
  height: calc(100vh - 120px);
  
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const MessagesLeftSidebar = styled.div`
  width: 360px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  display: flex;
  flex-direction: column;
  height: 100%;
  
  @media (max-width: 992px) {
    width: 300px;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    height: 400px;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 28px;
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

export const ConversationsList = styled.div`
  flex: 1;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.divider};
    border-radius: 3px;
  }
`;

export const ConversationItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  background-color: ${({ active, theme }) => active ? theme.colors.hover.background : 'transparent'};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
`;

export const ConversationAvatar = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  margin-right: 12px;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
  
  svg {
    position: absolute;
    bottom: 0;
    right: 0;
    color: #4CAF50;
    font-size: 12px;
    background-color: ${({ theme }) => theme.colors.card.background};
    border-radius: 50%;
  }
`;

export const ConversationInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ConversationName = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ConversationLastMessage = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ConversationTime = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 4px;
  text-align: right;
`;

export const ConversationBadge = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 12px;
  font-weight: 600;
  min-width: 20px;
  height: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
`;

export const MessagesContent = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
`;

export const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
`;

export const ChatHeaderInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const ChatHeaderName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const ChatHeaderStatus = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const ChatHeaderActions = styled.div`
  display: flex;
  gap: 16px;
`;

export const ChatHeaderAction = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
  
  svg {
    font-size: 18px;
  }
`;

export const ChatBody = styled.div`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.background};
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.divider};
    border-radius: 3px;
  }
`;

export const MessageGroup = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: ${({ sender }) => sender === 'me' ? 'flex-end' : 'flex-start'};
`;

export const MessageDate = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
  margin: 8px 0 16px;
  width: 100%;
`;

export const Message = styled.div`
  max-width: 70%;
  margin-bottom: 4px;
  
  @media (max-width: 576px) {
    max-width: 85%;
  }
`;

export const MessageText = styled.div`
  padding: 8px 12px;
  border-radius: 18px;
  font-size: 15px;
  background-color: ${({ sender, theme }) => 
    sender === 'me' ? theme.colors.primary : theme.colors.card.background};
  color: ${({ sender }) => sender === 'me' ? 'white' : 'inherit'};
  position: relative;
  word-wrap: break-word;
`;

export const MessageTime = styled.div`
  font-size: 11px;
  color: ${({ sender }) => sender === 'me' ? 'rgba(255, 255, 255, 0.7)' : 'inherit'};
  margin-top: 4px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
`;

export const MessageStatus = styled.div`
  display: flex;
  align-items: center;
  
  svg {
    font-size: 12px;
  }
`;

export const ChatFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
`;

export const ChatInputActions = styled.div`
  display: flex;
  gap: 8px;
  margin-right: 12px;
`;

export const ChatInputAction = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
  
  svg {
    font-size: 18px;
  }
`;

export const ChatInput = styled.textarea`
  flex: 1;
  height: 40px;
  padding: 10px 12px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.input.background};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 15px;
  resize: none;
  max-height: 120px;
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const SendButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ disabled, theme }) => disabled ? theme.colors.input.background : theme.colors.primary};
  color: ${({ disabled }) => disabled ? theme.colors.text.secondary : 'white'};
  border: none;
  cursor: ${({ disabled }) => disabled ? 'default' : 'pointer'};
  margin-left: 12px;
  
  &:hover {
    background-color: ${({ disabled, theme }) => disabled ? theme.colors.input.background : theme.colors.hover.primaryButton};
  }
  
  svg {
    font-size: 18px;
  }
`;

export const EmptyMessages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 24px;
  text-align: center;
`;

export const EmptyMessagesIcon = styled.div`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.text.secondary};
  opacity: 0.5;
  margin-bottom: 16px;
`;

export const EmptyMessagesText = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
`;

export const EmptyMessagesSubtext = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const EmptyChat = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 24px;
  text-align: center;
`;

export const EmptyChatIcon = styled.div`
  font-size: 64px;
  color: ${({ theme }) => theme.colors.text.secondary};
  opacity: 0.5;
  margin-bottom: 16px;
`;

export const EmptyChatText = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
`;

export const EmptyChatSubtext = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text.secondary};
`; 
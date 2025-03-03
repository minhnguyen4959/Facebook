import styled from 'styled-components';

export const RightSidebarContainer = styled.div`
  width: 360px;
  flex-shrink: 0;
  padding: 16px;
  height: calc(100vh - 60px);
  overflow-y: auto;
  position: sticky;
  top: 60px;
  
  @media (max-width: 1200px) {
    width: 280px;
  }
  
  @media (max-width: 992px) {
    display: none;
  }
  
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.divider};
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const SidebarTitle = styled.h3`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const SidebarDivider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.divider};
  margin: 16px 0;
`;

export const BirthdayCard = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
`;

export const BirthdayIcon = styled.div`
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

export const BirthdayText = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.primary};
  
  strong {
    font-weight: 600;
  }
`;

export const CreateRoomButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const CreateRoomIcon = styled.div`
  margin-right: 8px;
  
  svg {
    font-size: 16px;
  }
`;

export const CreateRoomText = styled.div``;

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
`;

export const ContactAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 12px;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContactStatus = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.success};
  border: 2px solid ${({ theme }) => theme.colors.card.background};
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const ContactName = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
`; 
import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 360px;
  padding: 16px;
  position: sticky;
  top: 76px;
  height: calc(100vh - 76px);
  overflow-y: auto;
  
  @media (max-width: 1260px) {
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

export const SectionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const ContactsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  margin-top: 16px;
`;

export const ContactsTitle = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const ContactsActions = styled.div`
  display: flex;
  gap: 8px;
`;

export const ContactsAction = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.secondary};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
`;

export const ContactsList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
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
  position: relative;
  margin-right: 12px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const OnlineIndicator = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #31a24c;
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

export const BirthdaySection = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: 8px;
  margin-bottom: 16px;
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
`;

export const BirthdayIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  margin-right: 12px;
`;

export const BirthdayText = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const SponsoredSection = styled.div`
  margin-bottom: 16px;
`;

export const SponsoredItem = styled.a`
  display: flex;
  text-decoration: none;
  padding: 8px;
  border-radius: 8px;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
`;

export const SponsoredImage = styled.img`
  width: 130px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 12px;
`;

export const SponsoredContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SponsoredTitle = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const SponsoredLink = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const SponsoredRating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`;

export const Star = styled.div`
  color: #f7b928;
  font-size: 12px;
  margin-right: 2px;
`; 
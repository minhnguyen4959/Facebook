import styled from 'styled-components';

export const FooterContainer = styled.footer`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.card.background};
  margin-top: 20px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text.secondary};
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8px;
`;

export const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-right: 10px;
  margin-bottom: 5px;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const FooterCopyright = styled.div`
  margin-top: 20px;
`;

export const FooterLanguages = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
`;

export const FooterLanguage = styled.a`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-right: 10px;
  margin-bottom: 5px;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
  
  &.active {
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: bold;
  }
`; 
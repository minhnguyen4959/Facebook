import styled from 'styled-components';

export const HelpCenterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
`;

export const HelpCenterHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 32px;
  text-align: center;
  margin-bottom: 24px;
`;

export const HelpCenterTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
  
  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

export const HelpCenterSubtitle = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 24px;
  
  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 14px 16px 14px 48px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ theme }) => theme.colors.input.background};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}40, 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const HelpCenterContent = styled.div`
  display: flex;
  gap: 24px;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const HelpCenterLeftSidebar = styled.div`
  width: 280px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  
  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const CategoryList = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  overflow: hidden;
`;

export const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  background-color: ${({ active, theme }) => active ? theme.colors.hover.background : 'transparent'};
  border-left: 3px solid ${({ active, theme }) => active ? theme.colors.primary : 'transparent'};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
`;

export const CategoryIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ active, theme }) => active ? `${theme.colors.primary}20` : theme.colors.input.background};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.text.secondary};
  
  svg {
    font-size: 18px;
  }
`;

export const CategoryText = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const HelpCenterMainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const PopularTopics = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 24px;
`;

export const PopularTopicsTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 16px;
`;

export const TopicsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
`;

export const TopicItem = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 16px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const TopicTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
`;

export const TopicDescription = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.5;
`;

export const FAQSection = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 24px;
`;

export const FAQTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 16px;
`;

export const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FAQItem = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.divider};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  overflow: hidden;
`;

export const FAQQuestion = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.background};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.background};
  }
  
  svg {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const FAQAnswer = styled.div`
  padding: 16px;
  font-size: 15px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text.primary};
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
  background-color: ${({ theme }) => theme.colors.card.background};
`;

export const ContactSection = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 24px;
  text-align: center;
`;

export const ContactTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
`;

export const ContactDescription = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 16px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const ContactButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.primaryButton};
  }
`;

export const HelpCenterCard = styled.div`
  background-color: ${({ theme }) => theme.colors.card.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.colors.card.shadow};
  padding: 20px;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 8px;
`;

export const CardContent = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.5;
  margin-bottom: 12px;
`;

export const CardLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
  
  svg {
    font-size: 12px;
  }
`; 
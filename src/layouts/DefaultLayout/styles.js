import styled from 'styled-components';

export const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  padding-top: 60px; // Để tránh bị che bởi Navbar cố định
`;

export const MainContent = styled.main`
  flex: 1;
  min-width: 0; // Để tránh overflow
  padding: 16px;
  
  @media (max-width: 768px) {
    padding: 8px;
  }
`; 
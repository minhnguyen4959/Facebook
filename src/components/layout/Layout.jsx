import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Footer from './Footer';

const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  transition: background-color ${({ theme }) => theme.transitions.normal} ease;
`;

const ContentWrapper = styled.div`
  display: flex;
  padding-top: 16px;
`;

const MainContent = styled.main`
  flex: 1;
  min-width: 0;
  
  @media (min-width: 1100px) {
    margin: 0 32px;
  }
`;

const Layout = () => {
  return (
    <AppContainer>
      <Navbar />
      <ContentWrapper>
        <LeftSidebar />
        <MainContent>
          <Outlet />
        </MainContent>
        <RightSidebar />
      </ContentWrapper>
      <Footer />
    </AppContainer>
  );
};

export default Layout;
import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import RightSidebar from '../../components/RightSidebar';
import { LayoutContainer, ContentWrapper, MainContent } from './styles';
import GlobalStyle from '../../styles/GlobalStyle';
import theme from '../../styles/theme';

const DefaultLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LayoutContainer>
        <Navbar />
        <ContentWrapper>
          <Sidebar />
          <MainContent>
            <Outlet />
          </MainContent>
          <RightSidebar />
        </ContentWrapper>
      </LayoutContainer>
    </ThemeProvider>
  );
};

export default DefaultLayout; 
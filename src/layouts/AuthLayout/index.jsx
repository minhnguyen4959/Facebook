import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AuthContainer } from './styles';
import GlobalStyle from '../../styles/GlobalStyle';
import theme from '../../styles/theme';

const AuthLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthContainer>
        <Outlet />
      </AuthContainer>
    </ThemeProvider>
  );
};

export default AuthLayout; 
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  input, button, textarea, select {
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default GlobalStyle; 
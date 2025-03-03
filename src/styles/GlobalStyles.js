import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Helvetica, Arial, sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: 1.34;
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    transition: background-color ${({ theme }) => theme.transitions.normal} ease;
    font-size: 15px;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  input, button, textarea {
    font-family: inherit;
  }

  button:focus,
  button:focus-visible,
  input:focus,
  textarea:focus {
    outline: none;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    font-size: inherit;
    font-family: inherit;
    color: inherit;
  }

  input {
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }

  html, body {
    overflow-x: hidden;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
    opacity: 1;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  /* Scrollbar styles */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.divider};
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export default GlobalStyles; 
import styled from 'styled-components';

export const HomeContainer = styled.div`
  max-width: 680px;
  margin: 0 auto;
  padding: 20px 15px;
  background-color: ${({ theme }) => theme.colors.background};
  transition: background-color ${({ theme }) => theme.transitions.normal} ease;
`; 
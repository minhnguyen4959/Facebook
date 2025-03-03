import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  min-height: 100vh;
  background-color: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const NotFoundContent = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 40px;
  max-width: 500px;
  width: 100%;
  text-align: center;
`;

export const NotFoundLogo = styled.div`
  color: #1877f2;
  font-size: 60px;
  margin-bottom: 20px;
`;

export const NotFoundTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #1c1e21;
`;

export const NotFoundText = styled.p`
  font-size: 16px;
  color: #606770;
  margin-bottom: 24px;
`;

export const NotFoundButton = styled.button`
  background-color: #1877f2;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  padding: 0 16px;
  height: 40px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  
  svg {
    margin-right: 8px;
  }
  
  &:hover {
    background-color: #166fe5;
  }
`; 
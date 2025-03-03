import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginContainer = styled.div`
  min-height: 100vh;
  background-color: #f0f2f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 980px;
  width: 100%;
  margin-top: 72px;
  
  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const LoginLogo = styled.div`
  color: #1877f2;
  font-size: 60px;
  margin-bottom: 16px;
  
  @media (min-width: 900px) {
    font-size: 106px;
    margin-top: 112px;
    margin-right: 32px;
    margin-bottom: 0;
  }
`;

export const LoginTitle = styled.h2`
  font-size: 24px;
  line-height: 28px;
  width: 100%;
  max-width: 500px;
  text-align: center;
  margin-bottom: 32px;
  
  @media (min-width: 900px) {
    text-align: left;
    margin-top: 16px;
    padding-right: 32px;
  }
`;

export const LoginSubtitle = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
  line-height: 1.4;
`;

export const LoginRight = styled.div`
  flex: 1;
  max-width: 400px;
  width: 100%;
`;

export const LoginForm = styled.form`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 396px;
  
  @media (min-width: 900px) {
    margin-top: 40px;
  }
`;

export const LoginInput = styled.input`
  width: 100%;
  height: 52px;
  border: 1px solid #dddfe2;
  border-radius: 6px;
  padding: 14px 16px;
  font-size: 17px;
  margin-bottom: 12px;
  
  &:focus {
    outline: none;
    border-color: #1877f2;
    box-shadow: 0 0 0 2px #e7f3ff;
  }
  
  &::placeholder {
    color: #90949c;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 48px;
  background-color: #1877f2;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 6px;
  
  &:hover {
    background-color: #166fe5;
  }
`;

export const LoginForgot = styled(Link)`
  display: block;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  text-decoration: none;
  margin-bottom: 20px;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const LoginDivider = styled.div`
  border-bottom: 1px solid #dadde1;
  margin: 20px 0;
`;

export const CreateAccountButton = styled.button`
  background-color: #42b72a;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 17px;
  font-weight: bold;
  padding: 0 16px;
  height: 48px;
  cursor: pointer;
  margin: 0 auto;
  display: block;
  
  &:hover {
    background-color: #36a420;
  }
`;

export const LoginFooter = styled.div`
  max-width: 980px;
  width: 100%;
  margin-top: auto;
  padding: 20px 0;
  color: #737373;
  font-size: 12px;
`;

export const LoginFooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 8px;
`;

export const LoginFooterLink = styled.a`
  color: #737373;
  margin-right: 10px;
  margin-bottom: 5px;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const LoginFooterCopyright = styled.div`
  margin-top: 20px;
`; 
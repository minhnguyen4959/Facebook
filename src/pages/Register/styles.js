import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RegisterContainer = styled.div`
  min-height: 100vh;
  background-color: #f0f2f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const RegisterHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 980px;
  padding: 20px 0;
`;

export const RegisterLogo = styled.div`
  color: #1877f2;
  font-size: 40px;
`;

export const LoginLink = styled(Link)`
  background-color: #1877f2;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: bold;
  padding: 0 16px;
  height: 36px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  
  &:hover {
    background-color: #166fe5;
  }
`;

export const RegisterContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 980px;
`;

export const RegisterForm = styled.form`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 432px;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #e4e6eb;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  svg {
    font-size: 16px;
    color: #606770;
  }
  
  &:hover {
    background-color: #d8dadf;
  }
`;

export const RegisterTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const RegisterSubtitle = styled.p`
  font-size: 15px;
  color: #606770;
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  margin-bottom: 12px;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #dddfe2;
  border-radius: 5px;
  padding: 8px 10px;
  font-size: 15px;
  
  &:focus {
    outline: none;
    border-color: #1877f2;
    box-shadow: 0 0 0 2px #e7f3ff;
  }
  
  &::placeholder {
    color: #90949c;
  }
`;

export const FormSelect = styled.select`
  flex: 1;
  height: 36px;
  border: 1px solid #ccd0d5;
  border-radius: 5px;
  padding: 0 8px;
  font-size: 15px;
  
  &:focus {
    outline: none;
    border-color: #1877f2;
    box-shadow: 0 0 0 2px #e7f3ff;
  }
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 12px;
  color: #606770;
  margin-bottom: 4px;
`;

export const FormRadioGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const FormRadio = styled.div`
  flex: 1;
  border: 1px solid #ccd0d5;
  border-radius: 5px;
  padding: 8px;
  display: flex;
  align-items: center;
`;

export const FormRadioLabel = styled.label`
  margin-left: 6px;
  font-size: 15px;
`;

export const RegisterButton = styled.button`
  background-color: #00a400;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  font-weight: bold;
  padding: 0 32px;
  height: 36px;
  cursor: pointer;
  margin: 20px auto 0;
  display: block;
  
  &:hover {
    background-color: #008000;
  }
`;

export const RegisterFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 980px;
  width: 100%;
  margin-top: 28px;
  padding: 20px 0;
  color: #737373;
  font-size: 12px;
`;

export const RegisterFooterLink = styled.a`
  color: #737373;
  margin: 0 10px 5px;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`; 
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f2f5;
  min-height: 100vh;
  padding: 20px;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 15%;
    align-items: center;
  }
`;

const LeftSection = styled.div`
  text-align: center;
  margin-bottom: 40px;

  @media (min-width: 900px) {
    text-align: left;
    flex: 1;
    margin-right: 40px;
    margin-bottom: 0;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  
  @media (min-width: 900px) {
    justify-content: flex-start;
  }
  
  svg {
    font-size: 4rem;
    color: #1877f2;
  }
  
  h1 {
    font-size: 3rem;
    color: #1877f2;
    margin-left: 10px;
    font-weight: bold;
  }
`;

const Tagline = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
  color: #1c1e21;
  line-height: 1.3;
  
  @media (min-width: 900px) {
    font-size: 1.7rem;
    max-width: 500px;
  }
`;

const FormSection = styled.div`
  width: 100%;
  max-width: 400px;
`;

const LoginForm = styled.form`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border-radius: 6px;
  border: 1px solid #dddfe2;
  font-size: 17px;
  margin-bottom: 12px;
  
  &:focus {
    outline: none;
    border-color: #1877f2;
    box-shadow: 0 0 0 2px #e7f3ff;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #1877f2;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 16px;
  
  &:hover {
    background-color: #166fe5;
  }
`;

const ForgotPassword = styled(Link)`
  display: block;
  text-align: center;
  color: #1877f2;
  font-size: 14px;
  margin-bottom: 20px;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Divider = styled.div`
  border-bottom: 1px solid #dadde1;
  margin: 20px 0;
`;

const CreateAccountButton = styled.button`
  background-color: #42b72a;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 17px;
  font-weight: bold;
  padding: 12px 16px;
  cursor: pointer;
  margin: 0 auto;
  display: block;
  
  &:hover {
    background-color: #36a420;
  }
`;

const CreatePageText = styled.p`
  text-align: center;
  margin-top: 28px;
  font-size: 14px;
`;

const PageLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: inherit;
  
  &:hover {
    text-decoration: underline;
  }
`;

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/>
  </svg>
);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Đăng nhập với:', { email, password });
    // Giả lập đăng nhập thành công
    navigate('/');
  };

  const handleCreateAccount = () => {
    navigate('/register');
  };

  return (
    <LoginContainer>
      <LeftSection>
        <Logo>
          <FacebookIcon />
          <h1>facebook</h1>
        </Logo>
        <Tagline>
          Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.
        </Tagline>
      </LeftSection>
      
      <FormSection>
        <LoginForm onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Email hoặc số điện thoại"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <LoginButton type="submit">Đăng nhập</LoginButton>
          <ForgotPassword to="/forgot-password">Quên mật khẩu?</ForgotPassword>
          <Divider />
          <CreateAccountButton type="button" onClick={handleCreateAccount}>
            Tạo tài khoản mới
          </CreateAccountButton>
        </LoginForm>
        
        <CreatePageText>
          <PageLink to="/create-page">Tạo Trang</PageLink> dành cho người nổi tiếng, thương hiệu hoặc doanh nghiệp.
        </CreatePageText>
      </FormSection>
    </LoginContainer>
  );
};

export default Login;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import {
  LoginContainer,
  LoginContent,
  LoginForm,
  LoginLogo,
  LoginTitle,
  LoginInput,
  LoginButton,
  LoginDivider,
  CreateAccountButton,
  LoginFooter,
  LoginFooterLink,
  LoginFooterLinks,
  LoginFooterCopyright
} from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Trong thực tế, bạn sẽ gửi yêu cầu đăng nhập đến server
    console.log('Đăng nhập với:', { email, password });
    
    // Giả lập đăng nhập thành công
    navigate('/');
  };

  return (
    <LoginContainer>
      <LoginContent>
        <LoginLogo>
          <FaFacebook />
        </LoginLogo>
        <LoginTitle>
          Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.
        </LoginTitle>
        
        <LoginForm onSubmit={handleSubmit}>
          <LoginInput
            type="text"
            placeholder="Email hoặc số điện thoại"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <LoginInput
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <LoginButton type="submit">Đăng nhập</LoginButton>
          
          <Link to="/forgot-password" style={{ textAlign: 'center', display: 'block', marginTop: '16px', color: '#1877f2', textDecoration: 'none' }}>
            Quên mật khẩu?
          </Link>
          
          <LoginDivider />
          
          <CreateAccountButton as={Link} to="/register">
            Tạo tài khoản mới
          </CreateAccountButton>
        </LoginForm>
        
        <div style={{ textAlign: 'center', marginTop: '28px', fontSize: '14px' }}>
          <strong>Tạo Trang</strong> dành cho người nổi tiếng, thương hiệu hoặc doanh nghiệp.
        </div>
      </LoginContent>
      
      <LoginFooter>
        <LoginFooterLinks>
          <LoginFooterLink>Tiếng Việt</LoginFooterLink>
          <LoginFooterLink>English (US)</LoginFooterLink>
          <LoginFooterLink>中文(简体)</LoginFooterLink>
          <LoginFooterLink>日本語</LoginFooterLink>
          <LoginFooterLink>한국어</LoginFooterLink>
          <LoginFooterLink>Français (France)</LoginFooterLink>
          <LoginFooterLink>ภาษาไทย</LoginFooterLink>
          <LoginFooterLink>Español</LoginFooterLink>
          <LoginFooterLink>Português (Brasil)</LoginFooterLink>
          <LoginFooterLink>Deutsch</LoginFooterLink>
          <LoginFooterLink>Italiano</LoginFooterLink>
        </LoginFooterLinks>
        
        <LoginDivider style={{ margin: '8px 0' }} />
        
        <LoginFooterLinks>
          <LoginFooterLink>Đăng ký</LoginFooterLink>
          <LoginFooterLink>Đăng nhập</LoginFooterLink>
          <LoginFooterLink>Messenger</LoginFooterLink>
          <LoginFooterLink>Facebook Lite</LoginFooterLink>
          <LoginFooterLink>Watch</LoginFooterLink>
          <LoginFooterLink>Địa điểm</LoginFooterLink>
          <LoginFooterLink>Trò chơi</LoginFooterLink>
          <LoginFooterLink>Marketplace</LoginFooterLink>
          <LoginFooterLink>Meta Pay</LoginFooterLink>
          <LoginFooterLink>Meta Store</LoginFooterLink>
          <LoginFooterLink>Meta Quest</LoginFooterLink>
          <LoginFooterLink>Instagram</LoginFooterLink>
          <LoginFooterLink>Threads</LoginFooterLink>
          <LoginFooterLink>Chiến dịch gây quỹ</LoginFooterLink>
          <LoginFooterLink>Dịch vụ</LoginFooterLink>
          <LoginFooterLink>Trung tâm thông tin bỏ phiếu</LoginFooterLink>
          <LoginFooterLink>Chính sách quyền riêng tư</LoginFooterLink>
          <LoginFooterLink>Trung tâm quyền riêng tư</LoginFooterLink>
          <LoginFooterLink>Nhóm</LoginFooterLink>
          <LoginFooterLink>Giới thiệu</LoginFooterLink>
          <LoginFooterLink>Tạo quảng cáo</LoginFooterLink>
          <LoginFooterLink>Tạo Trang</LoginFooterLink>
          <LoginFooterLink>Nhà phát triển</LoginFooterLink>
          <LoginFooterLink>Tuyển dụng</LoginFooterLink>
          <LoginFooterLink>Cookie</LoginFooterLink>
          <LoginFooterLink>Lựa chọn quảng cáo</LoginFooterLink>
          <LoginFooterLink>Điều khoản</LoginFooterLink>
          <LoginFooterLink>Trợ giúp</LoginFooterLink>
          <LoginFooterLink>Tải thông tin liên hệ lên & đối tượng không phải người dùng</LoginFooterLink>
        </LoginFooterLinks>
        
        <LoginFooterCopyright>
          Meta © 2023
        </LoginFooterCopyright>
      </LoginFooter>
    </LoginContainer>
  );
};

export default Login; 
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: white;
  padding: 20px;
  text-align: center;
  color: #65676b;
  font-size: 12px;
  margin-top: 20px;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px;
`;

const FooterLink = styled.a`
  color: #65676b;
  text-decoration: none;
  margin: 0 8px 5px 0;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.div`
  margin-top: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink href="#">Tiếng Việt</FooterLink>
        <FooterLink href="#">English</FooterLink>
        <FooterLink href="#">中文(简体)</FooterLink>
        <FooterLink href="#">한국어</FooterLink>
        <FooterLink href="#">日本語</FooterLink>
        <FooterLink href="#">Français (France)</FooterLink>
        <FooterLink href="#">ภาษาไทย</FooterLink>
        <FooterLink href="#">Español</FooterLink>
        <FooterLink href="#">Português (Brasil)</FooterLink>
        <FooterLink href="#">Deutsch</FooterLink>
        <FooterLink href="#">Italiano</FooterLink>
      </FooterLinks>
      <FooterLinks>
        <FooterLink href="#">Đăng ký</FooterLink>
        <FooterLink href="#">Đăng nhập</FooterLink>
        <FooterLink href="#">Messenger</FooterLink>
        <FooterLink href="#">Facebook Lite</FooterLink>
        <FooterLink href="#">Watch</FooterLink>
        <FooterLink href="#">Địa điểm</FooterLink>
        <FooterLink href="#">Trò chơi</FooterLink>
        <FooterLink href="#">Marketplace</FooterLink>
        <FooterLink href="#">Meta Pay</FooterLink>
        <FooterLink href="#">Oculus</FooterLink>
        <FooterLink href="#">Portal</FooterLink>
        <FooterLink href="#">Instagram</FooterLink>
        <FooterLink href="#">Bulletin</FooterLink>
        <FooterLink href="#">Chiến dịch gây quỹ</FooterLink>
        <FooterLink href="#">Dịch vụ</FooterLink>
        <FooterLink href="#">Trung tâm thông tin bỏ phiếu</FooterLink>
        <FooterLink href="#">Chính sách quyền riêng tư</FooterLink>
        <FooterLink href="#">Trung tâm quyền riêng tư</FooterLink>
        <FooterLink href="#">Nhóm</FooterLink>
        <FooterLink href="#">Giới thiệu</FooterLink>
        <FooterLink href="#">Tạo quảng cáo</FooterLink>
        <FooterLink href="#">Tạo Trang</FooterLink>
        <FooterLink href="#">Nhà phát triển</FooterLink>
        <FooterLink href="#">Tuyển dụng</FooterLink>
        <FooterLink href="#">Cookie</FooterLink>
        <FooterLink href="#">Lựa chọn quảng cáo</FooterLink>
        <FooterLink href="#">Điều khoản</FooterLink>
        <FooterLink href="#">Trợ giúp</FooterLink>
      </FooterLinks>
      <Copyright>
        Meta © {new Date().getFullYear()}
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;

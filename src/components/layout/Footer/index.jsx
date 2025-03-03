import React from 'react';
import { Link } from 'react-router-dom';
import {
  FooterContainer,
  FooterLinks,
  FooterLink,
  FooterCopyright,
  FooterLanguages,
  FooterLanguage
} from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink as={Link} to="/">Tiếng Việt</FooterLink>
        <FooterLink as={Link} to="/">English (US)</FooterLink>
        <FooterLink as={Link} to="/">中文(简体)</FooterLink>
        <FooterLink as={Link} to="/">日本語</FooterLink>
        <FooterLink as={Link} to="/">한국어</FooterLink>
        <FooterLink as={Link} to="/">Français (France)</FooterLink>
        <FooterLink as={Link} to="/">ภาษาไทย</FooterLink>
        <FooterLink as={Link} to="/">Español</FooterLink>
        <FooterLink as={Link} to="/">Português (Brasil)</FooterLink>
        <FooterLink as={Link} to="/">Deutsch</FooterLink>
        <FooterLink as={Link} to="/">Italiano</FooterLink>
      </FooterLinks>
      
      <FooterLinks>
        <FooterLink as={Link} to="/signup">Đăng ký</FooterLink>
        <FooterLink as={Link} to="/login">Đăng nhập</FooterLink>
        <FooterLink as={Link} to="/messenger">Messenger</FooterLink>
        <FooterLink as={Link} to="/lite">Facebook Lite</FooterLink>
        <FooterLink as={Link} to="/watch">Watch</FooterLink>
        <FooterLink as={Link} to="/places">Địa điểm</FooterLink>
        <FooterLink as={Link} to="/games">Trò chơi</FooterLink>
        <FooterLink as={Link} to="/marketplace">Marketplace</FooterLink>
        <FooterLink as={Link} to="/meta-pay">Meta Pay</FooterLink>
        <FooterLink as={Link} to="/meta-store">Meta Store</FooterLink>
        <FooterLink as={Link} to="/meta-quest">Meta Quest</FooterLink>
        <FooterLink as={Link} to="/instagram">Instagram</FooterLink>
        <FooterLink as={Link} to="/threads">Threads</FooterLink>
        <FooterLink as={Link} to="/fundraisers">Chiến dịch gây quỹ</FooterLink>
        <FooterLink as={Link} to="/services">Dịch vụ</FooterLink>
        <FooterLink as={Link} to="/voting-information-center">Trung tâm thông tin bỏ phiếu</FooterLink>
        <FooterLink as={Link} to="/privacy-policy">Chính sách quyền riêng tư</FooterLink>
        <FooterLink as={Link} to="/privacy-center">Trung tâm quyền riêng tư</FooterLink>
        <FooterLink as={Link} to="/groups">Nhóm</FooterLink>
        <FooterLink as={Link} to="/about">Giới thiệu</FooterLink>
        <FooterLink as={Link} to="/create-ad">Tạo quảng cáo</FooterLink>
        <FooterLink as={Link} to="/create-page">Tạo Trang</FooterLink>
        <FooterLink as={Link} to="/developers">Nhà phát triển</FooterLink>
        <FooterLink as={Link} to="/careers">Tuyển dụng</FooterLink>
        <FooterLink as={Link} to="/cookies">Cookie</FooterLink>
        <FooterLink as={Link} to="/ad-choices">Lựa chọn quảng cáo</FooterLink>
        <FooterLink as={Link} to="/terms">Điều khoản</FooterLink>
        <FooterLink as={Link} to="/help">Trợ giúp</FooterLink>
        <FooterLink as={Link} to="/contact-uploading">Tải thông tin liên hệ lên & đối tượng không phải người dùng</FooterLink>
      </FooterLinks>
      
      <FooterCopyright>
        Meta © 2023
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer; 
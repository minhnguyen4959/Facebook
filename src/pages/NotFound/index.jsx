import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaHome } from 'react-icons/fa';
import {
  NotFoundContainer,
  NotFoundContent,
  NotFoundLogo,
  NotFoundTitle,
  NotFoundText,
  NotFoundButton
} from './styles';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <NotFoundLogo>
          <FaFacebook />
        </NotFoundLogo>
        <NotFoundTitle>Trang này không khả dụng</NotFoundTitle>
        <NotFoundText>
          Liên kết bạn đã theo dõi có thể bị hỏng hoặc trang có thể đã bị xóa.
        </NotFoundText>
        <NotFoundButton as={Link} to="/">
          <FaHome />
          Đi đến Trang chủ
        </NotFoundButton>
      </NotFoundContent>
    </NotFoundContainer>
  );
};

export default NotFound; 
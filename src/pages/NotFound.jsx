import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>404 - Không tìm thấy trang</h1>
      <p>Trang bạn đang tìm kiếm không tồn tại.</p>
      <Link to="/">Quay lại trang chủ</Link>
    </div>
  );
};

export default NotFound;

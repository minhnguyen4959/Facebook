import React from 'react';
import { Button, Icon } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <Icon icon="error" size={64} className="not-found-icon" />
        <h1>Trang không tồn tại</h1>
        <p>Trang bạn đang tìm kiếm có thể đã bị xóa hoặc không tồn tại.</p>
        <Link to="/">
          <Button intent="primary" text="Quay về trang chủ" icon="home" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound; 
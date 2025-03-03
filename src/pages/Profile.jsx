import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { id } = useParams();
  
  return (
    <div>
      <h1>Trang cá nhân</h1>
      <p>Đang xem hồ sơ của người dùng: {id}</p>
    </div>
  );
};

export default Profile;
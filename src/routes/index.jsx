import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import DefaultLayout from '../layouts/DefaultLayout';
import AuthLayout from '../layouts/AuthLayout';

// Pages
import {
  Home,
  Profile,
  Login,
  Register,
  NotFound,
  Friends,
  Marketplace,
  Watch,
  Groups,
  Memories,
  Saved,
  Events
} from '../pages';

// Auth guard
const PrivateRoute = ({ children }) => {
  // Kiểm tra xem người dùng đã đăng nhập chưa
  // Đây chỉ là mô phỏng, trong thực tế bạn sẽ kiểm tra từ context/redux store
  const isAuthenticated = true; // Giả sử người dùng đã đăng nhập
  
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Các trang yêu cầu đăng nhập */}
        <Route path="/" element={
          <PrivateRoute>
            <DefaultLayout />
          </PrivateRoute>
        }>
          <Route index element={<Home />} />
          <Route path="profile/:id" element={<Profile />} />
          <Route path="friends" element={<Friends />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="watch" element={<Watch />} />
          <Route path="groups" element={<Groups />} />
          <Route path="memories" element={<Memories />} />
          <Route path="saved" element={<Saved />} />
          <Route path="events" element={<Events />} />
        </Route>
        
        {/* Các trang không yêu cầu đăng nhập */}
        <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        
        {/* Trang 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router; 
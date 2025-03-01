import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Friends from './pages/Friends';
import Videos from './pages/Videos';
import Marketplace from './pages/Marketplace';
import Groups from './pages/Groups';
import NotFound from './pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/friends" element={<Friends />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/groups" element={<Groups />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes; 
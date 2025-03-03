import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserFriends, FaStore, FaVideo, FaCalendarAlt, FaHistory, FaBookmark, FaFlag, FaUsers, FaGamepad, FaRss } from 'react-icons/fa';
import {
  SidebarContainer,
  SidebarItem,
  SidebarIcon,
  SidebarText,
  SidebarDivider,
  SidebarTitle
} from './styles';

const LeftSidebar = () => {
  return (
    <SidebarContainer>
      <SidebarItem as={Link} to="/profile/me">
        <SidebarIcon>
          <img src="https://i.pravatar.cc/150?img=12" alt="User" />
        </SidebarIcon>
        <SidebarText>Tô Minh Đức</SidebarText>
      </SidebarItem>
      
      <SidebarItem as={Link} to="/friends">
        <SidebarIcon>
          <FaUserFriends />
        </SidebarIcon>
        <SidebarText>Bạn bè</SidebarText>
      </SidebarItem>
      
      <SidebarItem as={Link} to="/memories">
        <SidebarIcon>
          <FaHistory />
        </SidebarIcon>
        <SidebarText>Kỷ niệm</SidebarText>
      </SidebarItem>
      
      <SidebarItem as={Link} to="/saved">
        <SidebarIcon>
          <FaBookmark />
        </SidebarIcon>
        <SidebarText>Đã lưu</SidebarText>
      </SidebarItem>
      
      <SidebarItem as={Link} to="/groups">
        <SidebarIcon>
          <FaUsers />
        </SidebarIcon>
        <SidebarText>Nhóm</SidebarText>
      </SidebarItem>
      
      <SidebarItem as={Link} to="/watch">
        <SidebarIcon>
          <FaVideo />
        </SidebarIcon>
        <SidebarText>Video</SidebarText>
      </SidebarItem>
      
      <SidebarItem as={Link} to="/marketplace">
        <SidebarIcon>
          <FaStore />
        </SidebarIcon>
        <SidebarText>Marketplace</SidebarText>
      </SidebarItem>
      
      <SidebarItem as={Link} to="/feed">
        <SidebarIcon>
          <FaRss />
        </SidebarIcon>
        <SidebarText>Bảng feed</SidebarText>
      </SidebarItem>
      
      <SidebarDivider />
      
      <SidebarTitle>Lối tắt của bạn</SidebarTitle>
      
      <SidebarItem as={Link} to="/groups/brown-dust">
        <SidebarIcon>
          <FaUsers />
        </SidebarIcon>
        <SidebarText>Brown Dust 2 Việt Nam</SidebarText>
      </SidebarItem>
      
      <SidebarItem as={Link} to="/groups/tu-vi">
        <SidebarIcon>
          <FaUsers />
        </SidebarIcon>
        <SidebarText>TỬ VI VIỆT NAM (thầy Tuệ - Viện nghiên cứu Kiến trúc và Văn hóa)</SidebarText>
      </SidebarItem>
      
      <SidebarItem as={Link} to="/groups/gunny">
        <SidebarIcon>
          <FaGamepad />
        </SidebarIcon>
        <SidebarText>Show acc Gunny - Đức Anh Gunny</SidebarText>
      </SidebarItem>
      
      <SidebarItem as={Link} to="/groups/tu-vi-ly-so">
        <SidebarIcon>
          <FaUsers />
        </SidebarIcon>
        <SidebarText>TỬ VI Lý Số</SidebarText>
      </SidebarItem>
      
      <SidebarItem as={Link} to="/groups/brown-dust-2">
        <SidebarIcon>
          <FaUsers />
        </SidebarIcon>
        <SidebarText>Brown Dust 2 Mua Bán Trao Đổi Việt Nam</SidebarText>
      </SidebarItem>
    </SidebarContainer>
  );
};

export default LeftSidebar; 
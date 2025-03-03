import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUserFriends, FaUsers, FaStore, FaBookmark, FaCalendarAlt } from 'react-icons/fa';
import { MdOndemandVideo } from 'react-icons/md';
import { RiMemoriesFill } from 'react-icons/ri';
import {
  SidebarContainer,
  SidebarList,
  SidebarItem,
  SidebarIcon,
  SidebarText,
  SidebarDivider,
  SidebarTitle,
  SidebarShortcut,
  SidebarShortcutIcon,
  SidebarShortcutText,
  SidebarFooter,
  SidebarFooterLink
} from './styles';

const Sidebar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <SidebarContainer>
      <SidebarList>
        <SidebarItem as={Link} to="/profile/me" active={isActive('/profile/me')}>
          <img src="https://i.pravatar.cc/150?img=3" alt="Profile" />
          <SidebarText>Nguyễn Văn A</SidebarText>
        </SidebarItem>
        
        <SidebarItem as={Link} to="/friends" active={isActive('/friends')}>
          <SidebarIcon>
            <FaUserFriends />
          </SidebarIcon>
          <SidebarText>Bạn bè</SidebarText>
        </SidebarItem>
        
        <SidebarItem as={Link} to="/groups" active={isActive('/groups')}>
          <SidebarIcon>
            <FaUsers />
          </SidebarIcon>
          <SidebarText>Nhóm</SidebarText>
        </SidebarItem>
        
        <SidebarItem as={Link} to="/marketplace" active={isActive('/marketplace')}>
          <SidebarIcon>
            <FaStore />
          </SidebarIcon>
          <SidebarText>Marketplace</SidebarText>
        </SidebarItem>
        
        <SidebarItem as={Link} to="/watch" active={isActive('/watch')}>
          <SidebarIcon>
            <MdOndemandVideo />
          </SidebarIcon>
          <SidebarText>Watch</SidebarText>
        </SidebarItem>
        
        <SidebarItem as={Link} to="/memories" active={isActive('/memories')}>
          <SidebarIcon>
            <RiMemoriesFill />
          </SidebarIcon>
          <SidebarText>Kỷ niệm</SidebarText>
        </SidebarItem>
        
        <SidebarItem as={Link} to="/saved" active={isActive('/saved')}>
          <SidebarIcon>
            <FaBookmark />
          </SidebarIcon>
          <SidebarText>Đã lưu</SidebarText>
        </SidebarItem>
        
        <SidebarItem as={Link} to="/events" active={isActive('/events')}>
          <SidebarIcon>
            <FaCalendarAlt />
          </SidebarIcon>
          <SidebarText>Sự kiện</SidebarText>
        </SidebarItem>
        
        <SidebarItem>
          <SidebarIcon className="more">
            <span></span>
            <span></span>
            <span></span>
          </SidebarIcon>
          <SidebarText>Xem thêm</SidebarText>
        </SidebarItem>
      </SidebarList>
      
      <SidebarDivider />
      
      <SidebarTitle>Lối tắt của bạn</SidebarTitle>
      
      <SidebarList>
        <SidebarShortcut>
          <SidebarShortcutIcon>
            <img src="https://picsum.photos/id/237/200/200" alt="Group" />
          </SidebarShortcutIcon>
          <SidebarShortcutText>Nhóm Yêu thích Công nghệ</SidebarShortcutText>
        </SidebarShortcut>
        
        <SidebarShortcut>
          <SidebarShortcutIcon>
            <img src="https://picsum.photos/id/238/200/200" alt="Group" />
          </SidebarShortcutIcon>
          <SidebarShortcutText>Hội Du lịch Việt Nam</SidebarShortcutText>
        </SidebarShortcut>
        
        <SidebarShortcut>
          <SidebarShortcutIcon>
            <img src="https://picsum.photos/id/239/200/200" alt="Group" />
          </SidebarShortcutIcon>
          <SidebarShortcutText>Cộng đồng React Developers</SidebarShortcutText>
        </SidebarShortcut>
        
        <SidebarShortcut>
          <SidebarShortcutIcon>
            <img src="https://picsum.photos/id/240/200/200" alt="Group" />
          </SidebarShortcutIcon>
          <SidebarShortcutText>Hội Ẩm thực Việt Nam</SidebarShortcutText>
        </SidebarShortcut>
      </SidebarList>
      
      <SidebarFooter>
        <SidebarFooterLink href="#">Quyền riêng tư</SidebarFooterLink> · 
        <SidebarFooterLink href="#">Điều khoản</SidebarFooterLink> · 
        <SidebarFooterLink href="#">Quảng cáo</SidebarFooterLink> · 
        <SidebarFooterLink href="#">Lựa chọn quảng cáo</SidebarFooterLink> · 
        <SidebarFooterLink href="#">Cookie</SidebarFooterLink> · 
        <SidebarFooterLink href="#">Xem thêm</SidebarFooterLink> · 
        <SidebarFooterLink href="#">Meta © 2023</SidebarFooterLink>
      </SidebarFooter>
    </SidebarContainer>
  );
};

export default Sidebar; 
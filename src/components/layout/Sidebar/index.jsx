import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from '@blueprintjs/core';
import { useTheme } from '../../../hooks/useTheme.jsx';
import './Sidebar.css';

const Sidebar = ({ currentUser }) => {
  const { darkMode } = useTheme();
  
  const menuItems = [
    { path: '/', icon: 'home', label: 'Trang chủ' },
    { path: '/profile', icon: 'user', label: 'Trang cá nhân' },
    { path: '/friends', icon: 'people', label: 'Bạn bè' },
    { path: '/videos', icon: 'video', label: 'Video' },
    { path: '/groups', icon: 'group-objects', label: 'Nhóm' },
    { path: '/marketplace', icon: 'shop', label: 'Marketplace' },
    { path: '/gaming', icon: 'play', label: 'Trò chơi' }
  ];

  const shortcuts = [
    { 
      id: 1, 
      name: 'Lập trình viên Việt Nam', 
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      type: 'group'
    },
    { 
      id: 2, 
      name: 'React Developers', 
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      type: 'group'
    },
    { 
      id: 3, 
      name: 'Tin tức công nghệ', 
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      type: 'page'
    },
    { 
      id: 4, 
      name: 'Chia sẻ kiến thức UI/UX', 
      image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      type: 'group'
    },
    { 
      id: 5, 
      name: 'Việc làm IT', 
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
      type: 'page'
    }
  ];

  return (
    <div className={`sidebar ${darkMode ? 'dark-mode' : ''}`}>
      <div className="sidebar-content">
        <div className="sidebar-user">
          <NavLink to="/profile" className="sidebar-user-link">
            <div className="sidebar-avatar">
              <img src={currentUser.avatar} alt={currentUser.name} />
            </div>
            <div className="sidebar-username">{currentUser.name}</div>
          </NavLink>
        </div>
        
        <div className="sidebar-menu">
          {menuItems.map((item, index) => (
            <NavLink 
              key={index} 
              to={item.path} 
              className={({ isActive }) => 
                `sidebar-menu-item ${isActive ? 'active' : ''}`
              }
            >
              <Icon icon={item.icon} size={20} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
        
        <div className="sidebar-divider"></div>
        
        <div className="sidebar-shortcuts">
          <div className="sidebar-header">
            <h3>Lối tắt của bạn</h3>
          </div>
          
          {shortcuts.map(shortcut => (
            <a key={shortcut.id} href="#" className="sidebar-shortcut-item">
              <div className="sidebar-shortcut-image">
                <img src={shortcut.image} alt={shortcut.name} />
              </div>
              <div className="sidebar-shortcut-name">{shortcut.name}</div>
            </a>
          ))}
        </div>
        
        <div className="sidebar-divider"></div>
        
        <div className="sidebar-footer">
          <div className="sidebar-links">
            <a href="#">Quyền riêng tư</a>
            <a href="#">Điều khoản</a>
            <a href="#">Quảng cáo</a>
            <a href="#">Cookie</a>
            <a href="#">Lựa chọn quảng cáo</a>
          </div>
          <div className="sidebar-copyright">
            Facebook Clone © {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 
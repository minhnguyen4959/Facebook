import React from 'react';
import { Button, Icon } from '@blueprintjs/core';
import { useTheme } from '../../../hooks/useTheme.jsx';
import './RightSidebar.css';

const RightSidebar = () => {
  const { darkMode } = useTheme();
  
  const contacts = [
    { 
      id: 1, 
      name: 'Nguyễn Văn B', 
      avatar: 'https://i.pravatar.cc/150?img=11',
      online: true
    },
    { 
      id: 2, 
      name: 'Trần Thị C', 
      avatar: 'https://i.pravatar.cc/150?img=5',
      online: true
    },
    { 
      id: 3, 
      name: 'Lê Văn D', 
      avatar: 'https://i.pravatar.cc/150?img=12',
      online: false
    },
    { 
      id: 4, 
      name: 'Phạm Thị E', 
      avatar: 'https://i.pravatar.cc/150?img=9',
      online: true
    },
    { 
      id: 5, 
      name: 'Hoàng Văn F', 
      avatar: 'https://i.pravatar.cc/150?img=3',
      online: false
    }
  ];
  
  const birthdays = [
    {
      id: 1,
      name: 'Trần Thị C',
      date: 'Hôm nay'
    },
    {
      id: 2,
      name: 'Lê Văn D',
      date: 'Ngày mai'
    }
  ];
  
  const groups = [
    { 
      id: 1, 
      name: 'Lập trình viên Việt Nam', 
      avatar: `https://ui-avatars.com/api/?name=LTVN&background=4267B2&color=fff&size=128`,
      unread: 3
    },
    { 
      id: 2, 
      name: 'React Developers', 
      avatar: `https://ui-avatars.com/api/?name=RD&background=E7A33E&color=fff&size=128`,
      unread: 0
    },
    { 
      id: 3, 
      name: 'Chia sẻ kiến thức UI/UX', 
      avatar: `https://ui-avatars.com/api/?name=UIUX&background=F5533D&color=fff&size=128`,
      unread: 5
    }
  ];

  return (
    <div className={`right-sidebar ${darkMode ? 'dark-mode' : ''}`}>
      <div className="right-sidebar-section">
        <div className="right-sidebar-header">
          <h3>Sinh nhật</h3>
        </div>
        
        <div className="birthdays-list">
          {birthdays.map(birthday => (
            <div key={birthday.id} className="birthday-item">
              <Icon icon="gift" size={16} />
              <span>
                Hôm nay là sinh nhật của <strong>{birthday.name}</strong>
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="right-sidebar-divider"></div>
      
      <div className="right-sidebar-section">
        <div className="right-sidebar-header">
          <h3>Người liên hệ</h3>
          <div className="right-sidebar-actions">
            <Button icon="search" minimal={true} small={true} />
            <Button icon="more" minimal={true} small={true} />
          </div>
        </div>
        
        <div className="contacts-list">
          {contacts.map(contact => (
            <div key={contact.id} className="contact-item">
              <div className="contact-avatar">
                <img src={contact.avatar} alt={contact.name} />
                {contact.online && (
                  <div className="contact-online-indicator"></div>
                )}
              </div>
              <div className="contact-name">{contact.name}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="right-sidebar-footer">
        <Button icon="plus" text="Tạo nhóm chat mới" fill={true} minimal={true} />
      </div>
    </div>
  );
};

export default RightSidebar; 
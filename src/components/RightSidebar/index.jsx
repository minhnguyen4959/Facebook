import React from 'react';
import { FaBirthdayCake, FaVideo, FaUserFriends } from 'react-icons/fa';
import {
  RightSidebarContainer,
  SidebarTitle,
  ContactList,
  ContactItem,
  ContactAvatar,
  ContactName,
  ContactStatus,
  BirthdayCard,
  BirthdayIcon,
  BirthdayText,
  SidebarDivider,
  SidebarHeader,
  CreateRoomButton,
  CreateRoomIcon,
  CreateRoomText
} from './styles';

const RightSidebar = () => {
  // Dữ liệu mẫu cho danh sách liên hệ
  const contacts = [
    { id: 1, name: 'Nguyễn Thị B', avatar: 'https://i.pravatar.cc/150?img=5', online: true },
    { id: 2, name: 'Trần Văn C', avatar: 'https://i.pravatar.cc/150?img=6', online: true },
    { id: 3, name: 'Lê Thị D', avatar: 'https://i.pravatar.cc/150?img=7', online: false },
    { id: 4, name: 'Phạm Văn E', avatar: 'https://i.pravatar.cc/150?img=8', online: true },
    { id: 5, name: 'Hoàng Thị F', avatar: 'https://i.pravatar.cc/150?img=9', online: false },
    { id: 6, name: 'Đặng Văn G', avatar: 'https://i.pravatar.cc/150?img=10', online: true },
    { id: 7, name: 'Vũ Thị H', avatar: 'https://i.pravatar.cc/150?img=11', online: true },
    { id: 8, name: 'Bùi Văn I', avatar: 'https://i.pravatar.cc/150?img=12', online: false }
  ];

  return (
    <RightSidebarContainer>
      <BirthdayCard>
        <BirthdayIcon>
          <FaBirthdayCake />
        </BirthdayIcon>
        <BirthdayText>
          <strong>Trần Văn C</strong> và <strong>2 người khác</strong> có sinh nhật hôm nay.
        </BirthdayText>
      </BirthdayCard>
      
      <SidebarDivider />
      
      <SidebarHeader>
        <SidebarTitle>Người liên hệ</SidebarTitle>
        <CreateRoomButton>
          <CreateRoomIcon>
            <FaVideo />
          </CreateRoomIcon>
          <CreateRoomText>Tạo phòng họp mặt</CreateRoomText>
        </CreateRoomButton>
      </SidebarHeader>
      
      <ContactList>
        {contacts.map(contact => (
          <ContactItem key={contact.id}>
            <ContactAvatar>
              <img src={contact.avatar} alt={contact.name} />
              {contact.online && <ContactStatus />}
            </ContactAvatar>
            <ContactName>{contact.name}</ContactName>
          </ContactItem>
        ))}
      </ContactList>
    </RightSidebarContainer>
  );
};

export default RightSidebar; 
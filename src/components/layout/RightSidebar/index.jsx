import React from 'react';
import { FaVideo, FaSearch, FaEllipsisH, FaGift } from 'react-icons/fa';
import {
  SidebarContainer,
  SectionTitle,
  ContactsHeader,
  ContactsTitle,
  ContactsActions,
  ContactsAction,
  ContactsList,
  ContactItem,
  ContactAvatar,
  ContactName,
  OnlineIndicator,
  BirthdaySection,
  BirthdayIcon,
  BirthdayText,
  SponsoredSection,
  SponsoredItem,
  SponsoredImage,
  SponsoredContent,
  SponsoredTitle,
  SponsoredLink,
  SponsoredRating,
  Star
} from './styles';

// Dữ liệu mẫu cho danh sách liên hệ
const contactsData = [
  {
    id: 1,
    name: 'Minh Đức Hoàng',
    avatar: 'https://i.pravatar.cc/150?img=1',
    online: true
  },
  {
    id: 2,
    name: 'Lê Mạnh Đạt',
    avatar: 'https://i.pravatar.cc/150?img=2',
    online: true
  },
  {
    id: 3,
    name: 'Hoàng Mai',
    avatar: 'https://i.pravatar.cc/150?img=3',
    online: true
  },
  {
    id: 4,
    name: 'Lê Thanh Vân',
    avatar: 'https://i.pravatar.cc/150?img=4',
    online: true
  },
  {
    id: 5,
    name: 'Kiên Bùi',
    avatar: 'https://i.pravatar.cc/150?img=5',
    online: true
  },
  {
    id: 6,
    name: 'Hải Hà',
    avatar: 'https://i.pravatar.cc/150?img=6',
    online: true
  },
  {
    id: 7,
    name: 'Phạm Xuân Hiệu',
    avatar: 'https://i.pravatar.cc/150?img=7',
    online: true
  },
  {
    id: 8,
    name: 'Ngọc Quỳnh',
    avatar: 'https://i.pravatar.cc/150?img=8',
    online: true
  },
  {
    id: 9,
    name: 'Nguyễn Quang Minh',
    avatar: 'https://i.pravatar.cc/150?img=9',
    online: true
  },
  {
    id: 10,
    name: 'Phạm Quyền',
    avatar: 'https://i.pravatar.cc/150?img=10',
    online: true
  },
  {
    id: 11,
    name: 'Vương Nguyễn',
    avatar: 'https://i.pravatar.cc/150?img=11',
    online: true
  },
  {
    id: 12,
    name: 'Minh Anh',
    avatar: 'https://i.pravatar.cc/150?img=12',
    online: true
  },
  {
    id: 13,
    name: 'Hằng Lê',
    avatar: 'https://i.pravatar.cc/150?img=13',
    online: true
  },
  {
    id: 14,
    name: 'Phạm Trà Giang',
    avatar: 'https://i.pravatar.cc/150?img=14',
    online: true
  },
  {
    id: 15,
    name: 'Đặng Huy',
    avatar: 'https://i.pravatar.cc/150?img=15',
    online: true
  },
  {
    id: 16,
    name: 'Nguyễn Phương Quỳnh',
    avatar: 'https://i.pravatar.cc/150?img=16',
    online: true
  },
  {
    id: 17,
    name: 'Nguyễn Tiến Đạt',
    avatar: 'https://i.pravatar.cc/150?img=17',
    online: true
  }
];

const RightSidebar = () => {
  return (
    <SidebarContainer>
      <SectionTitle>Được tài trợ</SectionTitle>
      <SponsoredSection>
        <SponsoredItem>
          <SponsoredImage src="https://picsum.photos/id/237/100/100" alt="Sponsored" />
          <SponsoredContent>
            <SponsoredTitle>Dual Identity: Beast Inside, Beauty Outside.</SponsoredTitle>
            <SponsoredLink>lofree.co</SponsoredLink>
          </SponsoredContent>
        </SponsoredItem>
        <SponsoredItem>
          <SponsoredImage src="https://picsum.photos/id/238/100/100" alt="Sponsored" />
          <SponsoredContent>
            <SponsoredTitle>tradingview.com</SponsoredTitle>
            <SponsoredRating>
              <Star>★</Star>
              <Star>★</Star>
              <Star>★</Star>
              <Star>★</Star>
              <Star>★</Star>
              (4,99/5,0)
            </SponsoredRating>
          </SponsoredContent>
        </SponsoredItem>
      </SponsoredSection>

      <SectionTitle>Sinh nhật</SectionTitle>
      <BirthdaySection>
        <BirthdayIcon>
          <FaGift />
        </BirthdayIcon>
        <BirthdayText>
          Hôm nay là sinh nhật của <strong>Nguyễn Tiến Đạt</strong>.
        </BirthdayText>
      </BirthdaySection>
      
      <ContactsHeader>
        <ContactsTitle>Người liên hệ</ContactsTitle>
        <ContactsActions>
          <ContactsAction>
            <FaVideo />
          </ContactsAction>
          <ContactsAction>
            <FaSearch />
          </ContactsAction>
          <ContactsAction>
            <FaEllipsisH />
          </ContactsAction>
        </ContactsActions>
      </ContactsHeader>
      
      <ContactsList>
        {contactsData.map(contact => (
          <ContactItem key={contact.id}>
            <ContactAvatar>
              <img src={contact.avatar} alt={contact.name} />
              {contact.online && <OnlineIndicator />}
            </ContactAvatar>
            <ContactName>{contact.name}</ContactName>
          </ContactItem>
        ))}
      </ContactsList>
    </SidebarContainer>
  );
};

export default RightSidebar; 
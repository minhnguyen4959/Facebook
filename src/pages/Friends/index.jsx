import React, { useState } from 'react';
import { FaUserFriends, FaUserPlus, FaSearch, FaEllipsisH, FaCheck, FaTimes } from 'react-icons/fa';
import {
  FriendsContainer,
  FriendsLeftSidebar,
  FriendsContent,
  SidebarItem,
  SidebarIcon,
  SidebarText,
  SidebarBadge,
  FriendsHeader,
  FriendsTitle,
  SearchContainer,
  SearchIcon,
  SearchInput,
  FriendsTabs,
  FriendsTab,
  FriendsList,
  FriendCard,
  FriendAvatar,
  FriendInfo,
  FriendName,
  FriendMutual,
  FriendActions,
  FriendButton,
  FriendGrid,
  SuggestionCard,
  SuggestionAvatar,
  SuggestionInfo,
  SuggestionName,
  SuggestionMutual,
  SuggestionActions,
  SuggestionButton
} from './styles';

const Friends = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Dữ liệu mẫu cho lời mời kết bạn
  const friendRequests = [
    {
      id: 1,
      name: 'Nguyễn Thị B',
      avatar: 'https://i.pravatar.cc/150?img=5',
      mutualFriends: 5,
      time: '3 ngày'
    },
    {
      id: 2,
      name: 'Trần Văn C',
      avatar: 'https://i.pravatar.cc/150?img=6',
      mutualFriends: 2,
      time: '1 tuần'
    },
    {
      id: 3,
      name: 'Lê Thị D',
      avatar: 'https://i.pravatar.cc/150?img=7',
      mutualFriends: 8,
      time: '2 ngày'
    }
  ];
  
  // Dữ liệu mẫu cho gợi ý kết bạn
  const friendSuggestions = [
    {
      id: 4,
      name: 'Phạm Văn E',
      avatar: 'https://i.pravatar.cc/150?img=8',
      mutualFriends: 12
    },
    {
      id: 5,
      name: 'Hoàng Thị F',
      avatar: 'https://i.pravatar.cc/150?img=9',
      mutualFriends: 3
    },
    {
      id: 6,
      name: 'Đặng Văn G',
      avatar: 'https://i.pravatar.cc/150?img=10',
      mutualFriends: 7
    },
    {
      id: 7,
      name: 'Vũ Thị H',
      avatar: 'https://i.pravatar.cc/150?img=11',
      mutualFriends: 4
    },
    {
      id: 8,
      name: 'Bùi Văn I',
      avatar: 'https://i.pravatar.cc/150?img=12',
      mutualFriends: 9
    },
    {
      id: 9,
      name: 'Ngô Thị K',
      avatar: 'https://i.pravatar.cc/150?img=13',
      mutualFriends: 6
    }
  ];
  
  // Dữ liệu mẫu cho danh sách bạn bè
  const allFriends = [
    {
      id: 10,
      name: 'Lý Văn L',
      avatar: 'https://i.pravatar.cc/150?img=14',
      mutualFriends: 15
    },
    {
      id: 11,
      name: 'Đinh Thị M',
      avatar: 'https://i.pravatar.cc/150?img=15',
      mutualFriends: 8
    },
    {
      id: 12,
      name: 'Hồ Văn N',
      avatar: 'https://i.pravatar.cc/150?img=16',
      mutualFriends: 11
    },
    {
      id: 13,
      name: 'Trịnh Thị O',
      avatar: 'https://i.pravatar.cc/150?img=17',
      mutualFriends: 7
    },
    {
      id: 14,
      name: 'Đỗ Văn P',
      avatar: 'https://i.pravatar.cc/150?img=18',
      mutualFriends: 9
    },
    {
      id: 15,
      name: 'Lưu Thị Q',
      avatar: 'https://i.pravatar.cc/150?img=19',
      mutualFriends: 14
    }
  ];
  
  // Lọc dữ liệu dựa trên tab đang active và từ khóa tìm kiếm
  const getFilteredContent = () => {
    let content;
    
    switch (activeTab) {
      case 'requests':
        content = (
          <FriendsList>
            {friendRequests
              .filter(friend => friend.name.toLowerCase().includes(searchTerm.toLowerCase()))
              .map(friend => (
                <FriendCard key={friend.id}>
                  <FriendAvatar src={friend.avatar} alt={friend.name} />
                  <FriendInfo>
                    <FriendName>{friend.name}</FriendName>
                    <FriendMutual>{friend.mutualFriends} bạn chung</FriendMutual>
                    <div style={{ fontSize: '14px', color: '#65676B' }}>
                      {friend.time} trước
                    </div>
                  </FriendInfo>
                  <FriendActions>
                    <FriendButton primary>
                      <FaCheck />
                      Chấp nhận
                    </FriendButton>
                    <FriendButton>
                      <FaTimes />
                      Xóa
                    </FriendButton>
                  </FriendActions>
                </FriendCard>
              ))}
          </FriendsList>
        );
        break;
        
      case 'suggestions':
        content = (
          <FriendGrid>
            {friendSuggestions
              .filter(friend => friend.name.toLowerCase().includes(searchTerm.toLowerCase()))
              .map(friend => (
                <SuggestionCard key={friend.id}>
                  <SuggestionAvatar src={friend.avatar} alt={friend.name} />
                  <SuggestionInfo>
                    <SuggestionName>{friend.name}</SuggestionName>
                    <SuggestionMutual>{friend.mutualFriends} bạn chung</SuggestionMutual>
                  </SuggestionInfo>
                  <SuggestionActions>
                    <SuggestionButton primary>
                      <FaUserPlus />
                      Thêm bạn bè
                    </SuggestionButton>
                    <SuggestionButton>
                      <FaTimes />
                      Xóa
                    </SuggestionButton>
                  </SuggestionActions>
                </SuggestionCard>
              ))}
          </FriendGrid>
        );
        break;
        
      case 'all':
      default:
        content = (
          <FriendGrid>
            {allFriends
              .filter(friend => friend.name.toLowerCase().includes(searchTerm.toLowerCase()))
              .map(friend => (
                <SuggestionCard key={friend.id}>
                  <SuggestionAvatar src={friend.avatar} alt={friend.name} />
                  <SuggestionInfo>
                    <SuggestionName>{friend.name}</SuggestionName>
                    <SuggestionMutual>{friend.mutualFriends} bạn chung</SuggestionMutual>
                  </SuggestionInfo>
                  <SuggestionActions>
                    <SuggestionButton>
                      <FaEllipsisH />
                    </SuggestionButton>
                  </SuggestionActions>
                </SuggestionCard>
              ))}
          </FriendGrid>
        );
    }
    
    return content;
  };
  
  return (
    <FriendsContainer>
      <FriendsLeftSidebar>
        <SidebarItem active={activeTab === 'all'} onClick={() => setActiveTab('all')}>
          <SidebarIcon>
            <FaUserFriends />
          </SidebarIcon>
          <SidebarText>Tất cả bạn bè</SidebarText>
        </SidebarItem>
        
        <SidebarItem active={activeTab === 'requests'} onClick={() => setActiveTab('requests')}>
          <SidebarIcon>
            <FaUserPlus />
          </SidebarIcon>
          <SidebarText>Lời mời kết bạn</SidebarText>
          <SidebarBadge>{friendRequests.length}</SidebarBadge>
        </SidebarItem>
        
        <SidebarItem active={activeTab === 'suggestions'} onClick={() => setActiveTab('suggestions')}>
          <SidebarIcon>
            <FaUserFriends />
          </SidebarIcon>
          <SidebarText>Gợi ý</SidebarText>
        </SidebarItem>
      </FriendsLeftSidebar>
      
      <FriendsContent>
        <FriendsHeader>
          <FriendsTitle>
            {activeTab === 'all' && 'Bạn bè'}
            {activeTab === 'requests' && 'Lời mời kết bạn'}
            {activeTab === 'suggestions' && 'Những người bạn có thể biết'}
          </FriendsTitle>
          
          <SearchContainer>
            <SearchIcon>
              <FaSearch />
            </SearchIcon>
            <SearchInput 
              placeholder="Tìm kiếm bạn bè" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchContainer>
        </FriendsHeader>
        
        <FriendsTabs>
          <FriendsTab 
            active={activeTab === 'all'} 
            onClick={() => setActiveTab('all')}
          >
            Tất cả bạn bè
          </FriendsTab>
          <FriendsTab 
            active={activeTab === 'requests'} 
            onClick={() => setActiveTab('requests')}
          >
            Lời mời kết bạn
            <SidebarBadge>{friendRequests.length}</SidebarBadge>
          </FriendsTab>
          <FriendsTab 
            active={activeTab === 'suggestions'} 
            onClick={() => setActiveTab('suggestions')}
          >
            Gợi ý
          </FriendsTab>
        </FriendsTabs>
        
        {getFilteredContent()}
      </FriendsContent>
    </FriendsContainer>
  );
};

export default Friends; 
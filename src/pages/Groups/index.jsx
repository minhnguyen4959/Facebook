import React, { useState } from 'react';
import { FaUsers, FaSearch, FaUserPlus, FaUserFriends, FaGlobe, FaLock, FaRegBell, FaRegBookmark, FaEllipsisH, FaRegHeart, FaHeart, FaRegComment, FaShare, FaPlus } from 'react-icons/fa';
import {
  GroupsContainer,
  GroupsLeftSidebar,
  SidebarItem,
  SidebarIcon,
  SidebarText,
  GroupsContent,
  SearchContainer,
  SearchIcon,
  SearchInput,
  GroupsHeader,
  GroupsTitle,
  GroupsFilter,
  FilterButton,
  GroupsSection,
  SectionTitle,
  SectionLink,
  GroupsTabs,
  GroupsTab,
  GroupsGrid,
  GroupCard,
  GroupCoverImage,
  GroupInfo,
  GroupName,
  GroupMembers,
  GroupPrivacy,
  GroupActions,
  GroupButton,
  CreateGroupButton,
  CreateGroupIcon,
  CreateGroupText
} from './styles';

const Groups = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [joinedGroups, setJoinedGroups] = useState({});
  
  // Dữ liệu mẫu cho các nhóm
  const groups = [
    {
      id: 1,
      name: 'Yêu thích Nhiếp ảnh',
      image: 'https://picsum.photos/id/1/300/200',
      members: 12500,
      privacy: 'public',
      posts: 25,
      description: 'Nhóm dành cho những người yêu thích nhiếp ảnh, chia sẻ kinh nghiệm và tác phẩm.',
      category: 'Sở thích'
    },
    {
      id: 2,
      name: 'Hội Du lịch Việt Nam',
      image: 'https://picsum.photos/id/10/300/200',
      members: 45800,
      privacy: 'public',
      posts: 120,
      description: 'Chia sẻ kinh nghiệm du lịch, địa điểm đẹp và mẹo tiết kiệm chi phí khi đi du lịch.',
      category: 'Du lịch'
    },
    {
      id: 3,
      name: 'Cộng đồng Lập trình viên',
      image: 'https://picsum.photos/id/20/300/200',
      members: 32100,
      privacy: 'private',
      posts: 78,
      description: 'Nơi trao đổi kiến thức, chia sẻ kinh nghiệm và hỏi đáp về lập trình.',
      category: 'Công nghệ'
    },
    {
      id: 4,
      name: 'Hội Ẩm thực Việt',
      image: 'https://picsum.photos/id/30/300/200',
      members: 28900,
      privacy: 'public',
      posts: 95,
      description: 'Chia sẻ công thức nấu ăn, địa điểm ăn uống ngon và kinh nghiệm nấu nướng.',
      category: 'Ẩm thực'
    },
    {
      id: 5,
      name: 'Cộng đồng Marketing',
      image: 'https://picsum.photos/id/40/300/200',
      members: 18700,
      privacy: 'private',
      posts: 45,
      description: 'Nơi trao đổi kiến thức, chiến lược và kinh nghiệm trong lĩnh vực marketing.',
      category: 'Kinh doanh'
    },
    {
      id: 6,
      name: 'Hội Yêu thích Sách',
      image: 'https://picsum.photos/id/50/300/200',
      members: 15600,
      privacy: 'public',
      posts: 67,
      description: 'Chia sẻ sách hay, thảo luận về nội dung sách và trao đổi kinh nghiệm đọc sách.',
      category: 'Sở thích'
    }
  ];
  
  const handleJoinGroup = (groupId) => {
    setJoinedGroups(prev => ({
      ...prev,
      [groupId]: !prev[groupId]
    }));
  };
  
  const handleGroupClick = (group) => {
    setSelectedGroup(group);
  };
  
  const filteredGroups = groups.filter(group => {
    // Lọc theo tab đang chọn
    if (activeTab === 'joined' && !joinedGroups[group.id]) {
      return false;
    }
    
    // Lọc theo từ khóa tìm kiếm
    if (searchTerm && !group.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    return true;
  });
  
  return (
    <GroupsContainer>
      <GroupsLeftSidebar>
        <SidebarItem active={activeTab === 'all'} onClick={() => setActiveTab('all')}>
          <SidebarIcon>
            <FaUsers />
          </SidebarIcon>
          <SidebarText>Tất cả nhóm</SidebarText>
        </SidebarItem>
        
        <SidebarItem active={activeTab === 'joined'} onClick={() => setActiveTab('joined')}>
          <SidebarIcon>
            <FaUserFriends />
          </SidebarIcon>
          <SidebarText>Nhóm của bạn</SidebarText>
        </SidebarItem>
        
        <SidebarItem>
          <SidebarIcon>
            <FaRegBell />
          </SidebarIcon>
          <SidebarText>Thông báo</SidebarText>
        </SidebarItem>
        
        <SidebarItem>
          <SidebarIcon>
            <FaRegBookmark />
          </SidebarIcon>
          <SidebarText>Đã lưu</SidebarText>
        </SidebarItem>
        
        <CreateGroupButton>
          <CreateGroupIcon>
            <FaPlus />
          </CreateGroupIcon>
          <CreateGroupText>Tạo nhóm mới</CreateGroupText>
        </CreateGroupButton>
      </GroupsLeftSidebar>
      
      <GroupsContent>
        <GroupsHeader>
          <GroupsTitle>Nhóm</GroupsTitle>
          
          <SearchContainer>
            <SearchIcon>
              <FaSearch />
            </SearchIcon>
            <SearchInput 
              placeholder="Tìm kiếm nhóm" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchContainer>
        </GroupsHeader>
        
        <GroupsTabs>
          <GroupsTab 
            active={activeTab === 'all'} 
            onClick={() => setActiveTab('all')}
          >
            Tất cả
          </GroupsTab>
          <GroupsTab 
            active={activeTab === 'joined'} 
            onClick={() => setActiveTab('joined')}
          >
            Đã tham gia
          </GroupsTab>
          <GroupsTab 
            active={activeTab === 'discover'} 
            onClick={() => setActiveTab('discover')}
          >
            Khám phá
          </GroupsTab>
        </GroupsTabs>
        
        <GroupsSection>
          <SectionTitle>
            {activeTab === 'all' && 'Tất cả nhóm'}
            {activeTab === 'joined' && 'Nhóm bạn đã tham gia'}
            {activeTab === 'discover' && 'Nhóm có thể bạn quan tâm'}
          </SectionTitle>
          
          <GroupsGrid>
            {filteredGroups.map(group => (
              <GroupCard key={group.id} onClick={() => handleGroupClick(group)}>
                <GroupCoverImage src={group.image} alt={group.name} />
                <GroupInfo>
                  <GroupName>{group.name}</GroupName>
                  <GroupMembers>{group.members.toLocaleString()} thành viên</GroupMembers>
                  <GroupPrivacy>
                    {group.privacy === 'public' ? (
                      <>
                        <FaGlobe /> Công khai
                      </>
                    ) : (
                      <>
                        <FaLock /> Riêng tư
                      </>
                    )}
                  </GroupPrivacy>
                  
                  <GroupActions>
                    <GroupButton 
                      primary={!joinedGroups[group.id]} 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleJoinGroup(group.id);
                      }}
                    >
                      {joinedGroups[group.id] ? 'Đã tham gia' : 'Tham gia'}
                    </GroupButton>
                  </GroupActions>
                </GroupInfo>
              </GroupCard>
            ))}
          </GroupsGrid>
        </GroupsSection>
      </GroupsContent>
    </GroupsContainer>
  );
};

export default Groups; 
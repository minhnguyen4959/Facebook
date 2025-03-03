import React, { useState } from 'react';
import { FaSearch, FaHeart, FaRegHeart, FaFilter, FaMapMarkerAlt, FaRegComment, FaShare, FaEllipsisH, FaRegBookmark, FaBookmark, FaUserFriends, FaRegClock, FaCamera } from 'react-icons/fa';
import {
  DatingContainer,
  DatingLeftSidebar,
  SidebarItem,
  SidebarIcon,
  SidebarText,
  SidebarDivider,
  SidebarTitle,
  DatingContent,
  DatingHeader,
  DatingTitle,
  SearchContainer,
  SearchIcon,
  SearchInput,
  FiltersContainer,
  FilterButton,
  FilterItem,
  FilterLabel,
  FilterSelect,
  ProfilesGrid,
  ProfileCard,
  ProfileImage,
  ProfileInfo,
  ProfileName,
  ProfileLocation,
  ProfileBio,
  ProfileStats,
  ProfileStat,
  ProfileActions,
  ProfileButton,
  DiscoverSection,
  DiscoverTitle,
  DiscoverGrid,
  DiscoverCard,
  DiscoverImage,
  DiscoverInfo,
  DiscoverName,
  DiscoverLocation,
  DiscoverMatch,
  DiscoverActions,
  DiscoverButton,
  MatchesContainer,
  MatchesTitle,
  MatchesList,
  MatchItem,
  MatchAvatar,
  MatchInfo,
  MatchName,
  MatchLastMessage,
  MatchTime,
  ProfileDetailContainer,
  ProfileDetailHeader,
  ProfileDetailImages,
  ProfileDetailImage,
  ProfileDetailInfo,
  ProfileDetailName,
  ProfileDetailLocation,
  ProfileDetailBio,
  ProfileDetailStats,
  ProfileDetailStat,
  ProfileDetailSection,
  ProfileDetailSectionTitle,
  ProfileDetailList,
  ProfileDetailListItem,
  ProfileDetailActions,
  ProfileDetailButton,
  ProfileDetailTabs,
  ProfileDetailTab,
  ProfileDetailContent,
  ProfileDetailPhotos,
  ProfileDetailPhoto,
  ProfileDetailInterests,
  ProfileDetailInterest
} from './styles';

const Dating = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [activeTab, setActiveTab] = useState('photos');
  const [likedProfiles, setLikedProfiles] = useState({});
  const [savedProfiles, setSavedProfiles] = useState({});
  const [filters, setFilters] = useState({
    gender: '',
    ageRange: '',
    location: '',
    interests: ''
  });
  
  // Dữ liệu mẫu cho hồ sơ người dùng
  const profilesData = [
    {
      id: 1,
      name: 'Nguyễn Thị An',
      age: 28,
      location: 'Hà Nội',
      distance: '5 km',
      bio: 'Yêu thích du lịch, đọc sách và nấu ăn. Đang tìm kiếm một mối quan hệ nghiêm túc.',
      images: [
        'https://picsum.photos/id/1005/600/800',
        'https://picsum.photos/id/1011/600/800',
        'https://picsum.photos/id/1027/600/800'
      ],
      interests: ['Du lịch', 'Đọc sách', 'Nấu ăn', 'Yoga', 'Nhiếp ảnh'],
      occupation: 'Giáo viên tiếng Anh',
      education: 'Đại học Ngoại ngữ',
      matchPercentage: 85
    },
    {
      id: 2,
      name: 'Trần Văn Bình',
      age: 32,
      location: 'Hồ Chí Minh',
      distance: '8 km',
      bio: 'Người năng động, thích thể thao và âm nhạc. Tìm kiếm người bạn đồng hành có cùng sở thích.',
      images: [
        'https://picsum.photos/id/1012/600/800',
        'https://picsum.photos/id/1025/600/800'
      ],
      interests: ['Thể thao', 'Âm nhạc', 'Du lịch', 'Công nghệ', 'Ẩm thực'],
      occupation: 'Kỹ sư phần mềm',
      education: 'Đại học Bách Khoa',
      matchPercentage: 72
    },
    {
      id: 3,
      name: 'Lê Thị Cẩm',
      age: 26,
      location: 'Đà Nẵng',
      distance: '3 km',
      bio: 'Yêu thiên nhiên, thích khám phá những địa điểm mới. Đang tìm một người có thể cùng chia sẻ những khoảnh khắc đẹp trong cuộc sống.',
      images: [
        'https://picsum.photos/id/1013/600/800',
        'https://picsum.photos/id/1014/600/800',
        'https://picsum.photos/id/1015/600/800'
      ],
      interests: ['Thiên nhiên', 'Leo núi', 'Cắm trại', 'Nhiếp ảnh', 'Âm nhạc'],
      occupation: 'Nhà thiết kế đồ họa',
      education: 'Đại học Mỹ thuật',
      matchPercentage: 90
    },
    {
      id: 4,
      name: 'Phạm Văn Dũng',
      age: 30,
      location: 'Hà Nội',
      distance: '10 km',
      bio: 'Người hướng nội, thích đọc sách và xem phim. Tìm kiếm một người có thể cùng tận hưởng những buổi tối yên tĩnh.',
      images: [
        'https://picsum.photos/id/1016/600/800',
        'https://picsum.photos/id/1017/600/800'
      ],
      interests: ['Đọc sách', 'Xem phim', 'Cà phê', 'Nấu ăn', 'Chơi game'],
      occupation: 'Nhà văn',
      education: 'Đại học Văn hóa',
      matchPercentage: 65
    },
    {
      id: 5,
      name: 'Hoàng Thị Em',
      age: 27,
      location: 'Hồ Chí Minh',
      distance: '7 km',
      bio: 'Năng động, vui vẻ và thích giao lưu. Đang tìm kiếm một người có thể cùng khám phá những điều mới mẻ trong cuộc sống.',
      images: [
        'https://picsum.photos/id/1018/600/800',
        'https://picsum.photos/id/1019/600/800',
        'https://picsum.photos/id/1020/600/800'
      ],
      interests: ['Du lịch', 'Ẩm thực', 'Nhảy', 'Yoga', 'Học ngôn ngữ mới'],
      occupation: 'Quản lý sự kiện',
      education: 'Đại học Kinh tế',
      matchPercentage: 78
    },
    {
      id: 6,
      name: 'Ngô Văn Phúc',
      age: 29,
      location: 'Đà Nẵng',
      distance: '12 km',
      bio: 'Yêu thích thể thao, đặc biệt là bóng rổ và bơi lội. Tìm kiếm một người có lối sống lành mạnh và tích cực.',
      images: [
        'https://picsum.photos/id/1021/600/800',
        'https://picsum.photos/id/1022/600/800'
      ],
      interests: ['Bóng rổ', 'Bơi lội', 'Chạy bộ', 'Nấu ăn', 'Du lịch'],
      occupation: 'Huấn luyện viên thể hình',
      education: 'Đại học Thể dục Thể thao',
      matchPercentage: 82
    }
  ];
  
  // Dữ liệu mẫu cho các cuộc trò chuyện
  const matchesData = [
    {
      id: 101,
      name: 'Nguyễn Thị An',
      avatar: 'https://picsum.photos/id/1005/100/100',
      lastMessage: 'Hẹn gặp lại bạn vào cuối tuần nhé!',
      time: '10 phút trước',
      unread: true
    },
    {
      id: 102,
      name: 'Lê Thị Cẩm',
      avatar: 'https://picsum.photos/id/1013/100/100',
      lastMessage: 'Cảm ơn vì buổi hẹn hôm qua, rất vui được gặp bạn.',
      time: '2 giờ trước',
      unread: false
    },
    {
      id: 103,
      name: 'Hoàng Thị Em',
      avatar: 'https://picsum.photos/id/1018/100/100',
      lastMessage: 'Bạn thích ăn món gì? Mình biết một nhà hàng ngon ở gần đây.',
      time: '1 ngày trước',
      unread: false
    }
  ];
  
  const handleLikeProfile = (id) => {
    setLikedProfiles(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  const handleSaveProfile = (id) => {
    setSavedProfiles(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
  };
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const getFilteredProfiles = () => {
    let filteredProfiles = profilesData;
    
    if (searchTerm) {
      filteredProfiles = filteredProfiles.filter(profile => 
        profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.interests.some(interest => interest.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    if (filters.gender) {
      // Giả định giới tính từ tên (đơn giản hóa)
      if (filters.gender === 'Nam') {
        filteredProfiles = filteredProfiles.filter(profile => 
          profile.name.includes('Văn') || !profile.name.includes('Thị')
        );
      } else if (filters.gender === 'Nữ') {
        filteredProfiles = filteredProfiles.filter(profile => 
          profile.name.includes('Thị')
        );
      }
    }
    
    if (filters.ageRange) {
      if (filters.ageRange === '18-25') {
        filteredProfiles = filteredProfiles.filter(profile => profile.age >= 18 && profile.age <= 25);
      } else if (filters.ageRange === '26-35') {
        filteredProfiles = filteredProfiles.filter(profile => profile.age >= 26 && profile.age <= 35);
      } else if (filters.ageRange === '36+') {
        filteredProfiles = filteredProfiles.filter(profile => profile.age >= 36);
      }
    }
    
    if (filters.location) {
      filteredProfiles = filteredProfiles.filter(profile => profile.location === filters.location);
    }
    
    return filteredProfiles;
  };
  
  const renderProfileDetail = () => {
    if (!selectedProfile) return null;
    
    return (
      <ProfileDetailContainer>
        <ProfileDetailHeader>
          <ProfileDetailImages>
            <ProfileDetailImage src={selectedProfile.images[0]} alt={selectedProfile.name} />
          </ProfileDetailImages>
          
          <ProfileDetailInfo>
            <ProfileDetailName>{selectedProfile.name}, {selectedProfile.age}</ProfileDetailName>
            <ProfileDetailLocation>
              <FaMapMarkerAlt /> {selectedProfile.location} • {selectedProfile.distance}
            </ProfileDetailLocation>
            <ProfileDetailBio>{selectedProfile.bio}</ProfileDetailBio>
            
            <ProfileDetailStats>
              <ProfileDetailStat>
                <FaUserFriends />
                <span>Nghề nghiệp:</span>
                <strong>{selectedProfile.occupation}</strong>
              </ProfileDetailStat>
              <ProfileDetailStat>
                <FaRegClock />
                <span>Học vấn:</span>
                <strong>{selectedProfile.education}</strong>
              </ProfileDetailStat>
              <ProfileDetailStat>
                <FaHeart />
                <span>Độ phù hợp:</span>
                <strong>{selectedProfile.matchPercentage}%</strong>
              </ProfileDetailStat>
            </ProfileDetailStats>
            
            <ProfileDetailActions>
              <ProfileDetailButton primary>
                <FaRegComment />
                Nhắn tin
              </ProfileDetailButton>
              <ProfileDetailButton 
                onClick={() => handleLikeProfile(selectedProfile.id)}
                active={likedProfiles[selectedProfile.id]}
              >
                {likedProfiles[selectedProfile.id] ? <FaHeart /> : <FaRegHeart />}
                {likedProfiles[selectedProfile.id] ? 'Đã thích' : 'Thích'}
              </ProfileDetailButton>
              <ProfileDetailButton 
                onClick={() => handleSaveProfile(selectedProfile.id)}
              >
                {savedProfiles[selectedProfile.id] ? <FaBookmark /> : <FaRegBookmark />}
                {savedProfiles[selectedProfile.id] ? 'Đã lưu' : 'Lưu'}
              </ProfileDetailButton>
            </ProfileDetailActions>
          </ProfileDetailInfo>
        </ProfileDetailHeader>
        
        <ProfileDetailTabs>
          <ProfileDetailTab 
            active={activeTab === 'photos'} 
            onClick={() => setActiveTab('photos')}
          >
            Hình ảnh
          </ProfileDetailTab>
          <ProfileDetailTab 
            active={activeTab === 'interests'} 
            onClick={() => setActiveTab('interests')}
          >
            Sở thích
          </ProfileDetailTab>
        </ProfileDetailTabs>
        
        <ProfileDetailContent>
          {activeTab === 'photos' && (
            <ProfileDetailPhotos>
              {selectedProfile.images.map((image, index) => (
                <ProfileDetailPhoto key={index} src={image} alt={`${selectedProfile.name} - ${index + 1}`} />
              ))}
            </ProfileDetailPhotos>
          )}
          
          {activeTab === 'interests' && (
            <ProfileDetailInterests>
              {selectedProfile.interests.map((interest, index) => (
                <ProfileDetailInterest key={index}>
                  {interest}
                </ProfileDetailInterest>
              ))}
            </ProfileDetailInterests>
          )}
        </ProfileDetailContent>
        
        <ProfileDetailButton onClick={() => setSelectedProfile(null)}>
          Quay lại danh sách
        </ProfileDetailButton>
      </ProfileDetailContainer>
    );
  };
  
  return (
    <DatingContainer>
      <DatingLeftSidebar>
        <SidebarItem active>
          <SidebarIcon>
            <FaHeart />
          </SidebarIcon>
          <SidebarText>Khám phá</SidebarText>
        </SidebarItem>
        
        <SidebarItem>
          <SidebarIcon>
            <FaRegComment />
          </SidebarIcon>
          <SidebarText>Tin nhắn</SidebarText>
        </SidebarItem>
        
        <SidebarItem>
          <SidebarIcon>
            <FaRegBookmark />
          </SidebarIcon>
          <SidebarText>Đã lưu</SidebarText>
        </SidebarItem>
        
        <SidebarDivider />
        
        <SidebarTitle>Lọc theo</SidebarTitle>
        
        <SidebarItem>
          <SidebarText>Gần đây</SidebarText>
        </SidebarItem>
        
        <SidebarItem>
          <SidebarText>Độ phù hợp cao</SidebarText>
        </SidebarItem>
        
        <SidebarItem>
          <SidebarText>Mới tham gia</SidebarText>
        </SidebarItem>
        
        <SidebarDivider />
        
        <SidebarTitle>Tin nhắn gần đây</SidebarTitle>
        
        {matchesData.map(match => (
          <MatchItem key={match.id} unread={match.unread}>
            <MatchAvatar src={match.avatar} alt={match.name} />
            <MatchInfo>
              <MatchName>{match.name}</MatchName>
              <MatchLastMessage>{match.lastMessage}</MatchLastMessage>
            </MatchInfo>
            <MatchTime>{match.time}</MatchTime>
          </MatchItem>
        ))}
      </DatingLeftSidebar>
      
      <DatingContent>
        <DatingHeader>
          <DatingTitle>Hẹn hò</DatingTitle>
          
          <SearchContainer>
            <SearchIcon>
              <FaSearch />
            </SearchIcon>
            <SearchInput 
              placeholder="Tìm kiếm" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchContainer>
        </DatingHeader>
        
        <FiltersContainer>
          <FilterButton>
            <FaFilter />
            Bộ lọc
          </FilterButton>
          
          <FilterItem>
            <FilterLabel>Giới tính</FilterLabel>
            <FilterSelect 
              name="gender" 
              value={filters.gender}
              onChange={handleFilterChange}
            >
              <option value="">Tất cả</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </FilterSelect>
          </FilterItem>
          
          <FilterItem>
            <FilterLabel>Độ tuổi</FilterLabel>
            <FilterSelect 
              name="ageRange" 
              value={filters.ageRange}
              onChange={handleFilterChange}
            >
              <option value="">Tất cả</option>
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
              <option value="36+">36+</option>
            </FilterSelect>
          </FilterItem>
          
          <FilterItem>
            <FilterLabel>Địa điểm</FilterLabel>
            <FilterSelect 
              name="location" 
              value={filters.location}
              onChange={handleFilterChange}
            >
              <option value="">Tất cả</option>
              <option value="Hà Nội">Hà Nội</option>
              <option value="Hồ Chí Minh">Hồ Chí Minh</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
            </FilterSelect>
          </FilterItem>
        </FiltersContainer>
        
        {selectedProfile ? (
          renderProfileDetail()
        ) : (
          <>
            <DiscoverSection>
              <DiscoverTitle>Gợi ý cho bạn</DiscoverTitle>
              <DiscoverGrid>
                {getFilteredProfiles().slice(0, 3).map(profile => (
                  <DiscoverCard key={profile.id}>
                    <DiscoverImage src={profile.images[0]} alt={profile.name} />
                    <DiscoverInfo>
                      <DiscoverName>{profile.name}, {profile.age}</DiscoverName>
                      <DiscoverLocation>
                        <FaMapMarkerAlt /> {profile.location} • {profile.distance}
                      </DiscoverLocation>
                      <DiscoverMatch>
                        <FaHeart /> {profile.matchPercentage}% phù hợp
                      </DiscoverMatch>
                    </DiscoverInfo>
                    <DiscoverActions>
                      <DiscoverButton primary onClick={() => handleProfileClick(profile)}>
                        Xem hồ sơ
                      </DiscoverButton>
                      <DiscoverButton 
                        onClick={() => handleLikeProfile(profile.id)}
                        active={likedProfiles[profile.id]}
                      >
                        {likedProfiles[profile.id] ? <FaHeart /> : <FaRegHeart />}
                      </DiscoverButton>
                    </DiscoverActions>
                  </DiscoverCard>
                ))}
              </DiscoverGrid>
            </DiscoverSection>
            
            <ProfilesGrid>
              {getFilteredProfiles().map(profile => (
                <ProfileCard key={profile.id}>
                  <ProfileImage src={profile.images[0]} alt={profile.name} />
                  <ProfileInfo>
                    <ProfileName>{profile.name}, {profile.age}</ProfileName>
                    <ProfileLocation>
                      <FaMapMarkerAlt /> {profile.location} • {profile.distance}
                    </ProfileLocation>
                    <ProfileBio>{profile.bio}</ProfileBio>
                    <ProfileStats>
                      <ProfileStat>
                        <FaHeart /> {profile.matchPercentage}% phù hợp
                      </ProfileStat>
                      <ProfileStat>
                        <FaUserFriends /> {profile.occupation}
                      </ProfileStat>
                    </ProfileStats>
                  </ProfileInfo>
                  <ProfileActions>
                    <ProfileButton primary onClick={() => handleProfileClick(profile)}>
                      Xem hồ sơ
                    </ProfileButton>
                    <ProfileButton 
                      onClick={() => handleLikeProfile(profile.id)}
                      active={likedProfiles[profile.id]}
                    >
                      {likedProfiles[profile.id] ? <FaHeart /> : <FaRegHeart />}
                      {likedProfiles[profile.id] ? 'Đã thích' : 'Thích'}
                    </ProfileButton>
                    <ProfileButton 
                      onClick={() => handleSaveProfile(profile.id)}
                    >
                      {savedProfiles[profile.id] ? <FaBookmark /> : <FaRegBookmark />}
                    </ProfileButton>
                  </ProfileActions>
                </ProfileCard>
              ))}
            </ProfilesGrid>
          </>
        )}
      </DatingContent>
    </DatingContainer>
  );
};

export default Dating; 
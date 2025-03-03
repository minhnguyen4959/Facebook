import React, { useState } from 'react';
import { FaHistory, FaComment, FaHeart, FaShare, FaUserFriends, FaImage, FaVideo, FaSearch, FaFilter, FaCalendarAlt, FaTrash, FaEllipsisH, FaEye, FaEyeSlash, FaLock } from 'react-icons/fa';
import {
  ActivityContainer,
  ActivityHeader,
  ActivityTitle,
  ActivityDescription,
  ActivityContent,
  ActivityLeftSidebar,
  CategoryList,
  CategoryItem,
  CategoryIcon,
  CategoryText,
  ActivityMainContent,
  FilterSection,
  FilterTitle,
  FilterOptions,
  FilterOption,
  DateFilter,
  DateFilterLabel,
  DateFilterInput,
  SearchContainer,
  SearchIcon,
  SearchInput,
  ActivityList,
  ActivityItem,
  ActivityIcon,
  ActivityInfo,
  ActivityText,
  ActivityDate,
  ActivityActions,
  ActivityAction,
  ActivityEmpty,
  EmptyIcon,
  EmptyText,
  EmptyDescription,
  ActivityButton,
  ActivityDropdown,
  DropdownContent,
  DropdownItem,
  Pagination,
  PageButton,
  PageInfo
} from './styles';

const ActivityLog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState({
    from: '',
    to: ''
  });
  const [showDropdown, setShowDropdown] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Dữ liệu mẫu cho danh mục
  const categories = [
    { id: 'all', name: 'Tất cả hoạt động', icon: <FaHistory /> },
    { id: 'posts', name: 'Bài đăng của bạn', icon: <FaComment /> },
    { id: 'likes', name: 'Lượt thích và phản ứng', icon: <FaHeart /> },
    { id: 'comments', name: 'Bình luận', icon: <FaComment /> },
    { id: 'friends', name: 'Bạn bè', icon: <FaUserFriends /> },
    { id: 'photos', name: 'Ảnh và video', icon: <FaImage /> },
    { id: 'shares', name: 'Chia sẻ', icon: <FaShare /> }
  ];
  
  // Dữ liệu mẫu cho hoạt động
  const activities = [
    {
      id: 1,
      type: 'post',
      text: 'Bạn đã đăng một bài viết',
      content: 'Hôm nay thật là một ngày tuyệt vời!',
      date: '2 giờ trước',
      privacy: 'friends',
      category: 'posts'
    },
    {
      id: 2,
      type: 'like',
      text: 'Bạn đã thích bài viết của Nguyễn Văn A',
      content: 'Chúc mừng sinh nhật bạn!',
      date: '5 giờ trước',
      category: 'likes'
    },
    {
      id: 3,
      type: 'comment',
      text: 'Bạn đã bình luận về bài viết của Trần Thị B',
      content: 'Cảm ơn bạn đã chia sẻ!',
      date: '1 ngày trước',
      category: 'comments'
    },
    {
      id: 4,
      type: 'friend',
      text: 'Bạn đã kết bạn với Lê Văn C',
      date: '2 ngày trước',
      category: 'friends'
    },
    {
      id: 5,
      type: 'photo',
      text: 'Bạn đã đăng một ảnh mới',
      content: 'Kỷ niệm chuyến du lịch Đà Lạt',
      date: '3 ngày trước',
      privacy: 'public',
      category: 'photos'
    },
    {
      id: 6,
      type: 'share',
      text: 'Bạn đã chia sẻ bài viết của Phạm Thị D',
      content: 'Tin tức mới nhất về công nghệ',
      date: '4 ngày trước',
      category: 'shares'
    },
    {
      id: 7,
      type: 'video',
      text: 'Bạn đã đăng một video mới',
      content: 'Hướng dẫn nấu món ăn ngon',
      date: '5 ngày trước',
      privacy: 'friends',
      category: 'photos'
    },
    {
      id: 8,
      type: 'post',
      text: 'Bạn đã cập nhật trạng thái',
      content: 'Đang tìm kiếm cơ hội mới!',
      date: '1 tuần trước',
      privacy: 'public',
      category: 'posts'
    }
  ];
  
  const getActivityIcon = (type) => {
    switch (type) {
      case 'post':
        return <FaComment />;
      case 'like':
        return <FaHeart />;
      case 'comment':
        return <FaComment />;
      case 'friend':
        return <FaUserFriends />;
      case 'photo':
        return <FaImage />;
      case 'video':
        return <FaVideo />;
      case 'share':
        return <FaShare />;
      default:
        return <FaHistory />;
    }
  };
  
  const getPrivacyIcon = (privacy) => {
    switch (privacy) {
      case 'public':
        return <FaEye />;
      case 'friends':
        return <FaUserFriends />;
      case 'private':
        return <FaLock />;
      default:
        return null;
    }
  };
  
  const handleDateChange = (e, field) => {
    setDateRange(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };
  
  const toggleDropdown = (id) => {
    setShowDropdown(showDropdown === id ? null : id);
  };
  
  const handleDeleteActivity = (id) => {
    // Xử lý xóa hoạt động
    console.log(`Xóa hoạt động ${id}`);
    setShowDropdown(null);
  };
  
  const handleHideActivity = (id) => {
    // Xử lý ẩn hoạt động
    console.log(`Ẩn hoạt động ${id}`);
    setShowDropdown(null);
  };
  
  const handlePrivacyChange = (id) => {
    // Xử lý thay đổi quyền riêng tư
    console.log(`Thay đổi quyền riêng tư cho hoạt động ${id}`);
    setShowDropdown(null);
  };
  
  const filteredActivities = activities.filter(activity => {
    // Lọc theo danh mục
    if (activeCategory !== 'all' && activity.category !== activeCategory) {
      return false;
    }
    
    // Lọc theo từ khóa tìm kiếm
    if (searchTerm && !activity.text.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !activity.content?.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Lọc theo ngày (có thể bổ sung sau)
    
    return true;
  });
  
  // Phân trang
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredActivities.length / itemsPerPage);
  const paginatedActivities = filteredActivities.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  return (
    <ActivityContainer>
      <ActivityHeader>
        <ActivityTitle>Nhật ký hoạt động</ActivityTitle>
        <ActivityDescription>
          Xem lại các hoạt động của bạn trên nền tảng.
        </ActivityDescription>
        
        <SearchContainer>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
          <SearchInput 
            placeholder="Tìm kiếm hoạt động..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
      </ActivityHeader>
      
      <ActivityContent>
        <ActivityLeftSidebar>
          <CategoryList>
            {categories.map(category => (
              <CategoryItem 
                key={category.id}
                active={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              >
                <CategoryIcon active={activeCategory === category.id}>
                  {category.icon}
                </CategoryIcon>
                <CategoryText>{category.name}</CategoryText>
              </CategoryItem>
            ))}
          </CategoryList>
          
          <FilterSection>
            <FilterTitle>
              <FaFilter /> Lọc theo
            </FilterTitle>
            
            <FilterOptions>
              <FilterOption>
                <input 
                  type="radio" 
                  id="filter-all" 
                  name="filter" 
                  defaultChecked 
                />
                <label htmlFor="filter-all">Tất cả</label>
              </FilterOption>
              <FilterOption>
                <input 
                  type="radio" 
                  id="filter-you" 
                  name="filter" 
                />
                <label htmlFor="filter-you">Hoạt động của bạn</label>
              </FilterOption>
              <FilterOption>
                <input 
                  type="radio" 
                  id="filter-others" 
                  name="filter" 
                />
                <label htmlFor="filter-others">Hoạt động của người khác</label>
              </FilterOption>
            </FilterOptions>
            
            <DateFilter>
              <DateFilterLabel>
                <FaCalendarAlt /> Từ ngày
              </DateFilterLabel>
              <DateFilterInput 
                type="date" 
                value={dateRange.from}
                onChange={(e) => handleDateChange(e, 'from')}
              />
            </DateFilter>
            
            <DateFilter>
              <DateFilterLabel>
                <FaCalendarAlt /> Đến ngày
              </DateFilterLabel>
              <DateFilterInput 
                type="date" 
                value={dateRange.to}
                onChange={(e) => handleDateChange(e, 'to')}
              />
            </DateFilter>
          </FilterSection>
        </ActivityLeftSidebar>
        
        <ActivityMainContent>
          {paginatedActivities.length > 0 ? (
            <>
              <ActivityList>
                {paginatedActivities.map(activity => (
                  <ActivityItem key={activity.id}>
                    <ActivityIcon type={activity.type}>
                      {getActivityIcon(activity.type)}
                    </ActivityIcon>
                    
                    <ActivityInfo>
                      <ActivityText>
                        {activity.text}
                        {activity.privacy && (
                          <span className="privacy-icon">
                            {getPrivacyIcon(activity.privacy)}
                          </span>
                        )}
                      </ActivityText>
                      {activity.content && (
                        <div className="activity-content">"{activity.content}"</div>
                      )}
                      <ActivityDate>{activity.date}</ActivityDate>
                    </ActivityInfo>
                    
                    <ActivityActions>
                      <ActivityAction onClick={() => toggleDropdown(activity.id)}>
                        <FaEllipsisH />
                      </ActivityAction>
                      
                      {showDropdown === activity.id && (
                        <ActivityDropdown>
                          <DropdownContent>
                            <DropdownItem onClick={() => handleHideActivity(activity.id)}>
                              <FaEyeSlash /> Ẩn khỏi nhật ký
                            </DropdownItem>
                            {(activity.type === 'post' || activity.type === 'photo' || activity.type === 'video') && (
                              <DropdownItem onClick={() => handlePrivacyChange(activity.id)}>
                                <FaLock /> Thay đổi quyền riêng tư
                              </DropdownItem>
                            )}
                            <DropdownItem onClick={() => handleDeleteActivity(activity.id)}>
                              <FaTrash /> Xóa
                            </DropdownItem>
                          </DropdownContent>
                        </ActivityDropdown>
                      )}
                    </ActivityActions>
                  </ActivityItem>
                ))}
              </ActivityList>
              
              {totalPages > 1 && (
                <Pagination>
                  <PageButton 
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  >
                    Trước
                  </PageButton>
                  
                  <PageInfo>
                    Trang {currentPage} / {totalPages}
                  </PageInfo>
                  
                  <PageButton 
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  >
                    Sau
                  </PageButton>
                </Pagination>
              )}
            </>
          ) : (
            <ActivityEmpty>
              <EmptyIcon>
                <FaHistory />
              </EmptyIcon>
              <EmptyText>Không tìm thấy hoạt động nào</EmptyText>
              <EmptyDescription>
                Không có hoạt động nào phù hợp với bộ lọc của bạn. Hãy thử thay đổi bộ lọc hoặc tìm kiếm với từ khóa khác.
              </EmptyDescription>
              <ActivityButton onClick={() => {
                setActiveCategory('all');
                setSearchTerm('');
                setDateRange({ from: '', to: '' });
              }}>
                Xóa bộ lọc
              </ActivityButton>
            </ActivityEmpty>
          )}
        </ActivityMainContent>
      </ActivityContent>
    </ActivityContainer>
  );
};

export default ActivityLog; 
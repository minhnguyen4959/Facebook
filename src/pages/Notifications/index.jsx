import React, { useState } from 'react';
import { FaBell, FaUserFriends, FaHeart, FaComment, FaShare, FaBirthdayCake, FaCalendarAlt, FaEllipsisH, FaTrash, FaEyeSlash, FaCheck, FaSearch, FaFilter, FaAt } from 'react-icons/fa';
import {
  NotificationsContainer,
  NotificationsHeader,
  NotificationsTitle,
  NotificationsDescription,
  NotificationsContent,
  NotificationsLeftSidebar,
  CategoryList,
  CategoryItem,
  CategoryIcon,
  CategoryText,
  NotificationsMainContent,
  FilterSection,
  FilterTitle,
  FilterOptions,
  FilterOption,
  SearchContainer,
  SearchIcon,
  SearchInput,
  NotificationsList,
  NotificationItem,
  NotificationIcon,
  NotificationInfo,
  NotificationText,
  NotificationDate,
  NotificationActions,
  NotificationAction,
  NotificationDropdown,
  DropdownContent,
  DropdownItem,
  NotificationEmpty,
  EmptyIcon,
  EmptyText,
  EmptyDescription,
  NotificationButton,
  NotificationAvatar,
  NotificationContent,
  MarkAllButton,
  Pagination,
  PageButton,
  PageInfo,
  NotificationBadge,
  NotificationStatus
} from './styles';

const Notifications = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Dữ liệu mẫu cho danh mục
  const categories = [
    { id: 'all', name: 'Tất cả thông báo', icon: <FaBell />, count: 12 },
    { id: 'unread', name: 'Chưa đọc', icon: <FaBell />, count: 5 },
    { id: 'friends', name: 'Lời mời kết bạn', icon: <FaUserFriends />, count: 3 },
    { id: 'reactions', name: 'Lượt thích và phản ứng', icon: <FaHeart />, count: 8 },
    { id: 'comments', name: 'Bình luận', icon: <FaComment />, count: 4 },
    { id: 'mentions', name: 'Đề cập đến bạn', icon: <FaAt /> },
    { id: 'events', name: 'Sự kiện', icon: <FaCalendarAlt />, count: 2 }
  ];
  
  // Dữ liệu mẫu cho thông báo
  const notifications = [
    {
      id: 1,
      type: 'friend_request',
      text: 'Nguyễn Văn A đã gửi cho bạn lời mời kết bạn',
      date: '5 phút trước',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      isRead: false,
      category: 'friends'
    },
    {
      id: 2,
      type: 'like',
      text: 'Trần Thị B đã thích bài viết của bạn',
      content: 'Hôm nay thật là một ngày tuyệt vời!',
      date: '30 phút trước',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      isRead: false,
      category: 'reactions'
    },
    {
      id: 3,
      type: 'comment',
      text: 'Lê Văn C đã bình luận về bài viết của bạn',
      content: 'Cảm ơn bạn đã chia sẻ thông tin hữu ích!',
      date: '1 giờ trước',
      avatar: 'https://randomuser.me/api/portraits/men/62.jpg',
      isRead: false,
      category: 'comments'
    },
    {
      id: 4,
      type: 'friend_accepted',
      text: 'Phạm Thị D đã chấp nhận lời mời kết bạn của bạn',
      date: '3 giờ trước',
      avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      isRead: true,
      category: 'friends'
    },
    {
      id: 5,
      type: 'birthday',
      text: 'Hôm nay là sinh nhật của Hoàng Văn E',
      date: 'Hôm nay',
      avatar: 'https://randomuser.me/api/portraits/men/91.jpg',
      isRead: true,
      category: 'events'
    },
    {
      id: 6,
      type: 'event',
      text: 'Sự kiện "Hội thảo công nghệ 2023" sẽ diễn ra vào ngày mai',
      date: '5 giờ trước',
      avatar: 'https://via.placeholder.com/150',
      isRead: false,
      category: 'events'
    },
    {
      id: 7,
      type: 'share',
      text: 'Ngô Thị F đã chia sẻ bài viết của bạn',
      content: 'Mẹo hay cho cuộc sống hàng ngày',
      date: '1 ngày trước',
      avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
      isRead: true,
      category: 'mentions'
    },
    {
      id: 8,
      type: 'mention',
      text: 'Đỗ Văn G đã nhắc đến bạn trong một bình luận',
      content: 'Tôi nghĩ @NguyenVanH sẽ thích bài viết này!',
      date: '1 ngày trước',
      avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
      isRead: false,
      category: 'mentions'
    },
    {
      id: 9,
      type: 'like',
      text: 'Bùi Thị H và 5 người khác đã thích ảnh của bạn',
      date: '2 ngày trước',
      avatar: 'https://randomuser.me/api/portraits/women/57.jpg',
      isRead: true,
      category: 'reactions'
    },
    {
      id: 10,
      type: 'comment',
      text: 'Lý Văn I đã bình luận về bài viết của bạn',
      content: 'Tuyệt vời! Tôi hoàn toàn đồng ý với bạn.',
      date: '2 ngày trước',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      isRead: true,
      category: 'comments'
    }
  ];
  
  const getNotificationIcon = (type) => {
    switch (type) {
      case 'friend_request':
      case 'friend_accepted':
        return <FaUserFriends />;
      case 'like':
        return <FaHeart />;
      case 'comment':
        return <FaComment />;
      case 'share':
        return <FaShare />;
      case 'birthday':
        return <FaBirthdayCake />;
      case 'event':
        return <FaCalendarAlt />;
      case 'mention':
        return <FaAt />;
      default:
        return <FaBell />;
    }
  };
  
  const toggleDropdown = (id) => {
    setShowDropdown(showDropdown === id ? null : id);
  };
  
  const handleMarkAsRead = (id) => {
    // Xử lý đánh dấu đã đọc
    console.log(`Đánh dấu đã đọc thông báo ${id}`);
    setShowDropdown(null);
  };
  
  const handleHideNotification = (id) => {
    // Xử lý ẩn thông báo
    console.log(`Ẩn thông báo ${id}`);
    setShowDropdown(null);
  };
  
  const handleDeleteNotification = (id) => {
    // Xử lý xóa thông báo
    console.log(`Xóa thông báo ${id}`);
    setShowDropdown(null);
  };
  
  const handleMarkAllAsRead = () => {
    // Xử lý đánh dấu tất cả đã đọc
    console.log('Đánh dấu tất cả thông báo đã đọc');
  };
  
  const filteredNotifications = notifications.filter(notification => {
    // Lọc theo danh mục
    if (activeCategory === 'unread' && notification.isRead) {
      return false;
    } else if (activeCategory !== 'all' && activeCategory !== 'unread' && notification.category !== activeCategory) {
      return false;
    }
    
    // Lọc theo từ khóa tìm kiếm
    if (searchTerm && !notification.text.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !notification.content?.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    return true;
  });
  
  // Phân trang
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredNotifications.length / itemsPerPage);
  const paginatedNotifications = filteredNotifications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  return (
    <NotificationsContainer>
      <NotificationsHeader>
        <NotificationsTitle>Thông báo</NotificationsTitle>
        <NotificationsDescription>
          Xem các thông báo và cập nhật mới nhất.
        </NotificationsDescription>
        
        <SearchContainer>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
          <SearchInput 
            placeholder="Tìm kiếm thông báo..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
      </NotificationsHeader>
      
      <NotificationsContent>
        <NotificationsLeftSidebar>
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
                {category.count > 0 && (
                  <NotificationBadge>
                    {category.count}
                  </NotificationBadge>
                )}
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
                  id="filter-all-time" 
                  name="filter" 
                  defaultChecked 
                />
                <label htmlFor="filter-all-time">Tất cả thời gian</label>
              </FilterOption>
              <FilterOption>
                <input 
                  type="radio" 
                  id="filter-today" 
                  name="filter" 
                />
                <label htmlFor="filter-today">Hôm nay</label>
              </FilterOption>
              <FilterOption>
                <input 
                  type="radio" 
                  id="filter-week" 
                  name="filter" 
                />
                <label htmlFor="filter-week">Tuần này</label>
              </FilterOption>
              <FilterOption>
                <input 
                  type="radio" 
                  id="filter-month" 
                  name="filter" 
                />
                <label htmlFor="filter-month">Tháng này</label>
              </FilterOption>
            </FilterOptions>
          </FilterSection>
        </NotificationsLeftSidebar>
        
        <NotificationsMainContent>
          {paginatedNotifications.length > 0 ? (
            <>
              <MarkAllButton onClick={handleMarkAllAsRead}>
                <FaCheck /> Đánh dấu tất cả đã đọc
              </MarkAllButton>
              
              <NotificationsList>
                {paginatedNotifications.map(notification => (
                  <NotificationItem key={notification.id} isRead={notification.isRead}>
                    <NotificationAvatar src={notification.avatar} alt="Avatar" />
                    
                    <NotificationContent>
                      <NotificationInfo>
                        <NotificationText>
                          {notification.text}
                        </NotificationText>
                        {notification.content && (
                          <div className="notification-content">"{notification.content}"</div>
                        )}
                        <NotificationDate>{notification.date}</NotificationDate>
                      </NotificationInfo>
                      
                      <NotificationStatus>
                        <NotificationIcon type={notification.type}>
                          {getNotificationIcon(notification.type)}
                        </NotificationIcon>
                      </NotificationStatus>
                    </NotificationContent>
                    
                    <NotificationActions>
                      <NotificationAction onClick={() => toggleDropdown(notification.id)}>
                        <FaEllipsisH />
                      </NotificationAction>
                      
                      {showDropdown === notification.id && (
                        <NotificationDropdown>
                          <DropdownContent>
                            {!notification.isRead && (
                              <DropdownItem onClick={() => handleMarkAsRead(notification.id)}>
                                <FaCheck /> Đánh dấu đã đọc
                              </DropdownItem>
                            )}
                            <DropdownItem onClick={() => handleHideNotification(notification.id)}>
                              <FaEyeSlash /> Ẩn thông báo này
                            </DropdownItem>
                            <DropdownItem onClick={() => handleDeleteNotification(notification.id)}>
                              <FaTrash /> Xóa thông báo
                            </DropdownItem>
                          </DropdownContent>
                        </NotificationDropdown>
                      )}
                    </NotificationActions>
                  </NotificationItem>
                ))}
              </NotificationsList>
              
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
            <NotificationEmpty>
              <EmptyIcon>
                <FaBell />
              </EmptyIcon>
              <EmptyText>Không có thông báo nào</EmptyText>
              <EmptyDescription>
                Không có thông báo nào phù hợp với bộ lọc của bạn. Hãy thử thay đổi bộ lọc hoặc tìm kiếm với từ khóa khác.
              </EmptyDescription>
              <NotificationButton onClick={() => {
                setActiveCategory('all');
                setSearchTerm('');
              }}>
                Xem tất cả thông báo
              </NotificationButton>
            </NotificationEmpty>
          )}
        </NotificationsMainContent>
      </NotificationsContent>
    </NotificationsContainer>
  );
};

export default Notifications; 
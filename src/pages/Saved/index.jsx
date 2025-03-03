import React, { useState } from 'react';
import { FaBookmark, FaVideo, FaLink, FaShoppingBag, FaEllipsisH, FaShare, FaThumbsUp, FaRegThumbsUp, FaRegComment, FaSearch, FaFilter } from 'react-icons/fa';
import {
  SavedContainer,
  SavedLeftSidebar,
  SavedContent,
  SidebarItem,
  SidebarIcon,
  SidebarText,
  SidebarDivider,
  SidebarTitle,
  SavedHeader,
  SavedTitle,
  SavedSubtitle,
  SearchContainer,
  SearchIcon,
  SearchInput,
  FilterContainer,
  FilterButton,
  FilterIcon,
  FilterText,
  SavedGrid,
  SavedCard,
  SavedCardHeader,
  SavedCardTitle,
  SavedCardDate,
  SavedCardImage,
  SavedCardContent,
  SavedCardText,
  SavedCardActions,
  SavedCardAction,
  SavedCardFooter,
  SavedCardSource,
  SavedCardCategory,
  CollectionCard,
  CollectionIcon,
  CollectionTitle,
  CollectionCount,
  CollectionsGrid,
  NoSavedContent,
  NoSavedIcon,
  NoSavedTitle,
  NoSavedText
} from './styles';

// Dữ liệu mẫu cho các mục đã lưu
const savedItemsData = [
  {
    id: 1,
    title: 'Hướng dẫn nấu món Phở Bò truyền thống Việt Nam',
    date: 'Đã lưu 2 ngày trước',
    image: 'https://picsum.photos/id/1/600/400',
    text: 'Hướng dẫn chi tiết cách nấu món Phở Bò truyền thống của Việt Nam. Từ cách ninh xương, ướp thịt đến cách chuẩn bị các loại gia vị đặc trưng.',
    source: 'Món Ngon Mỗi Ngày',
    category: 'Bài viết',
    likes: 125,
    comments: 32
  },
  {
    id: 2,
    title: 'Review iPhone 15 Pro Max sau 1 tháng sử dụng',
    date: 'Đã lưu 1 tuần trước',
    image: 'https://picsum.photos/id/2/600/400',
    text: 'Đánh giá chi tiết iPhone 15 Pro Max sau 1 tháng sử dụng. Ưu điểm, nhược điểm và so sánh với các dòng điện thoại cao cấp khác trên thị trường.',
    source: 'Tech Review VN',
    category: 'Video',
    likes: 250,
    comments: 87
  },
  {
    id: 3,
    title: 'Bài tập Yoga giúp giảm đau lưng hiệu quả',
    date: 'Đã lưu 3 ngày trước',
    image: 'https://picsum.photos/id/3/600/400',
    text: 'Tổng hợp các bài tập Yoga đơn giản nhưng hiệu quả giúp giảm đau lưng, phù hợp cho người ngồi nhiều và ít vận động.',
    source: 'Yoga Tại Nhà',
    category: 'Bài viết',
    likes: 75,
    comments: 21
  },
  {
    id: 4,
    title: 'Khám phá Đà Lạt - Thành phố ngàn hoa',
    date: 'Đã lưu 2 tuần trước',
    image: 'https://picsum.photos/id/4/600/400',
    text: 'Cùng khám phá Đà Lạt - thành phố ngàn hoa với những địa điểm du lịch nổi tiếng, ẩm thực đặc sắc và kinh nghiệm du lịch tiết kiệm.',
    source: 'Viet Travel',
    category: 'Bài viết',
    likes: 180,
    comments: 54
  },
  {
    id: 5,
    title: 'Laptop Dell XPS 15 9510',
    date: 'Đã lưu 5 ngày trước',
    image: 'https://picsum.photos/id/5/600/400',
    text: 'Dell XPS 15 9510 - Core i7 11800H / RAM 16GB / SSD 512GB / NVIDIA GeForce RTX 3050 Ti / Màn hình 15.6" FHD+',
    source: 'Thế Giới Di Động',
    category: 'Sản phẩm',
    price: '35.500.000 ₫',
    likes: 42,
    comments: 15
  },
  {
    id: 6,
    title: 'Cách làm bánh Trung Thu nhân thập cẩm truyền thống',
    date: 'Đã lưu 1 tháng trước',
    image: 'https://picsum.photos/id/6/600/400',
    text: 'Hướng dẫn chi tiết cách làm bánh Trung Thu nhân thập cẩm truyền thống tại nhà, từ cách làm vỏ bánh, nhân bánh đến cách nướng bánh.',
    source: 'Bếp Việt',
    category: 'Video',
    likes: 110,
    comments: 48
  }
];

// Dữ liệu mẫu cho bộ sưu tập
const collectionsData = [
  {
    id: 1,
    title: 'Công thức nấu ăn',
    count: 12,
    icon: <FaBookmark />
  },
  {
    id: 2,
    title: 'Địa điểm du lịch',
    count: 8,
    icon: <FaBookmark />
  },
  {
    id: 3,
    title: 'Sản phẩm công nghệ',
    count: 15,
    icon: <FaBookmark />
  },
  {
    id: 4,
    title: 'Video hướng dẫn',
    count: 6,
    icon: <FaVideo />
  },
  {
    id: 5,
    title: 'Bài viết về sức khỏe',
    count: 9,
    icon: <FaBookmark />
  },
  {
    id: 6,
    title: 'Liên kết hữu ích',
    count: 4,
    icon: <FaLink />
  }
];

const Saved = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [likedItems, setLikedItems] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const handleLikeItem = (id) => {
    setLikedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredItems = savedItemsData.filter(item => {
    if (activeCategory !== 'all' && item.category.toLowerCase() !== activeCategory.toLowerCase()) {
      return false;
    }
    
    if (searchTerm && !item.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !item.text.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <SavedContainer>
      <SavedLeftSidebar>
        <SidebarItem active={activeCategory === 'all'} onClick={() => setActiveCategory('all')}>
          <SidebarIcon>
            <FaBookmark />
          </SidebarIcon>
          <SidebarText>Tất cả</SidebarText>
        </SidebarItem>
        
        <SidebarItem active={activeCategory === 'bài viết'} onClick={() => setActiveCategory('bài viết')}>
          <SidebarIcon>
            <FaBookmark />
          </SidebarIcon>
          <SidebarText>Bài viết</SidebarText>
        </SidebarItem>
        
        <SidebarItem active={activeCategory === 'video'} onClick={() => setActiveCategory('video')}>
          <SidebarIcon>
            <FaVideo />
          </SidebarIcon>
          <SidebarText>Video</SidebarText>
        </SidebarItem>
        
        <SidebarItem active={activeCategory === 'sản phẩm'} onClick={() => setActiveCategory('sản phẩm')}>
          <SidebarIcon>
            <FaShoppingBag />
          </SidebarIcon>
          <SidebarText>Sản phẩm</SidebarText>
        </SidebarItem>
        
        <SidebarItem active={activeCategory === 'liên kết'} onClick={() => setActiveCategory('liên kết')}>
          <SidebarIcon>
            <FaLink />
          </SidebarIcon>
          <SidebarText>Liên kết</SidebarText>
        </SidebarItem>
        
        <SidebarDivider />
        
        <SidebarTitle>Bộ sưu tập của bạn</SidebarTitle>
        
        {collectionsData.map(collection => (
          <SidebarItem key={collection.id}>
            <SidebarIcon>
              {collection.icon}
            </SidebarIcon>
            <SidebarText>{collection.title}</SidebarText>
          </SidebarItem>
        ))}
      </SavedLeftSidebar>
      
      <SavedContent>
        <SavedHeader>
          <div>
            <SavedTitle>Đã lưu</SavedTitle>
            <SavedSubtitle>Các mục bạn đã lưu để xem sau</SavedSubtitle>
          </div>
          
          <SearchContainer>
            <SearchIcon>
              <FaSearch />
            </SearchIcon>
            <SearchInput 
              placeholder="Tìm kiếm mục đã lưu" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchContainer>
        </SavedHeader>
        
        <FilterContainer>
          <FilterButton active={activeCategory === 'all'} onClick={() => setActiveCategory('all')}>
            <FilterText>Tất cả</FilterText>
          </FilterButton>
          
          <FilterButton active={activeCategory === 'bài viết'} onClick={() => setActiveCategory('bài viết')}>
            <FilterText>Bài viết</FilterText>
          </FilterButton>
          
          <FilterButton active={activeCategory === 'video'} onClick={() => setActiveCategory('video')}>
            <FilterText>Video</FilterText>
          </FilterButton>
          
          <FilterButton active={activeCategory === 'sản phẩm'} onClick={() => setActiveCategory('sản phẩm')}>
            <FilterText>Sản phẩm</FilterText>
          </FilterButton>
          
          <FilterButton>
            <FilterIcon>
              <FaFilter />
            </FilterIcon>
            <FilterText>Bộ lọc</FilterText>
          </FilterButton>
        </FilterContainer>
        
        {filteredItems.length > 0 ? (
          <SavedGrid>
            {filteredItems.map(item => (
              <SavedCard key={item.id}>
                <SavedCardHeader>
                  <div>
                    <SavedCardTitle>{item.title}</SavedCardTitle>
                    <SavedCardDate>{item.date}</SavedCardDate>
                  </div>
                  <FaEllipsisH />
                </SavedCardHeader>
                <SavedCardImage src={item.image} alt={item.title} />
                <SavedCardContent>
                  <SavedCardText>{item.text}</SavedCardText>
                  <SavedCardActions>
                    <SavedCardAction 
                      active={likedItems[item.id]} 
                      onClick={() => handleLikeItem(item.id)}
                    >
                      {likedItems[item.id] ? <FaThumbsUp /> : <FaRegThumbsUp />}
                      {item.likes + (likedItems[item.id] ? 1 : 0)}
                    </SavedCardAction>
                    <SavedCardAction>
                      <FaRegComment />
                      {item.comments}
                    </SavedCardAction>
                    <SavedCardAction>
                      <FaShare />
                      Chia sẻ
                    </SavedCardAction>
                  </SavedCardActions>
                </SavedCardContent>
                <SavedCardFooter>
                  <SavedCardSource>{item.source}</SavedCardSource>
                  <SavedCardCategory>{item.category}</SavedCardCategory>
                </SavedCardFooter>
              </SavedCard>
            ))}
          </SavedGrid>
        ) : (
          <NoSavedContent>
            <NoSavedIcon>
              <FaBookmark />
            </NoSavedIcon>
            <NoSavedTitle>Không tìm thấy mục đã lưu</NoSavedTitle>
            <NoSavedText>
              Không tìm thấy mục đã lưu phù hợp với tìm kiếm của bạn. Hãy thử tìm kiếm với từ khóa khác hoặc xem tất cả các mục đã lưu.
            </NoSavedText>
          </NoSavedContent>
        )}
        
        <SidebarTitle>Bộ sưu tập của bạn</SidebarTitle>
        
        <CollectionsGrid>
          {collectionsData.map(collection => (
            <CollectionCard key={collection.id}>
              <CollectionIcon>
                {collection.icon}
              </CollectionIcon>
              <CollectionTitle>{collection.title}</CollectionTitle>
              <CollectionCount>{collection.count} mục</CollectionCount>
            </CollectionCard>
          ))}
        </CollectionsGrid>
      </SavedContent>
    </SavedContainer>
  );
};

export default Saved; 
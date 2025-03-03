import React, { useState } from 'react';
import { FaSearch, FaFire, FaGlobe, FaVideo, FaImage, FaNewspaper, FaHashtag, FaUserFriends, FaMapMarkerAlt, FaEllipsisH, FaBookmark, FaShare, FaHeart, FaRegHeart, FaComment } from 'react-icons/fa';
import {
  ExploreContainer,
  ExploreHeader,
  ExploreTitle,
  ExploreDescription,
  SearchContainer,
  SearchIcon,
  SearchInput,
  ExploreContent,
  ExploreLeftSidebar,
  CategoryList,
  CategoryItem,
  CategoryIcon,
  CategoryText,
  ExploreMainContent,
  TrendingSection,
  SectionTitle,
  TrendingList,
  TrendingItem,
  TrendingInfo,
  TrendingTitle,
  TrendingMeta,
  TrendingTags,
  TrendingTag,
  ContentGrid,
  ContentCard,
  CardImage,
  CardContent,
  CardTitle,
  CardMeta,
  CardAuthor,
  CardStats,
  StatItem,
  CardActions,
  CardAction,
  ExploreEmpty,
  EmptyIcon,
  EmptyText,
  EmptyDescription,
  ExploreButton,
  FilterBar,
  FilterButton,
  ActiveFilterButton,
  LocationFilter,
  LocationIcon,
  LocationText,
  HashtagCloud,
  HashtagItem,
  LoadMoreButton
} from './styles';

const Explore = () => {
  const [activeCategory, setActiveCategory] = useState('trending');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [likedPosts, setLikedPosts] = useState({});
  
  // Dữ liệu mẫu cho danh mục
  const categories = [
    { id: 'trending', name: 'Xu hướng', icon: <FaFire /> },
    { id: 'foryou', name: 'Dành cho bạn', icon: <FaGlobe /> },
    { id: 'videos', name: 'Video', icon: <FaVideo /> },
    { id: 'photos', name: 'Ảnh', icon: <FaImage /> },
    { id: 'articles', name: 'Bài viết', icon: <FaNewspaper /> },
    { id: 'hashtags', name: 'Hashtags', icon: <FaHashtag /> },
    { id: 'people', name: 'Người dùng', icon: <FaUserFriends /> },
    { id: 'places', name: 'Địa điểm', icon: <FaMapMarkerAlt /> }
  ];
  
  // Dữ liệu mẫu cho xu hướng
  const trendingTopics = [
    {
      id: 1,
      title: 'Công nghệ AI mới nhất',
      posts: 1250,
      tags: ['AI', 'Công nghệ', 'Tương lai']
    },
    {
      id: 2,
      title: 'Lễ hội âm nhạc Hà Nội 2023',
      posts: 980,
      tags: ['Âm nhạc', 'Sự kiện', 'Hà Nội']
    },
    {
      id: 3,
      title: 'Bí quyết sống khỏe mỗi ngày',
      posts: 750,
      tags: ['Sức khỏe', 'Lifestyle', 'Wellness']
    },
    {
      id: 4,
      title: 'Điểm du lịch hot nhất mùa hè',
      posts: 620,
      tags: ['Du lịch', 'Mùa hè', 'Khám phá']
    },
    {
      id: 5,
      title: 'Công thức nấu ăn đơn giản tại nhà',
      posts: 540,
      tags: ['Ẩm thực', 'Nấu ăn', 'Homemade']
    }
  ];
  
  // Dữ liệu mẫu cho nội dung
  const exploreContent = [
    {
      id: 1,
      type: 'photo',
      title: 'Hoàng hôn tuyệt đẹp tại Vịnh Hạ Long',
      image: 'https://source.unsplash.com/random/600x400?sunset,halong',
      author: 'Nguyễn Văn A',
      authorAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      likes: 245,
      comments: 42,
      shares: 18,
      time: '2 giờ trước',
      location: 'Vịnh Hạ Long, Quảng Ninh',
      tags: ['DuLịch', 'ViệtNam', 'HạLong']
    },
    {
      id: 2,
      type: 'video',
      title: 'Hướng dẫn làm bánh trung thu nhân thập cẩm',
      image: 'https://source.unsplash.com/random/600x400?mooncake,food',
      author: 'Trần Thị B',
      authorAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      likes: 189,
      comments: 56,
      shares: 72,
      time: '5 giờ trước',
      duration: '15:24',
      tags: ['ẨmThực', 'BánhTrungThu', 'CôngThức']
    },
    {
      id: 3,
      type: 'article',
      title: '10 xu hướng công nghệ sẽ thay đổi tương lai',
      image: 'https://source.unsplash.com/random/600x400?technology,future',
      author: 'Lê Văn C',
      authorAvatar: 'https://randomuser.me/api/portraits/men/62.jpg',
      likes: 312,
      comments: 87,
      shares: 124,
      time: '1 ngày trước',
      readTime: '8 phút đọc',
      tags: ['CôngNghệ', 'TươngLai', 'Innovation']
    },
    {
      id: 4,
      type: 'photo',
      title: 'Bộ sưu tập ảnh mùa thu Đà Lạt',
      image: 'https://source.unsplash.com/random/600x400?dalat,autumn',
      author: 'Phạm Thị D',
      authorAvatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      likes: 421,
      comments: 63,
      shares: 92,
      time: '2 ngày trước',
      location: 'Đà Lạt, Lâm Đồng',
      tags: ['ĐàLạt', 'MùaThu', 'Photography']
    },
    {
      id: 5,
      type: 'video',
      title: 'Tập yoga tại nhà - Bài tập cho người mới bắt đầu',
      image: 'https://source.unsplash.com/random/600x400?yoga,fitness',
      author: 'Hoàng Văn E',
      authorAvatar: 'https://randomuser.me/api/portraits/men/91.jpg',
      likes: 156,
      comments: 34,
      shares: 27,
      time: '3 ngày trước',
      duration: '22:15',
      tags: ['Yoga', 'Fitness', 'SứcKhỏe']
    },
    {
      id: 6,
      type: 'article',
      title: 'Cách tiết kiệm tiền hiệu quả cho người trẻ',
      image: 'https://source.unsplash.com/random/600x400?money,saving',
      author: 'Ngô Thị F',
      authorAvatar: 'https://randomuser.me/api/portraits/women/22.jpg',
      likes: 278,
      comments: 92,
      shares: 145,
      time: '4 ngày trước',
      readTime: '6 phút đọc',
      tags: ['TàiChính', 'TiếtKiệm', 'GenZ']
    },
    {
      id: 7,
      type: 'photo',
      title: 'Khám phá ẩm thực đường phố Sài Gòn',
      image: 'https://source.unsplash.com/random/600x400?streetfood,saigon',
      author: 'Đỗ Văn G',
      authorAvatar: 'https://randomuser.me/api/portraits/men/76.jpg',
      likes: 342,
      comments: 58,
      shares: 64,
      time: '5 ngày trước',
      location: 'TP. Hồ Chí Minh',
      tags: ['ẨmThực', 'SàiGòn', 'ĐườngPhố']
    },
    {
      id: 8,
      type: 'video',
      title: 'Review iPhone 15 Pro Max sau 1 tháng sử dụng',
      image: 'https://source.unsplash.com/random/600x400?iphone,technology',
      author: 'Bùi Thị H',
      authorAvatar: 'https://randomuser.me/api/portraits/women/57.jpg',
      likes: 512,
      comments: 143,
      shares: 87,
      time: '1 tuần trước',
      duration: '18:42',
      tags: ['iPhone', 'Review', 'CôngNghệ']
    }
  ];
  
  // Dữ liệu mẫu cho hashtags
  const popularHashtags = [
    { id: 1, tag: 'DuLịch', count: 12500 },
    { id: 2, tag: 'ẨmThực', count: 9800 },
    { id: 3, tag: 'CôngNghệ', count: 8750 },
    { id: 4, tag: 'Lifestyle', count: 7620 },
    { id: 5, tag: 'SứcKhỏe', count: 6540 },
    { id: 6, tag: 'ViệtNam', count: 5980 },
    { id: 7, tag: 'Photography', count: 5420 },
    { id: 8, tag: 'MùaHè', count: 4870 },
    { id: 9, tag: 'GenZ', count: 4350 },
    { id: 10, tag: 'TàiChính', count: 3920 },
    { id: 11, tag: 'Fitness', count: 3650 },
    { id: 12, tag: 'Review', count: 3280 }
  ];
  
  const handleLikePost = (postId) => {
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };
  
  const getFilteredContent = () => {
    let filtered = [...exploreContent];
    
    // Lọc theo danh mục
    if (activeCategory === 'videos') {
      filtered = filtered.filter(item => item.type === 'video');
    } else if (activeCategory === 'photos') {
      filtered = filtered.filter(item => item.type === 'photo');
    } else if (activeCategory === 'articles') {
      filtered = filtered.filter(item => item.type === 'article');
    }
    
    // Lọc theo từ khóa tìm kiếm
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        item.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Lọc theo bộ lọc
    if (activeFilter === 'popular') {
      filtered.sort((a, b) => b.likes - a.likes);
    } else if (activeFilter === 'recent') {
      // Giả sử thời gian đã được sắp xếp
    }
    
    return filtered;
  };
  
  const renderMainContent = () => {
    if (activeCategory === 'trending') {
      return (
        <>
          <TrendingSection>
            <SectionTitle>Chủ đề thịnh hành</SectionTitle>
            <TrendingList>
              {trendingTopics.map(topic => (
                <TrendingItem key={topic.id}>
                  <TrendingInfo>
                    <TrendingTitle>{topic.title}</TrendingTitle>
                    <TrendingMeta>{topic.posts} bài viết</TrendingMeta>
                    <TrendingTags>
                      {topic.tags.map((tag, index) => (
                        <TrendingTag key={index}>#{tag}</TrendingTag>
                      ))}
                    </TrendingTags>
                  </TrendingInfo>
                </TrendingItem>
              ))}
            </TrendingList>
          </TrendingSection>
          
          <SectionTitle>Khám phá nội dung</SectionTitle>
          <FilterBar>
            <FilterButton 
              active={activeFilter === 'all'} 
              onClick={() => setActiveFilter('all')}
            >
              Tất cả
            </FilterButton>
            <FilterButton 
              active={activeFilter === 'popular'} 
              onClick={() => setActiveFilter('popular')}
            >
              Phổ biến
            </FilterButton>
            <FilterButton 
              active={activeFilter === 'recent'} 
              onClick={() => setActiveFilter('recent')}
            >
              Gần đây
            </FilterButton>
            <LocationFilter>
              <LocationIcon>
                <FaMapMarkerAlt />
              </LocationIcon>
              <LocationText>Việt Nam</LocationText>
            </LocationFilter>
          </FilterBar>
          
          <ContentGrid>
            {getFilteredContent().map(item => (
              <ContentCard key={item.id} type={item.type}>
                <CardImage src={item.image} alt={item.title}>
                  {item.type === 'video' && (
                    <div className="duration">{item.duration}</div>
                  )}
                </CardImage>
                <CardContent>
                  <CardTitle>{item.title}</CardTitle>
                  <CardMeta>
                    <CardAuthor>
                      <img src={item.authorAvatar} alt={item.author} />
                      <span>{item.author}</span>
                    </CardAuthor>
                    <span className="time">{item.time}</span>
                  </CardMeta>
                  <CardStats>
                    <StatItem>
                      <FaHeart /> {item.likes}
                    </StatItem>
                    <StatItem>
                      <FaComment /> {item.comments}
                    </StatItem>
                    <StatItem>
                      <FaShare /> {item.shares}
                    </StatItem>
                  </CardStats>
                  <CardActions>
                    <CardAction onClick={() => handleLikePost(item.id)}>
                      {likedPosts[item.id] ? <FaHeart className="liked" /> : <FaRegHeart />}
                      {likedPosts[item.id] ? 'Đã thích' : 'Thích'}
                    </CardAction>
                    <CardAction>
                      <FaComment /> Bình luận
                    </CardAction>
                    <CardAction>
                      <FaShare /> Chia sẻ
                    </CardAction>
                    <CardAction>
                      <FaBookmark /> Lưu
                    </CardAction>
                  </CardActions>
                </CardContent>
              </ContentCard>
            ))}
          </ContentGrid>
          
          <LoadMoreButton>
            Xem thêm
          </LoadMoreButton>
        </>
      );
    } else if (activeCategory === 'hashtags') {
      return (
        <>
          <SectionTitle>Hashtags phổ biến</SectionTitle>
          <HashtagCloud>
            {popularHashtags.map(hashtag => (
              <HashtagItem key={hashtag.id} popularity={Math.min(hashtag.count / 1000, 5)}>
                #{hashtag.tag}
                <span className="count">{hashtag.count.toLocaleString()}</span>
              </HashtagItem>
            ))}
          </HashtagCloud>
          
          <SectionTitle>Bài viết theo hashtag</SectionTitle>
          <ContentGrid>
            {getFilteredContent().slice(0, 4).map(item => (
              <ContentCard key={item.id} type={item.type}>
                <CardImage src={item.image} alt={item.title}>
                  {item.type === 'video' && (
                    <div className="duration">{item.duration}</div>
                  )}
                </CardImage>
                <CardContent>
                  <CardTitle>{item.title}</CardTitle>
                  <CardMeta>
                    <CardAuthor>
                      <img src={item.authorAvatar} alt={item.author} />
                      <span>{item.author}</span>
                    </CardAuthor>
                    <span className="time">{item.time}</span>
                  </CardMeta>
                  <div className="tags">
                    {item.tags.map((tag, index) => (
                      <span key={index} className="tag">#{tag}</span>
                    ))}
                  </div>
                </CardContent>
              </ContentCard>
            ))}
          </ContentGrid>
        </>
      );
    } else {
      return (
        <>
          <FilterBar>
            <FilterButton 
              active={activeFilter === 'all'} 
              onClick={() => setActiveFilter('all')}
            >
              Tất cả
            </FilterButton>
            <FilterButton 
              active={activeFilter === 'popular'} 
              onClick={() => setActiveFilter('popular')}
            >
              Phổ biến
            </FilterButton>
            <FilterButton 
              active={activeFilter === 'recent'} 
              onClick={() => setActiveFilter('recent')}
            >
              Gần đây
            </FilterButton>
          </FilterBar>
          
          {getFilteredContent().length > 0 ? (
            <>
              <ContentGrid>
                {getFilteredContent().map(item => (
                  <ContentCard key={item.id} type={item.type}>
                    <CardImage src={item.image} alt={item.title}>
                      {item.type === 'video' && (
                        <div className="duration">{item.duration}</div>
                      )}
                    </CardImage>
                    <CardContent>
                      <CardTitle>{item.title}</CardTitle>
                      <CardMeta>
                        <CardAuthor>
                          <img src={item.authorAvatar} alt={item.author} />
                          <span>{item.author}</span>
                        </CardAuthor>
                        <span className="time">{item.time}</span>
                      </CardMeta>
                      <CardStats>
                        <StatItem>
                          <FaHeart /> {item.likes}
                        </StatItem>
                        <StatItem>
                          <FaComment /> {item.comments}
                        </StatItem>
                        <StatItem>
                          <FaShare /> {item.shares}
                        </StatItem>
                      </CardStats>
                      <CardActions>
                        <CardAction onClick={() => handleLikePost(item.id)}>
                          {likedPosts[item.id] ? <FaHeart className="liked" /> : <FaRegHeart />}
                          {likedPosts[item.id] ? 'Đã thích' : 'Thích'}
                        </CardAction>
                        <CardAction>
                          <FaComment /> Bình luận
                        </CardAction>
                        <CardAction>
                          <FaShare /> Chia sẻ
                        </CardAction>
                        <CardAction>
                          <FaBookmark /> Lưu
                        </CardAction>
                      </CardActions>
                    </CardContent>
                  </ContentCard>
                ))}
              </ContentGrid>
              
              <LoadMoreButton>
                Xem thêm
              </LoadMoreButton>
            </>
          ) : (
            <ExploreEmpty>
              <EmptyIcon>
                <FaSearch />
              </EmptyIcon>
              <EmptyText>Không tìm thấy nội dung</EmptyText>
              <EmptyDescription>
                Không có nội dung nào phù hợp với tìm kiếm của bạn. Hãy thử tìm kiếm với từ khóa khác.
              </EmptyDescription>
              <ExploreButton onClick={() => {
                setSearchTerm('');
                setActiveFilter('all');
              }}>
                Xem tất cả nội dung
              </ExploreButton>
            </ExploreEmpty>
          )}
        </>
      );
    }
  };
  
  return (
    <ExploreContainer>
      <ExploreHeader>
        <ExploreTitle>Khám phá</ExploreTitle>
        <ExploreDescription>
          Khám phá nội dung thịnh hành và phổ biến từ khắp nơi.
        </ExploreDescription>
        
        <SearchContainer>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
          <SearchInput 
            placeholder="Tìm kiếm chủ đề, hashtag, người dùng..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
      </ExploreHeader>
      
      <ExploreContent>
        <ExploreLeftSidebar>
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
        </ExploreLeftSidebar>
        
        <ExploreMainContent>
          {renderMainContent()}
        </ExploreMainContent>
      </ExploreContent>
    </ExploreContainer>
  );
};

export default Explore; 
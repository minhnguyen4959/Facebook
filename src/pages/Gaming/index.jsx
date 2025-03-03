import React, { useState } from 'react';
import { FaGamepad, FaSearch, FaRegBookmark, FaBookmark, FaRegHeart, FaHeart, FaRegComment, FaShare, FaEllipsisH, FaPlay, FaUsers, FaTrophy, FaRegClock } from 'react-icons/fa';
import {
  GamingContainer,
  GamingLeftSidebar,
  SidebarItem,
  SidebarIcon,
  SidebarText,
  GamingContent,
  SearchContainer,
  SearchIcon,
  SearchInput,
  GamingHeader,
  GamingTitle,
  GamingTabs,
  GamingTab,
  GamingSection,
  SectionTitle,
  SectionLink,
  GamesGrid,
  GameCard,
  GameImage,
  GameInfo,
  GameTitle,
  GamePlayers,
  GameCategory,
  GameButton,
  FeaturedGamesContainer,
  FeaturedGame,
  FeaturedGameImage,
  FeaturedGameOverlay,
  FeaturedGameTitle,
  FeaturedGamePlayers,
  FeaturedGamePlayButton,
  GamingPostsContainer,
  GamingPost,
  PostHeader,
  PostAuthor,
  PostAvatar,
  PostInfo,
  PostName,
  PostTime,
  PostContent,
  PostText,
  PostImage,
  PostActions,
  PostAction,
  PostStats
} from './styles';

const Gaming = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [likedPosts, setLikedPosts] = useState({});
  
  // Dữ liệu mẫu cho các trò chơi
  const games = [
    {
      id: 1,
      title: 'Liên Minh Huyền Thoại',
      image: 'https://picsum.photos/id/237/300/200',
      players: '2.5M người chơi',
      category: 'MOBA',
      description: 'Trò chơi đấu trường trực tuyến nhiều người chơi phổ biến toàn cầu.'
    },
    {
      id: 2,
      title: 'PUBG Mobile',
      image: 'https://picsum.photos/id/238/300/200',
      players: '1.8M người chơi',
      category: 'Battle Royale',
      description: 'Trò chơi bắn súng sinh tồn trên thiết bị di động.'
    },
    {
      id: 3,
      title: 'Minecraft',
      image: 'https://picsum.photos/id/239/300/200',
      players: '1.2M người chơi',
      category: 'Sandbox',
      description: 'Trò chơi xây dựng và khám phá thế giới mở.'
    },
    {
      id: 4,
      title: 'Genshin Impact',
      image: 'https://picsum.photos/id/240/300/200',
      players: '950K người chơi',
      category: 'RPG',
      description: 'Trò chơi nhập vai thế giới mở với đồ họa anime.'
    },
    {
      id: 5,
      title: 'Among Us',
      image: 'https://picsum.photos/id/241/300/200',
      players: '800K người chơi',
      category: 'Party',
      description: 'Trò chơi phá án và lừa dối nhiều người chơi.'
    },
    {
      id: 6,
      title: 'Call of Duty: Mobile',
      image: 'https://picsum.photos/id/242/300/200',
      players: '1.5M người chơi',
      category: 'FPS',
      description: 'Trò chơi bắn súng góc nhìn thứ nhất trên di động.'
    }
  ];
  
  // Dữ liệu mẫu cho các bài đăng về game
  const gamingPosts = [
    {
      id: 1,
      author: {
        name: 'Nguyễn Văn A',
        avatar: 'https://picsum.photos/id/1001/40/40'
      },
      time: '2 giờ trước',
      text: 'Vừa đạt rank Cao Thủ trong Liên Minh Huyền Thoại sau 3 tháng cố gắng! Cảm ơn team đã hỗ trợ!',
      image: 'https://picsum.photos/id/1010/600/400',
      game: 'Liên Minh Huyền Thoại',
      likes: 245,
      comments: 56
    },
    {
      id: 2,
      author: {
        name: 'Trần Thị B',
        avatar: 'https://picsum.photos/id/1002/40/40'
      },
      time: '5 giờ trước',
      text: 'Chia sẻ một số mẹo để xây dựng căn cứ trong Minecraft. Hãy comment nếu bạn muốn biết thêm chi tiết!',
      image: 'https://picsum.photos/id/1011/600/400',
      game: 'Minecraft',
      likes: 189,
      comments: 42
    },
    {
      id: 3,
      author: {
        name: 'Lê Văn C',
        avatar: 'https://picsum.photos/id/1003/40/40'
      },
      time: '1 ngày trước',
      text: 'Giải đấu PUBG Mobile sắp diễn ra vào cuối tuần này. Ai sẽ tham gia cùng team mình không?',
      image: 'https://picsum.photos/id/1012/600/400',
      game: 'PUBG Mobile',
      likes: 312,
      comments: 87
    }
  ];
  
  const handleLikePost = (postId) => {
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };
  
  const filteredGames = games.filter(game => {
    if (searchTerm && !game.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    return true;
  });
  
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <GamingSection>
              <SectionTitle>Trò chơi nổi bật</SectionTitle>
              <FeaturedGamesContainer>
                {games.slice(0, 3).map(game => (
                  <FeaturedGame key={game.id}>
                    <FeaturedGameImage src={game.image} alt={game.title} />
                    <FeaturedGameOverlay>
                      <FeaturedGameTitle>{game.title}</FeaturedGameTitle>
                      <FeaturedGamePlayers>{game.players}</FeaturedGamePlayers>
                      <FeaturedGamePlayButton>
                        <FaPlay /> Chơi ngay
                      </FeaturedGamePlayButton>
                    </FeaturedGameOverlay>
                  </FeaturedGame>
                ))}
              </FeaturedGamesContainer>
            </GamingSection>
            
            <GamingSection>
              <SectionTitle>Trò chơi phổ biến</SectionTitle>
              <GamesGrid>
                {filteredGames.map(game => (
                  <GameCard key={game.id}>
                    <GameImage src={game.image} alt={game.title} />
                    <GameInfo>
                      <GameTitle>{game.title}</GameTitle>
                      <GamePlayers>{game.players}</GamePlayers>
                      <GameCategory>{game.category}</GameCategory>
                      <GameButton>
                        <FaPlay /> Chơi
                      </GameButton>
                    </GameInfo>
                  </GameCard>
                ))}
              </GamesGrid>
            </GamingSection>
            
            <GamingSection>
              <SectionTitle>Bài đăng nổi bật</SectionTitle>
              <GamingPostsContainer>
                {gamingPosts.map(post => (
                  <GamingPost key={post.id}>
                    <PostHeader>
                      <PostAuthor>
                        <PostAvatar src={post.author.avatar} alt={post.author.name} />
                        <PostInfo>
                          <PostName>{post.author.name}</PostName>
                          <PostTime>{post.time} • {post.game}</PostTime>
                        </PostInfo>
                      </PostAuthor>
                      <FaEllipsisH />
                    </PostHeader>
                    
                    <PostContent>
                      <PostText>{post.text}</PostText>
                      <PostImage src={post.image} alt="" />
                    </PostContent>
                    
                    <PostStats>
                      <span>{likedPosts[post.id] ? post.likes + 1 : post.likes} lượt thích</span>
                      <span>{post.comments} bình luận</span>
                    </PostStats>
                    
                    <PostActions>
                      <PostAction 
                        active={likedPosts[post.id]} 
                        onClick={() => handleLikePost(post.id)}
                      >
                        {likedPosts[post.id] ? <FaHeart /> : <FaRegHeart />} Thích
                      </PostAction>
                      <PostAction>
                        <FaRegComment /> Bình luận
                      </PostAction>
                      <PostAction>
                        <FaShare /> Chia sẻ
                      </PostAction>
                    </PostActions>
                  </GamingPost>
                ))}
              </GamingPostsContainer>
            </GamingSection>
          </>
        );
      case 'play':
        return (
          <GamingSection>
            <SectionTitle>Trò chơi của bạn</SectionTitle>
            <GamesGrid>
              {filteredGames.slice(0, 4).map(game => (
                <GameCard key={game.id}>
                  <GameImage src={game.image} alt={game.title} />
                  <GameInfo>
                    <GameTitle>{game.title}</GameTitle>
                    <GamePlayers>{game.players}</GamePlayers>
                    <GameCategory>{game.category}</GameCategory>
                    <GameButton>
                      <FaPlay /> Chơi
                    </GameButton>
                  </GameInfo>
                </GameCard>
              ))}
            </GamesGrid>
          </GamingSection>
        );
      case 'tournaments':
        return (
          <GamingSection>
            <SectionTitle>Giải đấu sắp diễn ra</SectionTitle>
            <p>Chưa có giải đấu nào sắp diễn ra.</p>
          </GamingSection>
        );
      default:
        return null;
    }
  };
  
  return (
    <GamingContainer>
      <GamingLeftSidebar>
        <SidebarItem active={activeTab === 'home'} onClick={() => setActiveTab('home')}>
          <SidebarIcon>
            <FaGamepad />
          </SidebarIcon>
          <SidebarText>Trang chủ</SidebarText>
        </SidebarItem>
        
        <SidebarItem active={activeTab === 'play'} onClick={() => setActiveTab('play')}>
          <SidebarIcon>
            <FaPlay />
          </SidebarIcon>
          <SidebarText>Chơi game</SidebarText>
        </SidebarItem>
        
        <SidebarItem active={activeTab === 'tournaments'} onClick={() => setActiveTab('tournaments')}>
          <SidebarIcon>
            <FaTrophy />
          </SidebarIcon>
          <SidebarText>Giải đấu</SidebarText>
        </SidebarItem>
        
        <SidebarItem>
          <SidebarIcon>
            <FaUsers />
          </SidebarIcon>
          <SidebarText>Cộng đồng</SidebarText>
        </SidebarItem>
        
        <SidebarItem>
          <SidebarIcon>
            <FaRegClock />
          </SidebarIcon>
          <SidebarText>Hoạt động gần đây</SidebarText>
        </SidebarItem>
      </GamingLeftSidebar>
      
      <GamingContent>
        <GamingHeader>
          <GamingTitle>Gaming</GamingTitle>
          
          <SearchContainer>
            <SearchIcon>
              <FaSearch />
            </SearchIcon>
            <SearchInput 
              placeholder="Tìm kiếm trò chơi" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchContainer>
        </GamingHeader>
        
        <GamingTabs>
          <GamingTab 
            active={activeTab === 'home'} 
            onClick={() => setActiveTab('home')}
          >
            Trang chủ
          </GamingTab>
          <GamingTab 
            active={activeTab === 'play'} 
            onClick={() => setActiveTab('play')}
          >
            Chơi game
          </GamingTab>
          <GamingTab 
            active={activeTab === 'tournaments'} 
            onClick={() => setActiveTab('tournaments')}
          >
            Giải đấu
          </GamingTab>
        </GamingTabs>
        
        {renderContent()}
      </GamingContent>
    </GamingContainer>
  );
};

export default Gaming; 
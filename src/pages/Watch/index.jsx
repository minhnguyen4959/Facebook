import React, { useState } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaExpand, FaThumbsUp, FaRegThumbsUp, FaRegComment, FaShare, FaEllipsisH, FaSearch } from 'react-icons/fa';
import {
  WatchContainer,
  WatchLeftSidebar,
  WatchContent,
  SidebarItem,
  SidebarIcon,
  SidebarText,
  SidebarDivider,
  SidebarTitle,
  VideoPlayer,
  VideoControls,
  VideoProgressBar,
  VideoProgress,
  VideoControlButton,
  VideoTime,
  VideoVolume,
  VideoVolumeSlider,
  VideoCard,
  VideoCardHeader,
  VideoCardTitle,
  VideoCardChannel,
  VideoCardViews,
  VideoCardImage,
  VideoCardActions,
  VideoCardAction,
  VideoCardDescription,
  VideoGrid,
  SearchContainer,
  SearchIcon,
  SearchInput,
  VideoPlayerContainer,
  VideoPlayerOverlay,
  VideoPlayerTitle,
  VideoPlayerChannel,
  VideoPlayerInfo,
  VideoPlayerViews,
  VideoPlayerDate
} from './styles';

// Dữ liệu mẫu cho video
const videosData = [
  {
    id: 1,
    title: 'Hướng dẫn nấu món Phở Bò truyền thống Việt Nam',
    channel: 'Món Ngon Mỗi Ngày',
    views: '1.2M lượt xem',
    date: '2 tháng trước',
    thumbnail: 'https://picsum.photos/id/1/600/400',
    likes: 25000,
    comments: 1200,
    description: 'Hướng dẫn chi tiết cách nấu món Phở Bò truyền thống của Việt Nam. Từ cách ninh xương, ướp thịt đến cách chuẩn bị các loại gia vị đặc trưng.'
  },
  {
    id: 2,
    title: 'Review iPhone 15 Pro Max sau 1 tháng sử dụng',
    channel: 'Tech Review VN',
    views: '850K lượt xem',
    date: '1 tuần trước',
    thumbnail: 'https://picsum.photos/id/2/600/400',
    likes: 18000,
    comments: 950,
    description: 'Đánh giá chi tiết iPhone 15 Pro Max sau 1 tháng sử dụng. Ưu điểm, nhược điểm và so sánh với các dòng điện thoại cao cấp khác trên thị trường.'
  },
  {
    id: 3,
    title: 'Bài tập Yoga giúp giảm đau lưng hiệu quả',
    channel: 'Yoga Tại Nhà',
    views: '500K lượt xem',
    date: '3 ngày trước',
    thumbnail: 'https://picsum.photos/id/3/600/400',
    likes: 12000,
    comments: 450,
    description: 'Tổng hợp các bài tập Yoga đơn giản nhưng hiệu quả giúp giảm đau lưng, phù hợp cho người ngồi nhiều và ít vận động.'
  },
  {
    id: 4,
    title: 'Khám phá Đà Lạt - Thành phố ngàn hoa',
    channel: 'Viet Travel',
    views: '1.5M lượt xem',
    date: '2 tuần trước',
    thumbnail: 'https://picsum.photos/id/4/600/400',
    likes: 30000,
    comments: 1800,
    description: 'Cùng khám phá Đà Lạt - thành phố ngàn hoa với những địa điểm du lịch nổi tiếng, ẩm thực đặc sắc và kinh nghiệm du lịch tiết kiệm.'
  },
  {
    id: 5,
    title: 'Hướng dẫn làm bánh Trung Thu nhân thập cẩm',
    channel: 'Bếp Việt',
    views: '900K lượt xem',
    date: '1 tháng trước',
    thumbnail: 'https://picsum.photos/id/5/600/400',
    likes: 22000,
    comments: 1100,
    description: 'Hướng dẫn chi tiết cách làm bánh Trung Thu nhân thập cẩm truyền thống tại nhà, từ cách làm vỏ bánh, nhân bánh đến cách nướng bánh.'
  },
  {
    id: 6,
    title: 'Tổng hợp bàn thắng đẹp nhất World Cup 2022',
    channel: 'Thể Thao 24h',
    views: '2.8M lượt xem',
    date: '8 tháng trước',
    thumbnail: 'https://picsum.photos/id/6/600/400',
    likes: 45000,
    comments: 2200,
    description: 'Tổng hợp những bàn thắng đẹp nhất, ấn tượng nhất tại World Cup 2022 với những pha bóng kỹ thuật, những cú sút xa đẳng cấp.'
  }
];

const Watch = () => {
  const [currentVideo, setCurrentVideo] = useState(videosData[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(80);
  const [likedVideos, setLikedVideos] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const handleVideoClick = (video) => {
    setCurrentVideo(video);
    setIsPlaying(true);
    setProgress(0);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    if (e.target.value === '0') {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };

  const handleProgressChange = (e) => {
    setProgress(e.target.value);
  };

  const handleLikeVideo = (id) => {
    setLikedVideos(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const filteredVideos = videosData.filter(video => 
    video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    video.channel.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <WatchContainer>
      <WatchLeftSidebar>
        <SidebarItem active>
          <SidebarIcon>
            <FaPlay />
          </SidebarIcon>
          <SidebarText>Trang chủ</SidebarText>
        </SidebarItem>
        
        <SidebarItem>
          <SidebarIcon>
            <FaThumbsUp />
          </SidebarIcon>
          <SidebarText>Video đã thích</SidebarText>
        </SidebarItem>
        
        <SidebarItem>
          <SidebarIcon>
            <FaShare />
          </SidebarIcon>
          <SidebarText>Video đã chia sẻ</SidebarText>
        </SidebarItem>
        
        <SidebarDivider />
        
        <SidebarTitle>Đăng ký</SidebarTitle>
        
        {videosData.slice(0, 5).map((video, index) => (
          <SidebarItem key={index}>
            <SidebarIcon>
              <img src={`https://i.pravatar.cc/150?img=${index + 20}`} alt={video.channel} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
            </SidebarIcon>
            <SidebarText>{video.channel}</SidebarText>
          </SidebarItem>
        ))}
      </WatchLeftSidebar>
      
      <WatchContent>
        <SearchContainer>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
          <SearchInput 
            placeholder="Tìm kiếm video" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
        
        <VideoPlayerContainer>
          <VideoPlayer>
            <img src={currentVideo.thumbnail} alt={currentVideo.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            {!isPlaying && (
              <VideoPlayerOverlay onClick={togglePlay}>
                <FaPlay size={50} />
              </VideoPlayerOverlay>
            )}
          </VideoPlayer>
          
          <VideoControls>
            <VideoProgressBar>
              <VideoProgress 
                type="range" 
                min="0" 
                max="100" 
                value={progress} 
                onChange={handleProgressChange} 
              />
            </VideoProgressBar>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 8px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <VideoControlButton onClick={togglePlay}>
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </VideoControlButton>
                
                <VideoVolume>
                  <VideoControlButton onClick={toggleMute}>
                    {isMuted || volume === '0' ? <FaVolumeMute /> : <FaVolumeUp />}
                  </VideoControlButton>
                  <VideoVolumeSlider 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={volume} 
                    onChange={handleVolumeChange} 
                  />
                </VideoVolume>
                
                <VideoTime>
                  {formatTime(progress * 3)} / {formatTime(300)}
                </VideoTime>
              </div>
              
              <VideoControlButton>
                <FaExpand />
              </VideoControlButton>
            </div>
          </VideoControls>
          
          <VideoPlayerInfo>
            <VideoPlayerTitle>{currentVideo.title}</VideoPlayerTitle>
            <VideoPlayerChannel>{currentVideo.channel}</VideoPlayerChannel>
            <div style={{ display: 'flex', gap: '8px', fontSize: '14px', color: '#65676B' }}>
              <VideoPlayerViews>{currentVideo.views}</VideoPlayerViews>
              <VideoPlayerDate>{currentVideo.date}</VideoPlayerDate>
            </div>
          </VideoPlayerInfo>
          
          <VideoCardActions>
            <VideoCardAction 
              active={likedVideos[currentVideo.id]} 
              onClick={() => handleLikeVideo(currentVideo.id)}
            >
              {likedVideos[currentVideo.id] ? <FaThumbsUp /> : <FaRegThumbsUp />}
              {currentVideo.likes + (likedVideos[currentVideo.id] ? 1 : 0)}
            </VideoCardAction>
            <VideoCardAction>
              <FaRegComment />
              {currentVideo.comments}
            </VideoCardAction>
            <VideoCardAction>
              <FaShare />
              Chia sẻ
            </VideoCardAction>
            <VideoCardAction>
              <FaEllipsisH />
            </VideoCardAction>
          </VideoCardActions>
          
          <VideoCardDescription>
            {currentVideo.description}
          </VideoCardDescription>
        </VideoPlayerContainer>
        
        <SidebarTitle>Video đề xuất</SidebarTitle>
        
        <VideoGrid>
          {filteredVideos.filter(video => video.id !== currentVideo.id).map(video => (
            <VideoCard key={video.id} onClick={() => handleVideoClick(video)}>
              <VideoCardImage src={video.thumbnail} alt={video.title} />
              <VideoCardHeader>
                <div>
                  <VideoCardTitle>{video.title}</VideoCardTitle>
                  <VideoCardChannel>{video.channel}</VideoCardChannel>
                  <VideoCardViews>{video.views} • {video.date}</VideoCardViews>
                </div>
              </VideoCardHeader>
            </VideoCard>
          ))}
        </VideoGrid>
      </WatchContent>
    </WatchContainer>
  );
};

export default Watch; 
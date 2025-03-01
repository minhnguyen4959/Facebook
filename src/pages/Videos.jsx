import React, { useState } from 'react';
import { Card, Button, Icon, InputGroup, Tabs, Tab } from '@blueprintjs/core';
import './Videos.css';

const Videos = () => {
  const [activeTab, setActiveTab] = useState('home');
  
  const videos = [
    {
      id: 1,
      title: 'Hướng dẫn làm bánh trung thu nhân thập cẩm',
      channel: 'Món Ngon Mỗi Ngày',
      views: '1.2M lượt xem',
      time: '2 tuần trước',
      duration: '15:24',
      thumbnail: 'https://placehold.co/600x400/1877F2/FFFFFF/png?text=Cooking+Video',
      channelAvatar: `https://ui-avatars.com/api/?name=Món+Ngon&background=1877F2&color=fff&size=128`
    },
    {
      id: 2,
      title: 'Review iPhone 15 Pro Max sau 1 tháng sử dụng',
      channel: 'Tech Review VN',
      views: '850K lượt xem',
      time: '3 ngày trước',
      duration: '12:45',
      thumbnail: 'https://placehold.co/600x400/E7A33E/FFFFFF/png?text=Tech+Review',
      channelAvatar: `https://ui-avatars.com/api/?name=Tech+Review&background=E7A33E&color=fff&size=128`
    },
    {
      id: 3,
      title: 'Tập yoga tại nhà - Bài tập cho người mới bắt đầu',
      channel: 'Yoga For Life',
      views: '450K lượt xem',
      time: '1 tháng trước',
      duration: '28:15',
      thumbnail: 'https://placehold.co/600x400/42B72A/FFFFFF/png?text=Yoga+Video',
      channelAvatar: `https://ui-avatars.com/api/?name=Yoga&background=42B72A&color=fff&size=128`
    },
    {
      id: 4,
      title: 'Khám phá Đà Lạt mùa hoa dã quỳ',
      channel: 'Du Lịch Việt',
      views: '1.5M lượt xem',
      time: '2 tháng trước',
      duration: '18:30',
      thumbnail: 'https://placehold.co/600x400/F5533D/FFFFFF/png?text=Travel+Video',
      channelAvatar: `https://ui-avatars.com/api/?name=Du+Lịch&background=F5533D&color=fff&size=128`
    },
    {
      id: 5,
      title: 'Bí quyết học tiếng Anh hiệu quả',
      channel: 'English Master',
      views: '720K lượt xem',
      time: '3 tuần trước',
      duration: '22:10',
      thumbnail: 'https://placehold.co/600x400/9360F7/FFFFFF/png?text=English+Learning',
      channelAvatar: `https://ui-avatars.com/api/?name=English&background=9360F7&color=fff&size=128`
    },
    {
      id: 6,
      title: 'Hướng dẫn chăm sóc cây cảnh trong nhà',
      channel: 'Vườn Xinh',
      views: '380K lượt xem',
      time: '1 tuần trước',
      duration: '14:50',
      thumbnail: 'https://placehold.co/600x400/2ABBA7/FFFFFF/png?text=Gardening',
      channelAvatar: `https://ui-avatars.com/api/?name=Vườn+Xinh&background=2ABBA7&color=fff&size=128`
    }
  ];
  
  const liveVideos = [
    {
      id: 7,
      title: 'Trực tiếp: Bản tin thời sự 19h',
      channel: 'VTV News',
      viewers: '15.2K người đang xem',
      thumbnail: 'https://placehold.co/600x400/F7B928/FFFFFF/png?text=Live+News',
      channelAvatar: `https://ui-avatars.com/api/?name=VTV&background=F7B928&color=fff&size=128`
    },
    {
      id: 8,
      title: 'Live: Giao lưu cùng ca sĩ Sơn Tùng MTP',
      channel: 'Music & Life',
      viewers: '45.8K người đang xem',
      thumbnail: 'https://placehold.co/600x400/F02849/FFFFFF/png?text=Music+Live',
      channelAvatar: `https://ui-avatars.com/api/?name=Music&background=F02849&color=fff&size=128`
    }
  ];
  
  return (
    <div className="videos-page">
      <div className="videos-header">
        <h1>Watch</h1>
        <InputGroup
          leftIcon="search"
          placeholder="Tìm kiếm video"
          className="videos-search"
        />
      </div>
      
      <div className="videos-container">
        <div className="videos-sidebar">
          <div className="videos-nav">
            <Button 
              icon="video" 
              text="Trang chủ" 
              fill={true} 
              alignText="left" 
              minimal={true} 
              active={activeTab === 'home'} 
              onClick={() => setActiveTab('home')}
            />
            
            <Button 
              icon="mobile-video" 
              text="Trực tiếp" 
              fill={true} 
              alignText="left" 
              minimal={true} 
              active={activeTab === 'live'} 
              onClick={() => setActiveTab('live')}
            />
            
            <Button 
              icon="film" 
              text="Reels" 
              fill={true} 
              alignText="left" 
              minimal={true} 
              active={activeTab === 'reels'} 
              onClick={() => setActiveTab('reels')}
            />
            
            <Button 
              icon="bookmark" 
              text="Video đã lưu" 
              fill={true} 
              alignText="left" 
              minimal={true} 
              active={activeTab === 'saved'} 
              onClick={() => setActiveTab('saved')}
            />
            
            <div className="videos-nav-divider"></div>
            
            <div className="videos-nav-header">
              <h3>Kênh bạn theo dõi</h3>
            </div>
            
            {videos.slice(0, 4).map(video => (
              <Button 
                key={video.id}
                icon="user" 
                text={video.channel} 
                fill={true} 
                alignText="left" 
                minimal={true} 
              />
            ))}
          </div>
        </div>
        
        <div className="videos-content">
          {activeTab === 'home' && (
            <Card className="videos-section">
              <div className="section-header">
                <h2>Video đề xuất cho bạn</h2>
              </div>
              
              <div className="videos-grid">
                {videos.map(video => (
                  <div key={video.id} className="video-card">
                    <div className="video-thumbnail">
                      <img src={video.thumbnail} alt={video.title} />
                      <div className="video-duration">{video.duration}</div>
                      <div className="video-play-button">
                        <Icon icon="play" size={24} />
                      </div>
                    </div>
                    <div className="video-info">
                      <div className="video-channel">
                        <img src={video.channelAvatar} alt={video.channel} className="channel-avatar" />
                        <div className="channel-info">
                          <div className="video-title">{video.title}</div>
                          <div className="video-meta">
                            <div className="video-channel-name">{video.channel}</div>
                            <div className="video-stats">
                              <span>{video.views}</span>
                              <span>•</span>
                              <span>{video.time}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
          
          {activeTab === 'live' && (
            <Card className="videos-section">
              <div className="section-header">
                <h2>Đang phát trực tiếp</h2>
              </div>
              
              <div className="live-videos-grid">
                {[...liveVideos, ...liveVideos].map((video, index) => (
                  <div key={`${video.id}-${index}`} className="live-video-card">
                    <div className="video-thumbnail">
                      <img src={video.thumbnail} alt={video.title} />
                      <div className="live-badge">TRỰC TIẾP</div>
                      <div className="video-play-button">
                        <Icon icon="play" size={24} />
                      </div>
                    </div>
                    <div className="video-info">
                      <div className="video-channel">
                        <img src={video.channelAvatar} alt={video.channel} className="channel-avatar" />
                        <div className="channel-info">
                          <div className="video-title">{video.title}</div>
                          <div className="video-meta">
                            <div className="video-channel-name">{video.channel}</div>
                            <div className="video-viewers">{video.viewers}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
          
          {activeTab === 'reels' && (
            <Card className="videos-section">
              <div className="section-header">
                <h2>Reels</h2>
              </div>
              
              <div className="reels-grid">
                {videos.map(video => (
                  <div key={video.id} className="reel-card">
                    <div className="reel-thumbnail">
                      <img src={video.thumbnail} alt={video.title} />
                      <div className="reel-play-button">
                        <Icon icon="play" size={24} />
                      </div>
                    </div>
                    <div className="reel-info">
                      <div className="reel-title">{video.title}</div>
                      <div className="reel-stats">
                        <span>{video.views}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
          
          {activeTab === 'saved' && (
            <Card className="videos-section">
              <div className="section-header">
                <h2>Video đã lưu</h2>
              </div>
              
              <div className="videos-grid">
                {videos.slice(0, 3).map(video => (
                  <div key={video.id} className="video-card">
                    <div className="video-thumbnail">
                      <img src={video.thumbnail} alt={video.title} />
                      <div className="video-duration">{video.duration}</div>
                      <div className="video-play-button">
                        <Icon icon="play" size={24} />
                      </div>
                    </div>
                    <div className="video-info">
                      <div className="video-channel">
                        <img src={video.channelAvatar} alt={video.channel} className="channel-avatar" />
                        <div className="channel-info">
                          <div className="video-title">{video.title}</div>
                          <div className="video-meta">
                            <div className="video-channel-name">{video.channel}</div>
                            <div className="video-stats">
                              <span>{video.views}</span>
                              <span>•</span>
                              <span>{video.time}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Videos; 
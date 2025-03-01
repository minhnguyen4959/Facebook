import React, { useState } from 'react';
import { Card, Button, Icon, Tabs, Tab } from '@blueprintjs/core';
import Feed from '../components/feed/Feed';
import { useTheme } from '../hooks/useTheme.jsx';
import './Profile.css';

const Profile = ({ currentUser }) => {
  const { darkMode } = useTheme();
  const [activeTab, setActiveTab] = useState('posts');
  
  const handleTabChange = (newTabId) => {
    setActiveTab(newTabId);
  };
  
  const posts = [
    {
      id: 1,
      user: {
        name: currentUser.name,
        avatar: currentUser.avatar
      },
      content: 'Vừa hoàn thành dự án React đầu tiên của mình!',
      image: 'https://placehold.co/600x400/1877F2/FFFFFF/png?text=React+Project',
      time: '1 tuần trước',
      likes: 45,
      comments: 12,
      shares: 5
    },
    {
      id: 2,
      user: {
        name: currentUser.name,
        avatar: currentUser.avatar
      },
      content: 'Cuối tuần đi Đà Lạt, không khí thật mát mẻ!',
      image: 'https://placehold.co/600x400/42B72A/FFFFFF/png?text=Da+Lat+Trip',
      time: '2 tuần trước',
      likes: 78,
      comments: 23,
      shares: 8
    }
  ];
  
  const friends = [
    { 
      name: 'Nguyễn Văn B', 
      avatar: `https://ui-avatars.com/api/?name=Nguyễn+Văn+B&background=4267B2&color=fff&size=128`,
      mutualFriends: 12
    },
    { 
      name: 'Trần Thị C', 
      avatar: `https://ui-avatars.com/api/?name=Trần+Thị+C&background=E7A33E&color=fff&size=128`,
      mutualFriends: 8
    },
    { 
      name: 'Lê Văn D', 
      avatar: `https://ui-avatars.com/api/?name=Lê+Văn+D&background=42B72A&color=fff&size=128`,
      mutualFriends: 5
    },
    { 
      name: 'Phạm Thị E', 
      avatar: `https://ui-avatars.com/api/?name=Phạm+Thị+E&background=F5533D&color=fff&size=128`,
      mutualFriends: 3
    },
    { 
      name: 'Hoàng Văn F', 
      avatar: `https://ui-avatars.com/api/?name=Hoàng+Văn+F&background=9360F7&color=fff&size=128`,
      mutualFriends: 7
    },
    { 
      name: 'Ngô Thị G', 
      avatar: `https://ui-avatars.com/api/?name=Ngô+Thị+G&background=2ABBA7&color=fff&size=128`,
      mutualFriends: 2
    }
  ];
  
  const photos = [
    'https://placehold.co/300x300/1877F2/FFFFFF/png?text=Photo+1',
    'https://placehold.co/300x300/E7A33E/FFFFFF/png?text=Photo+2',
    'https://placehold.co/300x300/42B72A/FFFFFF/png?text=Photo+3',
    'https://placehold.co/300x300/F5533D/FFFFFF/png?text=Photo+4',
    'https://placehold.co/300x300/9360F7/FFFFFF/png?text=Photo+5',
    'https://placehold.co/300x300/2ABBA7/FFFFFF/png?text=Photo+6',
    'https://placehold.co/300x300/F7B928/FFFFFF/png?text=Photo+7',
    'https://placehold.co/300x300/F02849/FFFFFF/png?text=Photo+8',
    'https://placehold.co/300x300/1877F2/FFFFFF/png?text=Photo+9'
  ];

  return (
    <div className={`profile-page ${darkMode ? 'dark-mode' : ''}`}>
      <div className="profile-header">
        <div className="profile-cover">
          <img src="https://placehold.co/1200x400/1877F2/FFFFFF/png?text=Cover+Photo" alt="Cover" />
          <Button icon="edit" className="cover-edit-btn" minimal={true} />
        </div>
        
        <div className="profile-info">
          <div className="profile-avatar">
            <img src={currentUser.avatar} alt={currentUser.name} />
            <Button icon="camera" className="avatar-edit-btn" minimal={true} />
          </div>
          
          <div className="profile-details">
            <h1 className="profile-name">{currentUser.name}</h1>
            <p className="profile-friends">1.2K bạn bè</p>
            
            <div className="profile-friend-avatars">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="friend-avatar">
                  <img 
                    src={`https://ui-avatars.com/api/?name=Friend+${index+1}&background=${Math.floor(Math.random()*16777215).toString(16)}&color=fff&size=128`} 
                    alt={`Friend ${index+1}`} 
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="profile-actions">
            <Button 
              icon="edit" 
              intent="primary" 
              text="Chỉnh sửa trang cá nhân" 
            />
            <Button 
              icon="eye-open" 
              text="Xem như" 
              minimal={true} 
            />
            <Button 
              icon="search" 
              text="Tìm kiếm" 
              minimal={true} 
            />
          </div>
        </div>
        
        <div className="profile-nav">
          <Tabs 
            id="profile-tabs" 
            selectedTabId={activeTab} 
            onChange={handleTabChange}
            animate={true}
          >
            <Tab id="posts" title="Bài viết" />
            <Tab id="about" title="Giới thiệu" />
            <Tab id="friends" title="Bạn bè" />
            <Tab id="photos" title="Ảnh" />
            <Tab id="videos" title="Video" />
            <Tab id="more" title="Xem thêm" />
          </Tabs>
        </div>
      </div>
      
      <div className="profile-content">
        <div className="profile-sidebar">
          <Card className="about-card">
            <h3>Giới thiệu</h3>
            <div className="about-item">
              <Icon icon="office" />
              <span>Làm việc tại <strong>Công ty ABC</strong></span>
            </div>
            <div className="about-item">
              <Icon icon="education" />
              <span>Học tại <strong>Đại học XYZ</strong></span>
            </div>
            <div className="about-item">
              <Icon icon="home" />
              <span>Sống tại <strong>Hà Nội</strong></span>
            </div>
            <div className="about-item">
              <Icon icon="map-marker" />
              <span>Đến từ <strong>Hà Nội</strong></span>
            </div>
            <div className="about-item">
              <Icon icon="heart" />
              <span><strong>Độc thân</strong></span>
            </div>
            <Button text="Chỉnh sửa chi tiết" fill={true} minimal={true} />
          </Card>
          
          <Card className="photos-card">
            <div className="card-header">
              <h3>Ảnh</h3>
              <Button text="Xem tất cả ảnh" minimal={true} small={true} />
            </div>
            
            <div className="photos-grid">
              {[...Array(9)].map((_, index) => (
                <div key={index} className="photo-item">
                  <img 
                    src={`https://placehold.co/300x300/${Math.floor(Math.random()*16777215).toString(16)}/FFFFFF/png?text=Photo+${index+1}`} 
                    alt={`Photo ${index+1}`} 
                  />
                </div>
              ))}
            </div>
          </Card>
          
          <Card className="friends-card">
            <div className="card-header">
              <h3>Bạn bè</h3>
              <Button text="Xem tất cả bạn bè" minimal={true} small={true} />
            </div>
            
            <p className="friends-count">1.2K bạn bè</p>
            
            <div className="friends-grid">
              {[...Array(9)].map((_, index) => (
                <div key={index} className="friend-item">
                  <div className="friend-avatar">
                    <img 
                      src={`https://ui-avatars.com/api/?name=Friend+${index+1}&background=${Math.floor(Math.random()*16777215).toString(16)}&color=fff&size=128`} 
                      alt={`Friend ${index+1}`} 
                    />
                  </div>
                  <div className="friend-name">Người dùng {index+1}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        <div className="profile-main">
          {activeTab === 'posts' && (
            <>
              <Card className="composer-card">
                <div className="composer-top">
                  <div className="composer-avatar">
                    <img src={currentUser.avatar} alt={currentUser.name} />
                  </div>
                  <div className="composer-input">
                    <input type="text" placeholder={`${currentUser.name} ơi, bạn đang nghĩ gì thế?`} />
                  </div>
                </div>
                
                <div className="composer-actions">
                  <Button icon="media" text="Ảnh/Video" minimal={true} />
                  <Button icon="tag" text="Gắn thẻ" minimal={true} />
                  <Button icon="emoji" text="Cảm xúc" minimal={true} />
                  <Button icon="map-marker" text="Check in" minimal={true} />
                </div>
              </Card>
              
              <Feed currentUser={currentUser} />
            </>
          )}
          
          {activeTab === 'about' && (
            <Card className="about-content">
              <h2>Giới thiệu</h2>
              <div className="about-section">
                <h3>Công việc và học vấn</h3>
                <div className="about-item-large">
                  <Icon icon="office" size={24} />
                  <div>
                    <p>Làm việc tại <strong>Công ty ABC</strong></p>
                    <p className="text-muted">Từ tháng 6, 2020</p>
                  </div>
                </div>
                <div className="about-item-large">
                  <Icon icon="education" size={24} />
                  <div>
                    <p>Học tại <strong>Đại học XYZ</strong></p>
                    <p className="text-muted">Tốt nghiệp năm 2019</p>
                  </div>
                </div>
              </div>
              
              <div className="about-section">
                <h3>Nơi từng sống</h3>
                <div className="about-item-large">
                  <Icon icon="home" size={24} />
                  <div>
                    <p>Sống tại <strong>Hà Nội</strong></p>
                    <p className="text-muted">Từ năm 2015</p>
                  </div>
                </div>
                <div className="about-item-large">
                  <Icon icon="map-marker" size={24} />
                  <div>
                    <p>Đến từ <strong>Hà Nội</strong></p>
                  </div>
                </div>
              </div>
              
              <div className="about-section">
                <h3>Thông tin cơ bản</h3>
                <div className="about-item-large">
                  <Icon icon="heart" size={24} />
                  <div>
                    <p><strong>Độc thân</strong></p>
                  </div>
                </div>
                <div className="about-item-large">
                  <Icon icon="calendar" size={24} />
                  <div>
                    <p>Sinh nhật <strong>1 tháng 1, 1990</strong></p>
                  </div>
                </div>
                <div className="about-item-large">
                  <Icon icon="gender" size={24} />
                  <div>
                    <p><strong>Nam</strong></p>
                  </div>
                </div>
              </div>
            </Card>
          )}
          
          {activeTab === 'friends' && (
            <Card className="friends-content">
              <div className="friends-header">
                <h2>Bạn bè</h2>
                <div className="friends-search">
                  <Icon icon="search" />
                  <input type="text" placeholder="Tìm kiếm bạn bè" />
                </div>
              </div>
              
              <div className="friends-categories">
                <Button text="Tất cả bạn bè" active={true} minimal={true} />
                <Button text="Bạn bè gần đây" minimal={true} />
                <Button text="Học cùng" minimal={true} />
                <Button text="Làm cùng" minimal={true} />
                <Button text="Sống tại cùng thành phố" minimal={true} />
              </div>
              
              <div className="friends-grid-large">
                {[...Array(12)].map((_, index) => (
                  <div key={index} className="friend-card">
                    <div className="friend-card-avatar">
                      <img 
                        src={`https://ui-avatars.com/api/?name=Friend+${index+1}&background=${Math.floor(Math.random()*16777215).toString(16)}&color=fff&size=128`} 
                        alt={`Friend ${index+1}`} 
                      />
                    </div>
                    <div className="friend-card-info">
                      <h3>Người dùng {index+1}</h3>
                      <p className="text-muted">15 bạn chung</p>
                    </div>
                    <div className="friend-card-actions">
                      <Button icon="more" minimal={true} />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
          
          {activeTab === 'photos' && (
            <Card className="photos-content">
              <div className="photos-header">
                <h2>Ảnh</h2>
                <Button text="Thêm ảnh" icon="add" intent="primary" />
              </div>
              
              <div className="photos-categories">
                <Button text="Ảnh của bạn" active={true} minimal={true} />
                <Button text="Ảnh có mặt bạn" minimal={true} />
                <Button text="Album" minimal={true} />
              </div>
              
              <div className="photos-grid-large">
                {[...Array(12)].map((_, index) => (
                  <div key={index} className="photo-card">
                    <img 
                      src={`https://placehold.co/600x600/${Math.floor(Math.random()*16777215).toString(16)}/FFFFFF/png?text=Photo+${index+1}`} 
                      alt={`Photo ${index+1}`} 
                    />
                  </div>
                ))}
              </div>
            </Card>
          )}
          
          {activeTab === 'videos' && (
            <Card className="videos-content">
              <div className="videos-header">
                <h2>Video</h2>
                <Button text="Thêm video" icon="add" intent="primary" />
              </div>
              
              <div className="videos-categories">
                <Button text="Video của bạn" active={true} minimal={true} />
                <Button text="Video có mặt bạn" minimal={true} />
              </div>
              
              <div className="videos-grid">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="video-card">
                    <div className="video-thumbnail">
                      <img 
                        src={`https://placehold.co/600x400/${Math.floor(Math.random()*16777215).toString(16)}/FFFFFF/png?text=Video+${index+1}`} 
                        alt={`Video ${index+1}`} 
                      />
                      <div className="video-duration">3:45</div>
                      <div className="video-play-button">
                        <Icon icon="play" size={24} />
                      </div>
                    </div>
                    <div className="video-info">
                      <h3>Video {index+1}</h3>
                      <p className="text-muted">Đăng ngày 1 tháng 1, 2023</p>
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

export default Profile; 
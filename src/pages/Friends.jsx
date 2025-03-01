import React, { useState } from 'react';
import { Card, Button, Icon, InputGroup, Tabs, Tab } from '@blueprintjs/core';
import './Friends.css';

const Friends = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const allFriends = [
    { 
      id: 1,
      name: 'Nguyễn Văn B', 
      avatar: `https://ui-avatars.com/api/?name=Nguyễn+Văn+B&background=4267B2&color=fff&size=128`,
      mutualFriends: 12
    },
    { 
      id: 2,
      name: 'Trần Thị C', 
      avatar: `https://ui-avatars.com/api/?name=Trần+Thị+C&background=E7A33E&color=fff&size=128`,
      mutualFriends: 8
    },
    { 
      id: 3,
      name: 'Lê Văn D', 
      avatar: `https://ui-avatars.com/api/?name=Lê+Văn+D&background=42B72A&color=fff&size=128`,
      mutualFriends: 5
    },
    { 
      id: 4,
      name: 'Phạm Thị E', 
      avatar: `https://ui-avatars.com/api/?name=Phạm+Thị+E&background=F5533D&color=fff&size=128`,
      mutualFriends: 3
    },
    { 
      id: 5,
      name: 'Hoàng Văn F', 
      avatar: `https://ui-avatars.com/api/?name=Hoàng+Văn+F&background=9360F7&color=fff&size=128`,
      mutualFriends: 7
    },
    { 
      id: 6,
      name: 'Ngô Thị G', 
      avatar: `https://ui-avatars.com/api/?name=Ngô+Thị+G&background=2ABBA7&color=fff&size=128`,
      mutualFriends: 2
    },
    { 
      id: 7,
      name: 'Đặng Văn H', 
      avatar: `https://ui-avatars.com/api/?name=Đặng+Văn+H&background=F7B928&color=fff&size=128`,
      mutualFriends: 9
    },
    { 
      id: 8,
      name: 'Vũ Thị I', 
      avatar: `https://ui-avatars.com/api/?name=Vũ+Thị+I&background=F02849&color=fff&size=128`,
      mutualFriends: 4
    }
  ];
  
  const friendRequests = [
    {
      id: 9,
      name: 'Bùi Văn J',
      avatar: `https://ui-avatars.com/api/?name=Bùi+Văn+J&background=1877F2&color=fff&size=128`,
      mutualFriends: 6,
      time: '2 ngày trước'
    },
    {
      id: 10,
      name: 'Dương Thị K',
      avatar: `https://ui-avatars.com/api/?name=Dương+Thị+K&background=E7A33E&color=fff&size=128`,
      mutualFriends: 3,
      time: '1 tuần trước'
    },
    {
      id: 11,
      name: 'Hồ Văn L',
      avatar: `https://ui-avatars.com/api/?name=Hồ+Văn+L&background=42B72A&color=fff&size=128`,
      mutualFriends: 8,
      time: '3 ngày trước'
    }
  ];
  
  const suggestions = [
    {
      id: 12,
      name: 'Mai Thị M',
      avatar: `https://ui-avatars.com/api/?name=Mai+Thị+M&background=F5533D&color=fff&size=128`,
      mutualFriends: 15
    },
    {
      id: 13,
      name: 'Phan Văn N',
      avatar: `https://ui-avatars.com/api/?name=Phan+Văn+N&background=9360F7&color=fff&size=128`,
      mutualFriends: 7
    },
    {
      id: 14,
      name: 'Trịnh Thị O',
      avatar: `https://ui-avatars.com/api/?name=Trịnh+Thị+O&background=2ABBA7&color=fff&size=128`,
      mutualFriends: 9
    },
    {
      id: 15,
      name: 'Lý Văn P',
      avatar: `https://ui-avatars.com/api/?name=Lý+Văn+P&background=F7B928&color=fff&size=128`,
      mutualFriends: 4
    }
  ];
  
  return (
    <div className="friends-page">
      <div className="friends-header">
        <h1>Bạn bè</h1>
        <InputGroup
          leftIcon="search"
          placeholder="Tìm kiếm bạn bè"
          className="friends-search"
        />
      </div>
      
      <div className="friends-container">
        <div className="friends-sidebar">
          <div className="friends-nav">
            <Button 
              icon="people" 
              text="Trang chủ bạn bè" 
              fill={true} 
              alignText="left" 
              minimal={true} 
              active={activeTab === 'all'} 
              onClick={() => setActiveTab('all')}
            />
            <Button 
              icon="notifications" 
              text="Lời mời kết bạn" 
              fill={true} 
              alignText="left" 
              minimal={true} 
              active={activeTab === 'requests'} 
              onClick={() => setActiveTab('requests')}
              rightIcon={<span className="request-count">{friendRequests.length}</span>}
            />
            <Button 
              icon="add" 
              text="Gợi ý" 
              fill={true} 
              alignText="left" 
              minimal={true} 
              active={activeTab === 'suggestions'} 
              onClick={() => setActiveTab('suggestions')}
            />
            <Button 
              icon="list" 
              text="Tất cả bạn bè" 
              fill={true} 
              alignText="left" 
              minimal={true} 
              active={activeTab === 'list'} 
              onClick={() => setActiveTab('list')}
              rightIcon={<span className="friends-count">{allFriends.length}</span>}
            />
            <Button 
              icon="birthday-cake" 
              text="Sinh nhật" 
              fill={true} 
              alignText="left" 
              minimal={true} 
              active={activeTab === 'birthdays'} 
              onClick={() => setActiveTab('birthdays')}
            />
            <Button 
              icon="user" 
              text="Danh sách tùy chỉnh" 
              fill={true} 
              alignText="left" 
              minimal={true} 
              active={activeTab === 'custom'} 
              onClick={() => setActiveTab('custom')}
            />
          </div>
        </div>
        
        <div className="friends-content">
          {activeTab === 'all' && (
            <>
              <Card className="friends-section">
                <div className="section-header">
                  <h2>Lời mời kết bạn</h2>
                  {friendRequests.length > 0 && (
                    <Button text={`Xem tất cả ${friendRequests.length}`} minimal={true} onClick={() => setActiveTab('requests')} />
                  )}
                </div>
                
                {friendRequests.length > 0 ? (
                  <div className="friend-requests">
                    {friendRequests.slice(0, 2).map(request => (
                      <div key={request.id} className="friend-request-card">
                        <div className="friend-request-avatar">
                          <img src={request.avatar} alt={request.name} />
                        </div>
                        <div className="friend-request-info">
                          <div className="friend-request-name">{request.name}</div>
                          <div className="friend-request-mutual">
                            {request.mutualFriends} bạn chung
                          </div>
                          <div className="friend-request-time">{request.time}</div>
                          <div className="friend-request-actions">
                            <Button intent="primary" text="Xác nhận" />
                            <Button text="Xóa" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="empty-state">
                    <Icon icon="info-sign" size={20} />
                    <p>Không có lời mời kết bạn nào</p>
                  </div>
                )}
              </Card>
              
              <Card className="friends-section">
                <div className="section-header">
                  <h2>Những người bạn có thể biết</h2>
                  <Button text="Xem tất cả" minimal={true} onClick={() => setActiveTab('suggestions')} />
                </div>
                
                <div className="friend-suggestions">
                  {suggestions.map(suggestion => (
                    <div key={suggestion.id} className="friend-suggestion-card">
                      <div className="friend-suggestion-avatar">
                        <img src={suggestion.avatar} alt={suggestion.name} />
                      </div>
                      <div className="friend-suggestion-info">
                        <div className="friend-suggestion-name">{suggestion.name}</div>
                        <div className="friend-suggestion-mutual">
                          {suggestion.mutualFriends} bạn chung
                        </div>
                        <div className="friend-suggestion-actions">
                          <Button intent="primary" text="Thêm bạn bè" icon="add" />
                          <Button text="Xóa" minimal={true} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </>
          )}
          
          {activeTab === 'requests' && (
            <Card className="friends-section">
              <div className="section-header">
                <h2>Lời mời kết bạn</h2>
              </div>
              
              {friendRequests.length > 0 ? (
                <div className="friend-requests-grid">
                  {friendRequests.map(request => (
                    <div key={request.id} className="friend-request-card">
                      <div className="friend-request-avatar">
                        <img src={request.avatar} alt={request.name} />
                      </div>
                      <div className="friend-request-info">
                        <div className="friend-request-name">{request.name}</div>
                        <div className="friend-request-mutual">
                          {request.mutualFriends} bạn chung
                        </div>
                        <div className="friend-request-time">{request.time}</div>
                        <div className="friend-request-actions">
                          <Button intent="primary" text="Xác nhận" />
                          <Button text="Xóa" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <Icon icon="info-sign" size={20} />
                  <p>Không có lời mời kết bạn nào</p>
                </div>
              )}
            </Card>
          )}
          
          {activeTab === 'suggestions' && (
            <Card className="friends-section">
              <div className="section-header">
                <h2>Những người bạn có thể biết</h2>
              </div>
              
              <div className="friend-suggestions-grid">
                {suggestions.map(suggestion => (
                  <div key={suggestion.id} className="friend-suggestion-card">
                    <div className="friend-suggestion-avatar">
                      <img src={suggestion.avatar} alt={suggestion.name} />
                    </div>
                    <div className="friend-suggestion-info">
                      <div className="friend-suggestion-name">{suggestion.name}</div>
                      <div className="friend-suggestion-mutual">
                        {suggestion.mutualFriends} bạn chung
                      </div>
                      <div className="friend-suggestion-actions">
                        <Button intent="primary" text="Thêm bạn bè" icon="add" />
                        <Button text="Xóa" minimal={true} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
          
          {activeTab === 'list' && (
            <Card className="friends-section">
              <div className="section-header">
                <h2>Tất cả bạn bè</h2>
                <InputGroup
                  leftIcon="search"
                  placeholder="Tìm kiếm bạn bè"
                  className="friends-list-search"
                />
              </div>
              
              <div className="friends-list-grid">
                {allFriends.map(friend => (
                  <div key={friend.id} className="friend-card">
                    <div className="friend-card-avatar">
                      <img src={friend.avatar} alt={friend.name} />
                    </div>
                    <div className="friend-card-info">
                      <div className="friend-card-name">{friend.name}</div>
                      <div className="friend-card-mutual">
                        {friend.mutualFriends} bạn chung
                      </div>
                      <div className="friend-card-actions">
                        <Button icon="user" text="Bạn bè" minimal={true} />
                        <Button icon="more" minimal={true} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
          
          {activeTab === 'birthdays' && (
            <Card className="friends-section">
              <div className="section-header">
                <h2>Sinh nhật</h2>
              </div>
              
              <div className="birthdays-list">
                <div className="birthday-today">
                  <h3>Hôm nay</h3>
                  <div className="birthday-card">
                    <div className="birthday-avatar">
                      <img src={`https://ui-avatars.com/api/?name=Nguyễn+Văn+B&background=4267B2&color=fff&size=128`} alt="Nguyễn Văn B" />
                    </div>
                    <div className="birthday-info">
                      <div className="birthday-name">Nguyễn Văn B</div>
                      <div className="birthday-age">25 tuổi</div>
                      <Button intent="primary" text="Gửi lời chúc" icon="envelope" />
                    </div>
                  </div>
                </div>
                
                <div className="birthday-upcoming">
                  <h3>Sắp tới</h3>
                  <div className="birthday-card">
                    <div className="birthday-avatar">
                      <img src={`https://ui-avatars.com/api/?name=Trần+Thị+C&background=E7A33E&color=fff&size=128`} alt="Trần Thị C" />
                    </div>
                    <div className="birthday-info">
                      <div className="birthday-name">Trần Thị C</div>
                      <div className="birthday-date">Ngày mai</div>
                    </div>
                  </div>
                  
                  <div className="birthday-card">
                    <div className="birthday-avatar">
                      <img src={`https://ui-avatars.com/api/?name=Lê+Văn+D&background=42B72A&color=fff&size=128`} alt="Lê Văn D" />
                    </div>
                    <div className="birthday-info">
                      <div className="birthday-name">Lê Văn D</div>
                      <div className="birthday-date">3 ngày nữa</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Friends; 
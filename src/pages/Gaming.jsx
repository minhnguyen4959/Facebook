import React, { useState } from 'react';
import { Card, Button, Icon, InputGroup, Tabs, Tab } from '@blueprintjs/core';
import './Gaming.css';

const Gaming = () => {
  const [activeTab, setActiveTab] = useState('home');
  
  const games = [
    {
      id: 1,
      title: 'Candy Crush Saga',
      developer: 'King',
      players: '10M+ người chơi',
      image: 'https://placehold.co/600x400/1877F2/FFFFFF/png?text=Candy+Crush',
      logo: `https://ui-avatars.com/api/?name=CC&background=1877F2&color=fff&size=128`
    },
    {
      id: 2,
      title: 'PUBG Mobile',
      developer: 'Tencent Games',
      players: '50M+ người chơi',
      image: 'https://placehold.co/600x400/E7A33E/FFFFFF/png?text=PUBG+Mobile',
      logo: `https://ui-avatars.com/api/?name=PUBG&background=E7A33E&color=fff&size=128`
    },
    {
      id: 3,
      title: 'Minecraft',
      developer: 'Mojang Studios',
      players: '30M+ người chơi',
      image: 'https://placehold.co/600x400/42B72A/FFFFFF/png?text=Minecraft',
      logo: `https://ui-avatars.com/api/?name=MC&background=42B72A&color=fff&size=128`
    },
    {
      id: 4,
      title: 'Among Us',
      developer: 'InnerSloth',
      players: '15M+ người chơi',
      image: 'https://placehold.co/600x400/F5533D/FFFFFF/png?text=Among+Us',
      logo: `https://ui-avatars.com/api/?name=AU&background=F5533D&color=fff&size=128`
    },
    {
      id: 5,
      title: 'Genshin Impact',
      developer: 'miHoYo',
      players: '25M+ người chơi',
      image: 'https://placehold.co/600x400/9360F7/FFFFFF/png?text=Genshin+Impact',
      logo: `https://ui-avatars.com/api/?name=GI&background=9360F7&color=fff&size=128`
    },
    {
      id: 6,
      title: 'Roblox',
      developer: 'Roblox Corporation',
      players: '40M+ người chơi',
      image: 'https://placehold.co/600x400/2ABBA7/FFFFFF/png?text=Roblox',
      logo: `https://ui-avatars.com/api/?name=RX&background=2ABBA7&color=fff&size=128`
    }
  ];
  
  const streams = [
    {
      id: 1,
      title: 'Giải đấu PUBG Mobile Việt Nam',
      streamer: 'PUBG Mobile VN',
      viewers: '25.6K người đang xem',
      game: 'PUBG Mobile',
      thumbnail: 'https://placehold.co/600x400/F7B928/FFFFFF/png?text=PUBG+Tournament',
      avatar: `https://ui-avatars.com/api/?name=PUBG&background=F7B928&color=fff&size=128`
    },
    {
      id: 2,
      title: 'Minecraft Survival - Ngày 100',
      streamer: 'Gamer Việt',
      viewers: '12.3K người đang xem',
      game: 'Minecraft',
      thumbnail: 'https://placehold.co/600x400/F02849/FFFFFF/png?text=Minecraft+Stream',
      avatar: `https://ui-avatars.com/api/?name=GV&background=F02849&color=fff&size=128`
    }
  ];
  
  return (
    <div className="gaming-page">
      <div className="gaming-header">
        <h1>Gaming</h1>
        <InputGroup
          leftIcon="search"
          placeholder="Tìm kiếm game"
          className="gaming-search"
        />
      </div>
      
      <div className="gaming-container">
        <div className="gaming-sidebar">
          <div className="gaming-nav">
            <Button 
              icon="home" 
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
              active={activeTab === 'streams'} 
              onClick={() => setActiveTab('streams')}
            />
            
            <Button 
              icon="cube" 
              text="Tất cả game" 
              fill={true} 
              alignText="left" 
              minimal={true} 
              active={activeTab === 'all'} 
              onClick={() => setActiveTab('all')}
            />
            
            <Button 
              icon="bookmark" 
              text="Game đã lưu" 
              fill={true} 
              alignText="left" 
              minimal={true} 
              active={activeTab === 'saved'} 
              onClick={() => setActiveTab('saved')}
            />
            
            <div className="gaming-nav-divider"></div>
            
            <div className="gaming-nav-header">
              <h3>Game của bạn</h3>
            </div>
            
            {games.slice(0, 3).map(game => (
              <Button 
                key={game.id}
                icon={<img src={game.logo} alt={game.title} className="game-icon" />}
                text={game.title} 
                fill={true} 
                alignText="left" 
                minimal={true} 
              />
            ))}
            
            <Button 
              icon="more" 
              text="Xem tất cả" 
              fill={true} 
              alignText="left" 
              minimal={true} 
            />
          </div>
        </div>
        
        <div className="gaming-content">
          {activeTab === 'home' && (
            <Card className="gaming-section">
              <div className="section-header">
                <h2>Game phổ biến</h2>
              </div>
              
              <div className="games-grid">
                {games.map(game => (
                  <div key={game.id} className="game-card">
                    <div className="game-thumbnail">
                      <img src={game.image} alt={game.title} />
                      <div className="game-play-button">
                        <Icon icon="play" size={24} />
                      </div>
                    </div>
                    <div className="game-info">
                      <div className="game-logo">
                        <img src={game.logo} alt={game.title} />
                      </div>
                      <div className="game-details">
                        <div className="game-title">{game.title}</div>
                        <div className="game-meta">
                          <div className="game-developer">{game.developer}</div>
                          <div className="game-players">{game.players}</div>
                        </div>
                      </div>
                    </div>
                    <div className="game-actions">
                      <Button text="Chơi ngay" intent="primary" fill={true} />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
          
          {activeTab === 'streams' && (
            <Card className="gaming-section">
              <div className="section-header">
                <h2>Đang phát trực tiếp</h2>
              </div>
              
              <div className="streams-grid">
                {[...streams, ...streams].map((stream, index) => (
                  <div key={`${stream.id}-${index}`} className="stream-card">
                    <div className="stream-thumbnail">
                      <img src={stream.thumbnail} alt={stream.title} />
                      <div className="live-badge">TRỰC TIẾP</div>
                      <div className="stream-viewers">{stream.viewers}</div>
                      <div className="stream-play-button">
                        <Icon icon="play" size={24} />
                      </div>
                    </div>
                    <div className="stream-info">
                      <div className="streamer-avatar">
                        <img src={stream.avatar} alt={stream.streamer} />
                      </div>
                      <div className="stream-details">
                        <div className="stream-title">{stream.title}</div>
                        <div className="streamer-name">{stream.streamer}</div>
                        <div className="stream-game">{stream.game}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
          
          {activeTab === 'all' && (
            <Card className="gaming-section">
              <div className="section-header">
                <h2>Tất cả game</h2>
              </div>
              
              <div className="games-grid">
                {[...games, ...games].map((game, index) => (
                  <div key={`${game.id}-${index}`} className="game-card">
                    <div className="game-thumbnail">
                      <img src={game.image} alt={game.title} />
                      <div className="game-play-button">
                        <Icon icon="play" size={24} />
                      </div>
                    </div>
                    <div className="game-info">
                      <div className="game-logo">
                        <img src={game.logo} alt={game.title} />
                      </div>
                      <div className="game-details">
                        <div className="game-title">{game.title}</div>
                        <div className="game-meta">
                          <div className="game-developer">{game.developer}</div>
                          <div className="game-players">{game.players}</div>
                        </div>
                      </div>
                    </div>
                    <div className="game-actions">
                      <Button text="Chơi ngay" intent="primary" fill={true} />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}
          
          {activeTab === 'saved' && (
            <Card className="gaming-section">
              <div className="section-header">
                <h2>Game đã lưu</h2>
              </div>
              
              <div className="games-grid">
                {games.slice(0, 3).map(game => (
                  <div key={game.id} className="game-card">
                    <div className="game-thumbnail">
                      <img src={game.image} alt={game.title} />
                      <div className="game-play-button">
                        <Icon icon="play" size={24} />
                      </div>
                    </div>
                    <div className="game-info">
                      <div className="game-logo">
                        <img src={game.logo} alt={game.title} />
                      </div>
                      <div className="game-details">
                        <div className="game-title">{game.title}</div>
                        <div className="game-meta">
                          <div className="game-developer">{game.developer}</div>
                          <div className="game-players">{game.players}</div>
                        </div>
                      </div>
                    </div>
                    <div className="game-actions">
                      <Button text="Chơi ngay" intent="primary" fill={true} />
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

export default Gaming; 
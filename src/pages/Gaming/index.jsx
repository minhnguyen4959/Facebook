import React from 'react';
import { Button, Icon } from '@blueprintjs/core';
import './Gaming.css';

const Gaming = () => {
  const games = [
    {
      id: 1,
      title: 'Adventure Quest',
      category: 'Adventure',
      players: '25M+',
      image: '#4267B2'
    },
    {
      id: 2,
      title: 'Space Explorers',
      category: 'Sci-Fi',
      players: '12M+',
      image: '#FF5E3A'
    },
    {
      id: 3,
      title: 'Puzzle Master',
      category: 'Puzzle',
      players: '30M+',
      image: '#FFD700'
    },
    {
      id: 4,
      title: 'Racing Champions',
      category: 'Racing',
      players: '18M+',
      image: '#8A2BE2'
    },
    {
      id: 5,
      title: 'Fantasy Kingdom',
      category: 'RPG',
      players: '22M+',
      image: '#32CD32'
    },
    {
      id: 6,
      title: 'Strategy Wars',
      category: 'Strategy',
      players: '15M+',
      image: '#20B2AA'
    }
  ];
  
  const categories = [
    'All Games', 'Action', 'Adventure', 'Arcade', 'Puzzle', 'Racing', 'RPG', 'Strategy'
  ];
  
  return (
    <div className="gaming-page">
      <div className="gaming-header">
        <h1>Gaming</h1>
        <div className="gaming-actions">
          <Button icon="search" minimal title="Search Games" />
          <Button icon="play" intent="primary" text="Play Now" />
        </div>
      </div>
      
      <div className="gaming-categories">
        {categories.map((category, index) => (
          <Button 
            key={index} 
            className={`category-btn ${index === 0 ? 'active' : ''}`}
            text={category}
            minimal={index !== 0}
          />
        ))}
      </div>
      
      <div className="featured-game">
        <div className="featured-game-banner" style={{ backgroundColor: '#1877F2' }}>
          <div className="featured-game-content">
            <div className="featured-badge">Featured</div>
            <h2>World of Adventure</h2>
            <p>Embark on an epic journey through magical realms</p>
            <Button intent="primary" icon="play" text="Play Now" />
          </div>
        </div>
      </div>
      
      <div className="section-header">
        <h2>Popular Games</h2>
        <Button text="See All" minimal />
      </div>
      
      <div className="games-grid">
        {games.map(game => (
          <div key={game.id} className="game-card">
            <div className="game-image" style={{ backgroundColor: game.image }}></div>
            <div className="game-info">
              <h3 className="game-title">{game.title}</h3>
              <div className="game-meta">
                <span className="game-category">{game.category}</span>
                <span className="game-players">
                  <Icon icon="people" size={12} />
                  {game.players}
                </span>
              </div>
              <Button icon="play" fill className="play-btn" text="Play" />
            </div>
          </div>
        ))}
      </div>
      
      <div className="gaming-friends">
        <div className="section-header">
          <h2>Friends Playing</h2>
          <Button text="See All" minimal />
        </div>
        <div className="gaming-friends-empty">
          <Icon icon="people" size={48} />
          <p>None of your friends are playing games right now.</p>
          <Button text="Find Friends to Play With" />
        </div>
      </div>
    </div>
  );
};

export default Gaming; 
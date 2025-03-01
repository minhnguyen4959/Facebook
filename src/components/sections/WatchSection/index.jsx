import React from 'react';
import { Card, Elevation, Button, Icon } from '@blueprintjs/core';
import './WatchSection.css';

const WatchSection = () => {
  return (
    <div className="watch-content">
      <div className="main-header">
        <h1>Watch</h1>
        <div className="watch-filters">
          <Button icon="video" text="Live" minimal />
          <Button icon="film" text="Shows" minimal />
          <Button icon="saved" text="Saved" minimal />
        </div>
      </div>

      <div className="video-section">
        <div className="section-header">
          <h3>Recommended Videos</h3>
          <span className="see-all">See All</span>
        </div>

        <div className="video-grid">
          <Card elevation={Elevation.TWO} className="video-item">
            <div className="video-thumbnail">
              <div className="media-block" style={{ backgroundColor: '#4682B4' }}></div>
              <div className="video-duration">12:34</div>
            </div>
            <div className="video-info">
              <div className="video-header">
                <div className="avatar" style={{ backgroundColor: '#FF4500' }}></div>
                <span className="video-title">SpaceX Launch Highlights</span>
                <Icon icon="more" />
              </div>
              <div className="video-details">
                <span className="channel-name">SpaceX Official</span>
                <div className="video-stats">
                  <span>10K views</span>
                  <span>•</span>
                  <span>2 days ago</span>
                </div>
              </div>
            </div>
          </Card>

          <Card elevation={Elevation.TWO} className="video-item">
            <div className="video-thumbnail">
              <div className="media-block" style={{ backgroundColor: '#FF6347' }}></div>
              <div className="video-duration">8:45</div>
            </div>
            <div className="video-info">
              <div className="video-header">
                <div className="avatar" style={{ backgroundColor: '#32CD32' }}></div>
                <span className="video-title">AI Tools Tutorial</span>
                <Icon icon="more" />
              </div>
              <div className="video-details">
                <span className="channel-name">Tech Tutorials</span>
                <div className="video-stats">
                  <span>8K views</span>
                  <span>•</span>
                  <span>1 day ago</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="video-section">
        <div className="section-header">
          <h3>Live Now</h3>
          <span className="see-all">See All</span>
        </div>
        
        <Card elevation={Elevation.TWO} className="video-item live">
          <div className="video-thumbnail">
            <div className="media-block" style={{ backgroundColor: '#8A2BE2' }}></div>
            <div className="live-badge">LIVE</div>
            <div className="viewer-count">1.2K watching</div>
          </div>
          <div className="video-info">
            <div className="video-header">
              <div className="avatar" style={{ backgroundColor: '#FFD700' }}></div>
              <span className="video-title">Tech Conference 2024</span>
              <Icon icon="more" />
            </div>
            <div className="video-details">
              <span className="channel-name">Tech Events Live</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default WatchSection; 
import React, { useState } from 'react';
import { Button, Icon, Card, Menu, MenuItem, Popover, Position } from '@blueprintjs/core';
import Story from '../Story';
import Composer from '../Composer';
import './Feed.css';

const Feed = ({ currentUser }) => {
  const [feedPosts, setFeedPosts] = useState([
    {
      id: 1,
      user: {
        name: 'Nguyễn Văn B',
        avatar: `https://ui-avatars.com/api/?name=Nguyễn+Văn+B&background=4267B2&color=fff&size=128`
      },
      content: 'Hôm nay tôi vừa học xong khóa React cơ bản. Rất hữu ích!',
      image: 'https://placehold.co/600x400/1877F2/FFFFFF/png?text=React+Tutorial',
      time: '2 giờ trước',
      likes: 24,
      comments: [],
      shares: 2
    },
    {
      id: 2,
      user: {
        name: 'Trần Thị C',
        avatar: `https://ui-avatars.com/api/?name=Trần+Thị+C&background=E7A33E&color=fff&size=128`
      },
      content: 'Chuyến du lịch Đà Nẵng tuần qua thật tuyệt vời!',
      image: 'https://placehold.co/600x400/E7A33E/FFFFFF/png?text=Da+Nang+Trip',
      time: '1 ngày trước',
      likes: 56,
      comments: [],
      shares: 3
    },
    {
      id: 3,
      user: {
        name: 'Lê Văn D',
        avatar: `https://ui-avatars.com/api/?name=Lê+Văn+D&background=42B72A&color=fff&size=128`
      },
      content: 'Chia sẻ công thức nấu ăn mới: Gà rang muối. Ai muốn xin công thức comment nhé!',
      image: null,
      time: '3 giờ trước',
      likes: 18,
      comments: [],
      shares: 1
    }
  ]);

  const handleLike = (postId) => {
    setFeedPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleComment = (postId, comment) => {
    setFeedPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
      )
    );
  };

  const handleShare = (postId) => {
    setFeedPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === postId ? { ...post, shares: post.shares + 1 } : post
      )
    );
  };

  return (
    <div className="feed">
      <div className="timeline">
        {feedPosts.map(post => (
          <Card key={post.id} className="post-card">
            <div className="post-header">
              <div className="post-user">
                <div className="post-avatar">
                  <img src={post.user.avatar} alt={post.user.name} />
                </div>
                <div className="post-user-info">
                  <div className="post-username">{post.user.name}</div>
                  <div className="post-time">{post.time}</div>
                </div>
              </div>
              <Popover
                content={
                  <Menu>
                    <MenuItem icon="bookmark" text="Lưu bài viết" />
                    <MenuItem icon="notifications" text="Bật thông báo" />
                    <MenuItem icon="eye-off" text="Ẩn bài viết" />
                    <MenuItem icon="flag" text="Báo cáo bài viết" />
                  </Menu>
                }
                position={Position.BOTTOM_LEFT}
              >
                <Button icon="more" minimal={true} className="post-more-btn" />
              </Popover>
            </div>
            
            <div className="post-content">
              <p>{post.content}</p>
              {post.image && (
                <div className="post-image">
                  <img src={post.image} alt="Post" />
                </div>
              )}
            </div>
            
            <div className="post-stats">
              <div className="post-likes">
                <Icon icon="thumbs-up" size={12} color="#1877F2" />
                <span>{post.likes}</span>
              </div>
              <div className="post-comments-shares">
                <span>{post.comments.length} bình luận</span>
                <span>{post.shares} chia sẻ</span>
              </div>
            </div>
            
            <div className="post-actions">
              <Button icon="thumbs-up" text="Thích" minimal={true} onClick={() => handleLike(post.id)} />
              <Button icon="comment" text="Bình luận" minimal={true} onClick={() => handleComment(post.id, '')} />
              <Button icon="share" text="Chia sẻ" minimal={true} onClick={() => handleShare(post.id)} />
            </div>
            
            <div className="post-comment-input">
              <div className="comment-avatar">
                <img src={currentUser.avatar} alt={currentUser.name} />
              </div>
              <div className="comment-input-wrapper">
                <input 
                  type="text" 
                  placeholder="Viết bình luận..." 
                  className="comment-input"
                  onChange={(e) => handleComment(post.id, e.target.value)}
                />
                <div className="comment-input-actions">
                  <Button icon="emoji" minimal={true} small={true} />
                  <Button icon="media" minimal={true} small={true} />
                  <Button icon="gif" minimal={true} small={true} />
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Feed; 
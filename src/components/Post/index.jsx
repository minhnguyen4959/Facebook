import React, { useState, useRef, useEffect } from 'react';
import { Button, Icon, Popover, Menu, MenuItem } from '@blueprintjs/core';
import './Post.css';

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [reaction, setReaction] = useState(null);
  const [showAllComments, setShowAllComments] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [showReactions, setShowReactions] = useState(false);
  const reactionTimeoutRef = useRef(null);
  const reactionsRef = useRef(null);
  
  const reactions = [
    { name: 'like', icon: '👍', color: '#1877F2', label: 'Thích' },
    { name: 'love', icon: '❤️', color: '#F33E58', label: 'Yêu thích' },
    { name: 'haha', icon: '😂', color: '#F7B125', label: 'Haha' },
    { name: 'wow', icon: '😮', color: '#F7B125', label: 'Wow' },
    { name: 'sad', icon: '😢', color: '#F7B125', label: 'Buồn' },
    { name: 'angry', icon: '😡', color: '#E78C2C', label: 'Phẫn nộ' }
  ];
  
  useEffect(() => {
    // Xử lý click bên ngoài để đóng popup reactions
    const handleClickOutside = (event) => {
      if (reactionsRef.current && !reactionsRef.current.contains(event.target)) {
        setShowReactions(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const toggleLike = () => {
    if (!reaction) {
      setReaction('like');
    } else {
      setReaction(null);
    }
  };
  
  const handleReaction = (reactionName) => {
    setReaction(reactionName);
    setShowReactions(false);
  };
  
  const handleComment = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      console.log('New comment:', commentText);
      // Thêm comment mới vào danh sách
      const newComment = {
        user: post.currentUser,
        text: commentText,
        time: 'Just now'
      };
      
      // Trong thực tế, bạn sẽ cập nhật state của component cha
      // Ở đây chỉ là mô phỏng
      console.log('Added new comment:', newComment);
      
      setCommentText('');
    }
  };
  
  const handleMouseEnter = () => {
    clearTimeout(reactionTimeoutRef.current);
    reactionTimeoutRef.current = setTimeout(() => {
      setShowReactions(true);
    }, 500);
  };
  
  const handleMouseLeave = () => {
    clearTimeout(reactionTimeoutRef.current);
    reactionTimeoutRef.current = setTimeout(() => {
      if (reactionsRef.current && !reactionsRef.current.matches(':hover')) {
        setShowReactions(false);
      }
    }, 500);
  };
  
  const getReactionIcon = () => {
    if (!reaction) return 'thumbs-up';
    
    const selectedReaction = reactions.find(r => r.name === reaction);
    return selectedReaction ? selectedReaction.icon : 'thumbs-up';
  };
  
  const getReactionColor = () => {
    if (!reaction) return 'inherit';
    
    const selectedReaction = reactions.find(r => r.name === reaction);
    return selectedReaction ? selectedReaction.color : '#1877F2';
  };
  
  const getReactionLabel = () => {
    if (!reaction) return 'Thích';
    
    const selectedReaction = reactions.find(r => r.name === reaction);
    return selectedReaction ? selectedReaction.label : 'Thích';
  };
  
  const commentsToShow = showAllComments ? post.comments : post.comments.slice(0, 2);
  
  return (
    <div className="post">
      <div className="post-header">
        <div className="post-user">
          <div 
            className="post-avatar" 
            style={{ backgroundColor: post.user.avatarColor }}
          >
            {post.user.avatar && (
              <img src={post.user.avatar} alt={post.user.name} />
            )}
          </div>
          <div className="post-user-info">
            <h4 className="post-username">{post.user.name}</h4>
            <p className="post-time">{post.time} · {post.privacy}</p>
          </div>
        </div>
        <Button icon="more" variant="minimal" className="post-more-btn" />
      </div>
      
      <div className="post-content">
        <p>{post.text}</p>
      </div>
      
      {post.image && (
        <div className="post-image">
          <img src={post.image} alt="Post" />
        </div>
      )}
      
      <div className="post-stats">
        <div className="post-likes">
          {reaction && (
            <span className="reaction-icon" style={{ color: getReactionColor() }}>
              {getReactionIcon()}
            </span>
          )}
          <span>{post.likes + (reaction ? 1 : 0)}</span>
        </div>
        <div className="post-comments-shares">
          <span>{post.comments.length} bình luận</span>
          <span>{post.shares} chia sẻ</span>
        </div>
      </div>
      
      <div className="post-actions">
        <div className="reaction-button-container">
          <Button 
            className={`post-action-btn ${reaction ? 'reacted' : ''}`} 
            style={{ color: getReactionColor() }}
            icon={reaction ? getReactionIcon() : 'thumbs-up'} 
            text={getReactionLabel()}
            variant="minimal"
            onClick={toggleLike}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          
          {showReactions && (
            <div className="reactions-popup" ref={reactionsRef} onMouseLeave={() => setShowReactions(false)}>
              {reactions.map((r) => (
                <div 
                  key={r.name} 
                  className="reaction-item" 
                  onClick={() => handleReaction(r.name)}
                  title={r.label}
                >
                  <span className="reaction-emoji">{r.icon}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <Button 
          className="post-action-btn" 
          icon="comment" 
          text="Bình luận" 
          variant="minimal"
        />
        <Button 
          className="post-action-btn" 
          icon="share" 
          text="Chia sẻ" 
          variant="minimal"
        />
      </div>
      
      {post.comments.length > 0 && (
        <div className="post-comments">
          {commentsToShow.map((comment, index) => (
            <div key={index} className="post-comment">
              <div 
                className="comment-avatar" 
                style={{ backgroundColor: comment.user.avatarColor }}
              >
                {comment.user.avatar && (
                  <img src={comment.user.avatar} alt={comment.user.name} />
                )}
              </div>
              <div className="comment-content">
                <div className="comment-bubble">
                  <h5 className="comment-username">{comment.user.name}</h5>
                  <p className="comment-text">{comment.text}</p>
                </div>
                <div className="comment-actions">
                  <Button text="Thích" variant="minimal" className="comment-action-btn" />
                  <Button text="Phản hồi" variant="minimal" className="comment-action-btn" />
                  <span className="comment-time">{comment.time}</span>
                </div>
              </div>
            </div>
          ))}
          
          {post.comments.length > 2 && (
            <Button 
              text={showAllComments ? "Ẩn bình luận" : `Xem tất cả ${post.comments.length} bình luận`} 
              variant="minimal" 
              className="view-comments-btn"
              onClick={() => setShowAllComments(!showAllComments)}
            />
          )}
          
          <form className="add-comment" onSubmit={handleComment}>
            <div className="comment-avatar" style={{ backgroundColor: post.currentUser?.avatarColor || '#1877F2' }}>
              {post.currentUser && post.currentUser.avatar && (
                <img src={post.currentUser.avatar} alt="Your avatar" />
              )}
            </div>
            <div className="comment-input-container">
              <input 
                type="text" 
                placeholder="Viết bình luận..." 
                className="comment-input"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
              />
              <div className="comment-input-actions">
                <Button icon="emoji" variant="minimal" className="comment-input-btn" />
                <Button icon="media" variant="minimal" className="comment-input-btn" />
                <Button 
                  icon="send-message" 
                  variant="minimal" 
                  className="comment-input-btn" 
                  type="submit" 
                  disabled={!commentText.trim()} 
                />
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Post; 
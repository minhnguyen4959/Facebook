import React, { useState } from 'react';
import { Button, Icon, Menu, MenuItem, Popover, Position } from '@blueprintjs/core';
import { useTheme } from '../hooks/useTheme.jsx';
import './Post.css';

const Post = ({ post, currentUser }) => {
  const { darkMode } = useTheme();
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      user: {
        name: 'Nguyễn Văn B',
        avatar: 'https://i.pravatar.cc/150?img=11'
      },
      text: 'Tuyệt vời quá!',
      time: '30 phút trước',
      likes: 3
    },
    {
      id: 2,
      user: {
        name: 'Trần Thị C',
        avatar: 'https://i.pravatar.cc/150?img=5'
      },
      text: 'Cảm ơn bạn đã chia sẻ.',
      time: '1 giờ trước',
      likes: 1
    }
  ]);
  
  const handleLikeToggle = () => {
    if (liked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setLiked(!liked);
  };
  
  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };
  
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      const newComment = {
        id: Date.now(),
        user: {
          name: currentUser.name,
          avatar: currentUser.avatar
        },
        text: commentText,
        time: 'Vừa xong',
        likes: 0
      };
      setComments([...comments, newComment]);
      setCommentText('');
    }
  };
  
  return (
    <div className={`post ${darkMode ? 'dark-mode' : ''}`}>
      <div className="post-header">
        <div className="post-user">
          <div className="post-avatar">
            <img src={post.user.avatar} alt={post.user.name} />
          </div>
          <div className="post-user-info">
            <div className="post-user-name">{post.user.name}</div>
            <div className="post-time">{post.time}</div>
          </div>
        </div>
        
        <Popover
          content={
            <Menu>
              <MenuItem icon="bookmark" text="Lưu bài viết" />
              <MenuItem icon="notifications" text="Bật thông báo" />
              <MenuItem icon="eye-off" text="Ẩn bài viết" />
              <MenuItem icon="flag" text="Báo cáo" />
            </Menu>
          }
          position={Position.BOTTOM_RIGHT}
        >
          <Button icon="more" minimal={true} />
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
          <Icon icon="thumbs-up" color="#1877F2" />
          <span>{likesCount}</span>
        </div>
        
        <div className="post-comments-shares">
          <span>{post.comments} bình luận</span>
          <span>{post.shares} chia sẻ</span>
        </div>
      </div>
      
      <div className="post-actions">
        <Button 
          className={`post-action ${liked ? 'liked' : ''}`}
          icon="thumbs-up" 
          text="Thích" 
          minimal={true}
          onClick={handleLikeToggle}
        />
        <Button 
          className="post-action"
          icon="comment" 
          text="Bình luận" 
          minimal={true}
          onClick={() => setShowComments(!showComments)}
        />
        <Button 
          className="post-action"
          icon="share" 
          text="Chia sẻ" 
          minimal={true}
        />
      </div>
      
      {showComments && (
        <div className="post-comments">
          {comments.map(comment => (
            <div key={comment.id} className="comment">
              <div className="comment-avatar">
                <img src={comment.user.avatar} alt={comment.user.name} />
              </div>
              <div className="comment-content">
                <div className="comment-bubble">
                  <div className="comment-user">{comment.user.name}</div>
                  <div className="comment-text">{comment.text}</div>
                </div>
                <div className="comment-actions">
                  <button className="comment-action">Thích</button>
                  <button className="comment-action">Phản hồi</button>
                  <span className="comment-time">{comment.time}</span>
                </div>
              </div>
            </div>
          ))}
          
          <form className="comment-form" onSubmit={handleCommentSubmit}>
            <div className="comment-avatar">
              <img src={currentUser.avatar} alt={currentUser.name} />
            </div>
            <div className="comment-input-wrapper">
              <input 
                type="text" 
                className="comment-input"
                placeholder="Viết bình luận..." 
                value={commentText}
                onChange={handleCommentChange}
              />
              <div className="comment-input-actions">
                <Button icon="emoji" minimal={true} small={true} />
                <Button icon="media" minimal={true} small={true} />
                <Button icon="gif" minimal={true} small={true} />
                <Button icon="tag" minimal={true} small={true} />
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Post; 
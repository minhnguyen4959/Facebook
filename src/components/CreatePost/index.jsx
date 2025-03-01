import React, { useState } from 'react';
import { Button, Icon, Tooltip } from '@blueprintjs/core';
import './CreatePost.css';

const CreatePost = ({ currentUser }) => {
  const [postText, setPostText] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (postText.trim() || selectedImage) {
      // Handle post creation
      console.log('Creating post:', { text: postText, image: selectedImage });
      setPostText('');
      setSelectedImage(null);
      setIsExpanded(false);
    }
  };
  
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsUploading(true);
      
      // Simulate upload delay
      setTimeout(() => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImage(reader.result);
          setIsUploading(false);
          setIsExpanded(true);
        };
        reader.readAsDataURL(file);
      }, 1000);
    }
  };
  
  const removeImage = () => {
    setSelectedImage(null);
  };
  
  return (
    <div className="create-post">
      <div className="create-post-header">
        <div className="user-avatar" style={{ backgroundColor: currentUser?.avatarColor || '#1877F2' }}>
          {currentUser?.avatar && (
            <img src={currentUser.avatar} alt={currentUser.name} />
          )}
        </div>
        <div className="post-input-wrapper">
          <input
            type="text"
            placeholder="Bạn đang nghĩ gì?"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
            onClick={() => setIsExpanded(true)}
            className="post-input"
          />
        </div>
      </div>
      
      {isExpanded && selectedImage && (
        <div className="create-post-image-preview">
          <img src={selectedImage} alt="Upload preview" />
          <Button 
            icon="cross" 
            className="remove-image-btn" 
            minimal={true} 
            onClick={removeImage}
          />
        </div>
      )}
      
      <div className="create-post-actions">
        <Tooltip content="Thêm ảnh/video">
          <label className="create-post-btn-label">
            <Button 
              icon="media" 
              text="Ảnh/Video" 
              variant="minimal" 
              className="create-post-btn"
              disabled={isUploading}
            />
            <input 
              type="file" 
              accept="image/*,video/*" 
              onChange={handleImageUpload} 
              style={{ display: 'none' }}
            />
          </label>
        </Tooltip>
        
        <Tooltip content="Gắn thẻ bạn bè">
          <Button 
            icon="tag" 
            text="Gắn thẻ" 
            variant="minimal" 
            className="create-post-btn"
          />
        </Tooltip>
        
        <Tooltip content="Thêm cảm xúc/hoạt động">
          <Button 
            icon="emoji" 
            text="Cảm xúc" 
            variant="minimal" 
            className="create-post-btn"
          />
        </Tooltip>
      </div>
      
      <div className="create-post-submit">
        <Button 
          text="Đăng" 
          intent="primary" 
          fill 
          disabled={!postText.trim() && !selectedImage} 
          onClick={handleSubmit}
          loading={isUploading}
        />
      </div>
    </div>
  );
};

export default CreatePost; 
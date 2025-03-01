import React, { useState, useRef } from 'react';
import { Button, Icon } from '@blueprintjs/core';
import { useTheme } from '../hooks/useTheme.jsx';
import './Composer.css';

const Composer = ({ currentUser, onPost }) => {
  const { darkMode } = useTheme();
  const [expanded, setExpanded] = useState(false);
  const [postText, setPostText] = useState('');
  const [postImage, setPostImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const fileInputRef = useRef(null);
  
  const handleInputClick = () => {
    setExpanded(true);
  };
  
  const handleTextChange = (e) => {
    setPostText(e.target.value);
  };
  
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPostImage(file);
      
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleRemoveImage = () => {
    setPostImage(null);
    setImagePreview('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  const handleSubmit = () => {
    if (postText.trim() || postImage) {
      const newPost = {
        id: Date.now(),
        user: {
          id: currentUser.id,
          name: currentUser.name,
          avatar: currentUser.avatar
        },
        content: postText,
        image: imagePreview || null,
        time: 'Vừa xong',
        likes: 0,
        comments: 0,
        shares: 0
      };
      
      onPost(newPost);
      
      // Reset form
      setPostText('');
      setPostImage(null);
      setImagePreview('');
      setExpanded(false);
      
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };
  
  const handleCancel = () => {
    setPostText('');
    setPostImage(null);
    setImagePreview('');
    setExpanded(false);
    
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  return (
    <div className={`composer ${darkMode ? 'dark-mode' : ''}`}>
      <div className="composer-header">
        <div className="composer-avatar">
          <img src={currentUser.avatar} alt={currentUser.name} />
        </div>
        
        {!expanded ? (
          <div className="composer-input-wrapper">
            <input 
              type="text" 
              className="composer-input"
              placeholder={`${currentUser.name} ơi, bạn đang nghĩ gì thế?`}
              onClick={handleInputClick}
              readOnly
            />
          </div>
        ) : (
          <div className="composer-expanded">
            <textarea 
              className="composer-textarea"
              placeholder={`${currentUser.name} ơi, bạn đang nghĩ gì thế?`}
              value={postText}
              onChange={handleTextChange}
              autoFocus
            />
            
            {imagePreview && (
              <div className="composer-image-preview">
                <img src={imagePreview} alt="Preview" />
                <Button 
                  icon="cross" 
                  className="remove-image-btn" 
                  onClick={handleRemoveImage}
                  minimal={true}
                />
              </div>
            )}
          </div>
        )}
      </div>
      
      {expanded && (
        <div className="composer-footer">
          <div className="composer-actions">
            <label className="composer-action">
              <input 
                type="file" 
                accept="image/*" 
                style={{ display: 'none' }} 
                onChange={handleImageChange}
                ref={fileInputRef}
              />
              <Icon icon="media" size={16} />
              <span>Ảnh/Video</span>
            </label>
            
            <div className="composer-action">
              <Icon icon="tag" size={16} />
              <span>Gắn thẻ</span>
            </div>
            
            <div className="composer-action">
              <Icon icon="emoji" size={16} />
              <span>Cảm xúc</span>
            </div>
            
            <div className="composer-action">
              <Icon icon="map-marker" size={16} />
              <span>Check in</span>
            </div>
          </div>
          
          <div className="composer-buttons">
            <Button 
              text="Hủy" 
              minimal={true} 
              onClick={handleCancel}
            />
            <Button 
              text="Đăng" 
              intent="primary" 
              disabled={!postText.trim() && !postImage}
              onClick={handleSubmit}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Composer; 
import React, { useState } from 'react';
import { Button, TextArea, Icon } from '@blueprintjs/core';
import './Composer.css';

const Composer = ({ onPostSubmit }) => {
  const [content, setContent] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [attachments, setAttachments] = useState([]);

  const handleSubmit = () => {
    if (content.trim() || attachments.length > 0) {
      onPostSubmit({
        content,
        media: attachments.length > 0
      });
      setContent('');
      setAttachments([]);
      setIsExpanded(false);
    }
  };

  const handleFocus = () => {
    setIsExpanded(true);
  };

  const handleAddAttachment = (type) => {
    // Simulate adding an attachment
    setAttachments([...attachments, { type, id: Date.now() }]);
    setIsExpanded(true);
  };

  return (
    <div className="composer">
      <div className="composer__header">
        <div className="avatar" style={{ backgroundColor: '#FFD700' }}></div>
        <TextArea
          className="composer__input"
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onFocus={handleFocus}
          growVertically={true}
          large={true}
        />
      </div>

      {attachments.length > 0 && (
        <div className="composer__attachments">
          {attachments.map(attachment => (
            <div key={attachment.id} className="composer__attachment">
              <div 
                className="composer__attachment-preview" 
                style={{ backgroundColor: attachment.type === 'photo' ? '#4267B2' : '#FF5E3A' }}
              >
                <Icon icon={attachment.type === 'photo' ? 'media' : 'video'} size={24} color="white" />
              </div>
              <Button 
                icon="cross" 
                minimal 
                small 
                className="composer__remove-btn"
                onClick={() => setAttachments(attachments.filter(a => a.id !== attachment.id))}
              />
            </div>
          ))}
        </div>
      )}

      {isExpanded && (
        <div className="composer__footer">
          <div className="composer__actions">
            <Button 
              className="composer__action-btn" 
              icon="media" 
              text="Photo/Video" 
              minimal 
              onClick={() => handleAddAttachment('photo')}
            />
            <Button 
              className="composer__action-btn" 
              icon="user" 
              text="Tag People" 
              minimal 
            />
            <Button 
              className="composer__action-btn" 
              icon="emoji" 
              text="Feeling/Activity" 
              minimal 
            />
            <Button 
              className="composer__action-btn" 
              icon="map-marker" 
              text="Check in" 
              minimal 
            />
          </div>
          <Button 
            className="composer__post-btn" 
            intent="primary" 
            text="Post" 
            disabled={!content.trim() && attachments.length === 0}
            onClick={handleSubmit}
          />
        </div>
      )}
    </div>
  );
};

export default Composer; 
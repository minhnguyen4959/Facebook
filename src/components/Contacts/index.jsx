import React from 'react';
import { Button } from '@blueprintjs/core';
import './Contacts.css';

const Contacts = () => {
  const contacts = [
    { id: 1, name: 'John Doe', status: 'online', color: '#4267B2' },
    { id: 2, name: 'Jane Smith', status: 'online', color: '#FF5E3A' },
    { id: 3, name: 'Mike Johnson', status: 'offline', color: '#FFD700' }
  ];

  return (
    <div className="contacts-section">
      <div className="section-header">
        <h3>Contacts</h3>
        <div className="contact-actions">
          <Button icon="video" variant="minimal" size="small" />
          <Button icon="search" variant="minimal" size="small" />
          <Button icon="more" variant="minimal" size="small" />
        </div>
      </div>
      {contacts.map(contact => (
        <div key={contact.id} className="contact-item">
          <div className="avatar" style={{ backgroundColor: contact.color }}>
            <div className={`status-indicator ${contact.status}`}></div>
          </div>
          <span>{contact.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Contacts; 
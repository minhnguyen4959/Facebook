import React from 'react';
import { Button, Icon } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <Icon icon="error" size={64} className="not-found__icon" />
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for doesn't exist or has been moved.</p>
        <div className="not-found__actions">
          <Link to="/">
            <Button icon="home" intent="primary" text="Go to Home" />
          </Link>
          <Button 
            icon="arrow-left" 
            text="Go Back" 
            onClick={() => window.history.back()}
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound; 
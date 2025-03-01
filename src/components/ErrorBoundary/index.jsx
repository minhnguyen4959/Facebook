import React, { Component } from 'react';
import { Button, Icon } from '@blueprintjs/core';
import './ErrorBoundary.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // You can log the error to an error reporting service here
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-content">
            <Icon icon="error" size={48} intent="danger" />
            <h2>Something went wrong</h2>
            <p>We're sorry, but there was an error loading this page.</p>
            
            <div className="error-actions">
              <Button 
                icon="refresh" 
                intent="primary" 
                text="Try Again" 
                onClick={this.handleReset} 
              />
              <Button 
                icon="home" 
                text="Go to Home" 
                onClick={() => window.location.href = '/'} 
              />
            </div>
            
            {process.env.NODE_ENV === 'development' && (
              <div className="error-details">
                <h3>Error Details:</h3>
                <p>{this.state.error && this.state.error.toString()}</p>
                <div>
                  <pre>{this.state.errorInfo && this.state.errorInfo.componentStack}</pre>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 
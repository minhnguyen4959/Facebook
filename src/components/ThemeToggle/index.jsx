import React from 'react';
import { Button, Icon } from '@blueprintjs/core';
import { useTheme } from '../../hooks/useTheme';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();
  
  return (
    <Button
      icon={darkMode ? "flash" : "moon"}
      minimal={true}
      className="theme-toggle-btn"
      onClick={toggleTheme}
      title={darkMode ? "Chuyển sang chế độ sáng" : "Chuyển sang chế độ tối"}
    />
  );
};

export default ThemeToggle; 
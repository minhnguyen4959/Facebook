import React, { createContext, useState, useContext, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

// Định nghĩa theme cho light mode
const lightTheme = {
  name: 'light',
  colors: {
    primary: '#1877f2',
    secondary: '#42b72a',
    background: '#f0f2f5',
    surface: '#ffffff',
    text: {
      primary: '#050505',
      secondary: '#65676b',
      disabled: '#86888c',
      inverse: '#ffffff',
    },
    border: '#dddfe2',
    divider: '#e4e6eb',
    icon: '#65676b',
    error: '#fa383e',
    success: '#42b72a',
    warning: '#f7b928',
    hover: {
      background: '#e4e6eb',
      primaryButton: '#166fe5',
      secondaryButton: '#36a420',
    },
    card: {
      background: '#ffffff',
      shadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
    },
    input: {
      background: '#f0f2f5',
      border: '#dddfe2',
      focusBorder: '#1877f2',
      focusShadow: '#e7f3ff',
    },
    navbar: {
      background: '#ffffff',
      shadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      activeTab: '#1877f2',
      inactiveTab: '#65676b',
    },
    modal: {
      overlay: 'rgba(255, 255, 255, 0.8)',
      background: '#ffffff',
      shadow: '0 12px 28px 0 rgba(0, 0, 0, 0.2)',
    },
  },
  fonts: {
    family: "'Segoe UI', Helvetica, Arial, sans-serif",
    size: {
      xs: '12px',
      sm: '13px',
      md: '15px',
      lg: '17px',
      xl: '20px',
      xxl: '24px',
      xxxl: '32px',
    },
    weight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    xxl: '24px',
    xxxl: '32px',
  },
  borderRadius: {
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    circle: '50%',
    pill: '20px',
  },
  transitions: {
    fast: '0.1s',
    normal: '0.2s',
    slow: '0.3s',
  },
};

// Định nghĩa theme cho dark mode
const darkTheme = {
  name: 'dark',
  colors: {
    primary: '#1877f2',
    secondary: '#42b72a',
    background: '#18191a',
    surface: '#242526',
    text: {
      primary: '#e4e6eb',
      secondary: '#b0b3b8',
      disabled: '#777a7d',
      inverse: '#050505',
    },
    border: '#3e4042',
    divider: '#3e4042',
    icon: '#b0b3b8',
    error: '#fa383e',
    success: '#42b72a',
    warning: '#f7b928',
    hover: {
      background: '#3a3b3c',
      primaryButton: '#166fe5',
      secondaryButton: '#36a420',
    },
    card: {
      background: '#242526',
      shadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
    },
    input: {
      background: '#3a3b3c',
      border: '#3e4042',
      focusBorder: '#1877f2',
      focusShadow: 'rgba(24, 119, 242, 0.2)',
    },
    navbar: {
      background: '#242526',
      shadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      activeTab: '#1877f2',
      inactiveTab: '#b0b3b8',
    },
    modal: {
      overlay: 'rgba(0, 0, 0, 0.8)',
      background: '#242526',
      shadow: '0 12px 28px 0 rgba(0, 0, 0, 0.3)',
    },
  },
  fonts: {
    family: "'Segoe UI', Helvetica, Arial, sans-serif",
    size: {
      xs: '12px',
      sm: '13px',
      md: '15px',
      lg: '17px',
      xl: '20px',
      xxl: '24px',
      xxxl: '32px',
    },
    weight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '20px',
    xxl: '24px',
    xxxl: '32px',
  },
  borderRadius: {
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    circle: '50%',
    pill: '20px',
  },
  transitions: {
    fast: '0.1s',
    normal: '0.2s',
    slow: '0.3s',
  },
};

// Tạo context
const ThemeContext = createContext();

// Custom hook để sử dụng theme
export const useTheme = () => useContext(ThemeContext);

// Theme Provider component
export const ThemeProvider = ({ children }) => {
  // Kiểm tra theme đã lưu trong localStorage
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark' ? darkTheme : lightTheme;
    }
    
    // Kiểm tra theme hệ thống
    const prefersDark = window.matchMedia && 
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? darkTheme : lightTheme;
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Lưu theme vào localStorage khi thay đổi
  useEffect(() => {
    localStorage.setItem('theme', theme.name);
  }, [theme]);

  // Hàm chuyển đổi theme
  const toggleTheme = () => {
    setTheme(theme.name === 'light' ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}; 
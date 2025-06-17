import React, { createContext, useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { useAppSettings } from '../hooks/useAppSettings';

// First, declare the theme interfaces and constants
export const lightTheme = {
  dark: false,
  colors: {
    primary: '#3498db',
    secondary: '#2ecc71',
    background: '#ffffff',
    cardBackground: '#f8f9fa',
    text: '#333333',
    textSecondary: '#777777',
    border: '#e0e0e0',
    error: '#e74c3c',
    inputBackground: '#ffffff',
  },
};

export const darkTheme = {
  dark: true,
  colors: {
    primary: '#3498db',
    secondary: '#2ecc71',
    background: '#121212',
    cardBackground: '#1e1e1e',
    text: '#ffffff',
    textSecondary: '#aaaaaa',
    border: '#333333',
    error: '#e74c3c',
    inputBackground: '#2d2d2d',
  },
};

interface ThemeContextType {
  theme: typeof lightTheme;
  darkMode: boolean;
  toggleTheme: () => void;
  colors: typeof lightTheme.colors;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  darkMode: false,
  toggleTheme: () => {},
  colors: lightTheme.colors,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const darkMode = useSelector((state: RootState) => state.appSettings.darkMode);
  const { toggleTheme, loadThemePreference } = useAppSettings();

  useEffect(() => {
    loadThemePreference();
  }, [loadThemePreference]);

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ 
      theme, 
      darkMode, 
      toggleTheme,
      colors: theme.colors 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
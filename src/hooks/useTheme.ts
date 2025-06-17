import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useAppSettings } from './useAppSettings';

export const useTheme = () => {
  const darkMode = useSelector((state: RootState) => state.appSettings.darkMode);
  const { toggleTheme } = useAppSettings();
  
  return { 
    darkMode, 
    toggleTheme,
    theme: darkMode ? darkTheme : lightTheme 
  };
};

// Theme definitions
const darkTheme = {
  dark: true,
  colors: {
    primary: '#3498db',
    background: '#121212',
    cardBackground: '#1e1e1e',
    text: '#ffffff',
    textSecondary: '#aaaaaa',
    border: '#333333',
    error: '#e74c3c',
    inputBackground: '#2d2d2d',
  }
};

const lightTheme = {
  dark: false,
  colors: {
    primary: '#3498db',
    background: '#ffffff',
    cardBackground: '#f8f9fa',
    text: '#333333',
    textSecondary: '#777777',
    border: '#e0e0e0',
    error: '#e74c3c',
    inputBackground: '#ffffff',
  }
};
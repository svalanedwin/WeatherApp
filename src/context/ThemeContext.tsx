import React, { createContext, useContext } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { darkTheme, lightTheme, Theme } from '../config/theme';

const ThemeContext = createContext<Theme>(lightTheme);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const darkMode = useSelector((state: RootState) => state.appSettings.darkMode);
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toggleDarkMode, setDarkMode } from '../redux/slices/appSettingsSlice';
import { storageService } from '../services/storage/asyncStorage';

export const useAppSettings = () => {
  const dispatch = useDispatch();

  const loadThemePreference = useCallback(async () => {
    try {
      const darkMode = await storageService.getThemePreference();
      dispatch(setDarkMode(darkMode));
    } catch (error) {
      console.error('Failed to load theme preference:', error);
      dispatch(setDarkMode(false));
    }
  }, [dispatch]);

  const toggleTheme = useCallback(async () => {
    try {
      const currentDarkMode = await storageService.getThemePreference();
      const newDarkMode = !currentDarkMode;
      
      dispatch(setDarkMode(newDarkMode));
      await storageService.setThemePreference(newDarkMode);
    } catch (error) {
      console.error('Failed to toggle theme:', error);
    }
  }, [dispatch]);

  return {
    toggleTheme,
    loadThemePreference,
  };
};
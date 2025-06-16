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
      // Fallback to light mode if preference loading fails
      dispatch(setDarkMode(false));
    }
  }, [dispatch]);

  const toggleTheme = useCallback(async () => {
    try {
      // Optimistic UI update
      dispatch(toggleDarkMode());
      
      // Get current state after toggle
      const currentDarkMode = await storageService.getThemePreference();
      const newDarkMode = !currentDarkMode;
      
      // Persist the new preference
      await storageService.setThemePreference(newDarkMode);
    } catch (error) {
      console.error('Failed to toggle theme:', error);
      // Revert the UI change if storage fails
      dispatch(toggleDarkMode());
    }
  }, [dispatch]);

  return {
    toggleTheme,
    loadThemePreference,
  };
};
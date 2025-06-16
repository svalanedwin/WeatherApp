import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '../../config/constants';

type StorageErrorHandler = (error: unknown) => void;

const defaultErrorHandler: StorageErrorHandler = (error) => {
  console.error('AsyncStorage error:', error);
};

export const storageService = {
  getLastSearchedCity: async (
    onError: StorageErrorHandler = defaultErrorHandler
  ): Promise<string> => {
    try {
      const city = await AsyncStorage.getItem(STORAGE_KEYS.LAST_SEARCHED_CITY);
      return city || '';
    } catch (error) {
      onError(error);
      return '';
    }
  },

  setLastSearchedCity: async (
    city: string,
    onError: StorageErrorHandler = defaultErrorHandler
  ): Promise<void> => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.LAST_SEARCHED_CITY, city);
    } catch (error) {
      onError(error);
    }
  },

  getThemePreference: async (
    onError: StorageErrorHandler = defaultErrorHandler
  ): Promise<boolean> => {
    try {
      const preference = await AsyncStorage.getItem(STORAGE_KEYS.THEME_PREFERENCE);
      return preference === 'dark';
    } catch (error) {
      onError(error);
      return false;
    }
  },

  setThemePreference: async (
    darkMode: boolean,
    onError: StorageErrorHandler = defaultErrorHandler
  ): Promise<void> => {
    try {
      await AsyncStorage.setItem(
        STORAGE_KEYS.THEME_PREFERENCE,
        darkMode ? 'dark' : 'light'
      );
    } catch (error) {
      onError(error);
    }
  },
};
import Config from 'react-native-config';
export const API_KEYS = {
  OPEN_WEATHER: Config.OPEN_WEATHER_API_KEY,
};

export const API_URLS = {
  WEATHER: 'https://api.openweathermap.org/data/2.5/weather',
  FORECAST: 'https://api.openweathermap.org/data/2.5/forecast',
  GEOCODING: 'http://api.openweathermap.org/geo/1.0/direct',
};

export const UNITS = {
  METRIC: 'metric',
  IMPERIAL: 'imperial',
};

export const STORAGE_KEYS = {
  LAST_SEARCHED_CITY: 'lastSearchedCity',
  THEME_PREFERENCE: 'themePreference',
};

export const DEFAULT_CITY = 'London';
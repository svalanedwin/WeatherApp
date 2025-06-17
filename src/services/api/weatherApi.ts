import axios, { AxiosError } from 'axios';
import { API_URLS, API_KEYS, UNITS } from '../../config/constants';
import { WeatherData } from '../../types/weatherTypes';

export const fetchWeatherByCity = async (
  city: string,
  units: string = UNITS.METRIC
): Promise<WeatherData> => {
  try {
    const response = await axios.get<WeatherData>(API_URLS.WEATHER, {
      params: {
        q: city,
        units,
        appid: API_KEYS.OPEN_WEATHER,
      },
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    
    if (axiosError.response?.data) {
      const errorData = axiosError.response.data as { message?: string };
      throw new Error(errorData.message || 'Weather API returned an error');
    }
    
    throw new Error(
      axiosError.message || 'Network error while fetching weather data'
    );
  }
};
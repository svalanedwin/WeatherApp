import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchWeatherStart,
  fetchWeatherSuccess,
  fetchWeatherFailure,
  setLastSearchedCity,
} from '../redux/slices/weatherSlice';
import { fetchWeatherByCity } from '../services/api/weatherApi';
import { RootState } from '../redux/store';
import { storageService } from '../services/storage/asyncStorage';
import { WeatherData } from '../redux/types';

export const useWeather = () => {
  const dispatch = useDispatch();
  const { data, loading, error, lastSearchedCity } = useSelector(
    (state: RootState) => state.weather
  );

  const loadLastSearchedCity = useCallback(async () => {
    try {
      const city = await storageService.getLastSearchedCity();
      if (city) {
        dispatch(setLastSearchedCity(city));
      }
    } catch (err) {
      console.error('Failed to load last city:', err);
    }
  }, [dispatch]);

  const fetchWeather = useCallback(async (city: string) => {
    try {
      dispatch(fetchWeatherStart(city));
      
      const weatherData: WeatherData = await fetchWeatherByCity(city);
      dispatch(fetchWeatherSuccess(weatherData));
      
      try {
        await storageService.setLastSearchedCity(city);
      } catch (storageErr) {
        console.error('Failed to save city:', storageErr);
      }
    } catch (apiErr) {
      const errorMessage = apiErr instanceof Error ? apiErr.message : 'Failed to fetch weather';
      dispatch(fetchWeatherFailure(errorMessage));
    }
  }, [dispatch]);

  useEffect(() => {
    loadLastSearchedCity();
  }, [loadLastSearchedCity]);

  return {
    weatherData: data,
    loading,
    error,
    lastSearchedCity,
    fetchWeather,
  };
};

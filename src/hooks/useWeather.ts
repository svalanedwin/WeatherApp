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
    } catch (error) {
      console.error('Failed to load last city:', error);
    }
  }, [dispatch]);

  const fetchWeather = useCallback(async (city: string) => {
    try {
      dispatch(fetchWeatherStart(city));
      
      const weatherData: WeatherData = await fetchWeatherByCity(city);
      dispatch(fetchWeatherSuccess(weatherData));
      
      try {
        await storageService.setLastSearchedCity(city);
      } catch (storageError) {
        console.error('Failed to save city:', storageError);
      }
    } catch (apiError) {
      const errorMessage = apiError instanceof Error ? apiError.message : 'Failed to fetch weather';
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
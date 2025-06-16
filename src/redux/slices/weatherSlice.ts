import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherData } from '../types';

interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string | null;
  lastSearchedCity: string;
}

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
  lastSearchedCity: '',
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchWeatherStart: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.error = null;
      state.lastSearchedCity = action.payload;
    },
    fetchWeatherSuccess: (state, action: PayloadAction<WeatherData>) => {
      state.data = action.payload;
      state.loading = false;
    },
    fetchWeatherFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    setLastSearchedCity: (state, action: PayloadAction<string>) => {
      state.lastSearchedCity = action.payload;
    },
    clearWeatherData: (state) => {
      state.data = null;
    },
  },
});

export const {
  fetchWeatherStart,
  fetchWeatherSuccess,
  fetchWeatherFailure,
  setLastSearchedCity,
  clearWeatherData,
} = weatherSlice.actions;

export default weatherSlice.reducer;
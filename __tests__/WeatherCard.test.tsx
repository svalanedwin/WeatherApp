import React from 'react';
import { render } from '@testing-library/react-native';
import WeatherCard from '../src/components/weather/WeatherCard/WeatherCard';

describe('<WeatherCard />', () => {
  it('renders weather data correctly', () => {
    const mockWeatherData = {
      name: 'London',
      main: { temp: 15 },
      weather: [{ main: 'Clear', description: 'Clear sky', icon: '01d' }], // Corrected here
    };
    
    const { getByText } = render(<WeatherCard weatherData={mockWeatherData} units="metric" />);
    
    expect(getByText('London')).toBeTruthy();
    expect(getByText(/15°c/i)).toBeTruthy();
    expect(getByText(/Clear sky/i)).toBeTruthy();
  });
});

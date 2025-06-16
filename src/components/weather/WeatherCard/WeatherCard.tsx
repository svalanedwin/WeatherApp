import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../../styles/components/WeatherCard.styles';
import WeatherIcon from '../../common/WeatherIcon/WeatherIcon';
import { formatTemperature } from '../../../utils/helpers';
import { useTheme } from '../../../context/ThemeContext';

interface WeatherCardProps {
  weatherData: {
    name: string;
    main: {
      temp: number;
    };
    weather: {
      main: string;
      description: string;
      icon: string;
    }[];
  };
  units: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData, units }) => {
  const theme = useTheme();

  if (!weatherData) return null;

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.cardBackground }]}>
      <Text style={[styles.cityName, { color: theme.colors.text }]}>{weatherData.name}</Text>
      <View style={styles.weatherInfo}>
        <Text style={[styles.temperature, { color: theme.colors.text }]}>
          {formatTemperature(weatherData.main.temp, units)}
        </Text>
        <WeatherIcon iconCode={weatherData.weather[0].icon} size={64} />
      </View>
      <Text style={[styles.weatherDescription, { color: theme.colors.text }]}>
        {weatherData.weather[0].description}
      </Text>
    </View>
  );
};

export default WeatherCard;
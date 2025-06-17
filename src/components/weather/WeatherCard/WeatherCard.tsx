import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
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

const WeatherCard: React.FC<WeatherCardProps> = ({ 
  weatherData, 
  units
}) => {
  const { colors, darkMode } = useTheme();

  if (!weatherData) return null;

  // Dynamic styles based on theme
  const dynamicStyles = {
    container: {
      backgroundColor: darkMode ? colors.cardBackground : '#f8f9fa',
      shadowColor: darkMode ? '#000' : '#ccc',
      shadowOpacity: darkMode ? 0.5 : 0.2,
    },
    text: {
      color: colors.text,
    },
    secondaryText: {
      color: colors.textSecondary,
    }
  };

  return (
    <View style={[
      styles.container,
      dynamicStyles.container,
      styles.shadow,
    ]}>
      <Text style={[styles.cityName, dynamicStyles.text]}>{weatherData.name}</Text>
      <View style={styles.weatherInfo}>
        <Text style={[styles.temperature, dynamicStyles.text]}>
          {formatTemperature(weatherData.main.temp, units)}
        </Text>
        <WeatherIcon iconCode={weatherData.weather[0].icon} size={64} />
      </View>
      <Text style={[styles.weatherDescription, dynamicStyles.secondaryText]}>
        {weatherData.weather[0].description}
      </Text>
    </View>
  );
};

// Base styles that don't change
const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: 20,
    margin: 16,
  },
  shadow: {
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  weatherInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  weatherDescription: {
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});

export default WeatherCard;
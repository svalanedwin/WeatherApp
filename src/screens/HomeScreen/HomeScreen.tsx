import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { useWeather } from '../../hooks/useWeather';
import { useTheme } from '../../context/ThemeContext';
import WeatherCard from '../../components/weather/WeatherCard/WeatherCard';
import WeatherSearch from '../../components/weather/WeatherSearch/WeatherSearch';
import LoadingIndicator from '../../components/common/LoadingIndicator/LoadingIndicator';
import Container from '../../components/layout/Container/Container';

const HomeScreen: React.FC = () => {
  const {
    weatherData,
    loading,
    error,
    lastSearchedCity,
    fetchWeather,
  } = useWeather();

  const { theme } = useTheme();

  return (
    <Container>
      <ScrollView
        contentContainerStyle={[
          styles.scrollViewContent,
          { backgroundColor: theme.colors.background }
        ]}
        keyboardShouldPersistTaps="handled"
      >
        <WeatherSearch
          onSearch={fetchWeather}
          loading={loading}
          initialCity={lastSearchedCity}
        />
        
        {loading && <LoadingIndicator />}

        {error && (
          <Text style={[styles.errorText, { color: theme.colors.error }]}>
            {error}
          </Text>
        )}

        {weatherData && (
          <WeatherCard
            weatherData={weatherData}
            units="metric"
          />
        )}
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    padding: 16,
  },
  errorText: {
    marginVertical: 16,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default HomeScreen;
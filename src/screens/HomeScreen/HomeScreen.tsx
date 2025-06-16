import React from 'react';
import { ScrollView, Text } from 'react-native';
import { useWeather } from '../../hooks/useWeather';
import WeatherCard from '../../components/weather/WeatherCard/WeatherCard';
import WeatherSearch from '../../components/weather/WeatherSearch/WeatherSearch';
import LoadingIndicator from '../../components/common/LoadingIndicator/LoadingIndicator';
import Container from '../../components/layout/Container/Container';
import styles from '../../styles/components/HomeScreen.styles';

const HomeScreen: React.FC = () => {
  const {
    weatherData,
    loading,
    error,
    lastSearchedCity,
    fetchWeather,
  } = useWeather();

  return (
    <Container>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        keyboardShouldPersistTaps="handled"
      >
        <WeatherSearch
          onSearch={fetchWeather}
          loading={loading}
          initialCity={lastSearchedCity}
        />
        
        {loading && <LoadingIndicator />}

        {error && <Text style={styles.errorText}>{error}</Text>}

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

export default HomeScreen;
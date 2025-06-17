import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { useTheme } from '../../../context/ThemeContext';

interface WeatherSearchProps {
  onSearch: (city: string) => void;
  loading: boolean;
  initialCity?: string;
}

const WeatherSearch: React.FC<WeatherSearchProps> = ({ 
  onSearch, 
  loading,
  initialCity = ''
}) => {
  const [city, setCity] = useState(initialCity);
  const theme = useTheme();

  useEffect(() => {
    setCity(initialCity);
  }, [initialCity]);

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.inputBackground }]}>
      <Input
        value={city}
        onChangeText={setCity}
        placeholder="Enter city name"
        placeholderTextColor={theme.colors.textSecondary}
        onEndEditing={handleSearch}
        returnKeyType="search"
      />
      <Button
        title="Search"
        onPress={handleSearch}
        disabled={!city.trim()}
        loading={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default WeatherSearch;
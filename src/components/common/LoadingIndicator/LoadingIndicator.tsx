import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { useTheme } from '../../../context/ThemeContext';

interface LoadingIndicatorProps {
  darkMode?: boolean;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ darkMode = false }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <ActivityIndicator 
        size="large" 
        color={darkMode ? colors.secondary : colors.primary} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default LoadingIndicator;
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';
import { ThemeProvider } from './src/context/ThemeContext';
import ErrorBoundary from './src/components/common/ErrorBoundary';
import { View, Text, Button, StyleSheet } from 'react-native';

// Extract styles to avoid inline styles warning
const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// Define fallback as a function matching the ErrorBoundary prop signature
const errorFallback = (error: Error, resetError: () => void) => (
  <View style={styles.fallbackContainer}>
    <Text>Something went wrong!</Text>
    <Text>{error.message}</Text>
    <Button title="Try again" onPress={resetError} />
  </View>
);

const App = () => {
  return (
    <ErrorBoundary fallback={errorFallback}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
            <AppNavigator />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;

// jestSetup.js
import 'react-native-gesture-handler/jestSetup'; // Required for react-navigation

// Mock react-native-reanimated
jest.mock('react-native-reanimated', () => {
  return {
    Easing: jest.requireActual('react-native-reanimated').Easing,
    // Add any additional mock implementations if necessary
  };
});

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => {
    return {
        setItem: jest.fn(() => Promise.resolve()),
        getItem: jest.fn(() => Promise.resolve(null)),
        removeItem: jest.fn(() => Promise.resolve()),
        multiGet: jest.fn(() => Promise.resolve([])),
        multiSet: jest.fn(() => Promise.resolve()),
        multiRemove: jest.fn(() => Promise.resolve()),
        clear: jest.fn(() => Promise.resolve()),
    };
});
// Global console mock to ignore warnings
global.console = {
  ...global.console,
  warn: jest.fn(), // You can add more methods to mock if necessary
};

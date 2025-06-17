// jest.config.js
module.exports = {
  preset: 'react-native',
  testEnvironment: 'node',
  setupFiles: ['./jestSetup.js'], // Correct path to your setup file
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest', // This should handle most transformations
    '^.+\\.(js|ts)$': 'babel-jest', // Ensure that this line handles JS and TS
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  transformIgnorePatterns: [
  'node_modules/(?!(react-native-config|react-native|@react-native|@react-navigation)/)',
],
};

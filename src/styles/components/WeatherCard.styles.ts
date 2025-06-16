import { StyleSheet } from 'react-native';
import { lightTheme } from '../../config/theme';

export default StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: lightTheme.spacing.large,
    margin: lightTheme.spacing.medium,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cityName: {
    fontSize: lightTheme.typography.header.fontSize,
    fontWeight: lightTheme.typography.header.fontWeight,
    textAlign: 'center',
    marginBottom: lightTheme.spacing.medium,
  },
  weatherInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: lightTheme.spacing.medium,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  weatherDescription: {
    fontSize: lightTheme.typography.title.fontSize,
    textTransform: 'capitalize',
    textAlign: 'center',
  },
});
import { StyleSheet } from 'react-native';
import { lightTheme } from '../../config/theme';

export default StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    padding: lightTheme.spacing.large,
  },
  errorText: {
    color: lightTheme.colors.error,
    marginVertical: lightTheme.spacing.medium,
    textAlign: 'center',
  },
});
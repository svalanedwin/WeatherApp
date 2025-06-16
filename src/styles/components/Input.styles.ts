import { StyleSheet } from 'react-native';
import { lightTheme } from '../../config/theme';

export default StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: lightTheme.spacing.medium,
    marginBottom: lightTheme.spacing.medium,
  },
});
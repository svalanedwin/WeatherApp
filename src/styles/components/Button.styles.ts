import { StyleSheet } from 'react-native';
import { lightTheme } from '../../config/theme';

export default StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: lightTheme.spacing.medium,
    paddingHorizontal: lightTheme.spacing.large,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: lightTheme.spacing.small,
  },
  buttonText: {
    fontSize: lightTheme.typography.body.fontSize,
    fontWeight: '600',
  },
  disabled: {
    opacity: 0.6,
  },
});
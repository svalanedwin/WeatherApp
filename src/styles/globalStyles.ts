import { lightTheme } from '../config/theme';

export const globalStyles = {
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card: {
    borderRadius: 10,
    padding: lightTheme.spacing.large,
    marginVertical: lightTheme.spacing.medium,
    backgroundColor: lightTheme.colors.cardBackground,
  },
};
export const lightTheme = {
  colors: {
    primary: '#3498db',
    secondary: '#2ecc71',
    background: '#ffffff',
    cardBackground: '#f8f9fa',
    text: '#333333',
    textSecondary: '#777777',
    border: '#e0e0e0',
    error: '#e74c3c',
    inputBackground: '#ffffff',
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
    xlarge: 32,
  },
  typography: {
    header: {
      fontSize: 24,
      fontWeight: 'bold' as const,
    },
    title: {
      fontSize: 20,
      fontWeight: '600' as const,
    },
    body: {
      fontSize: 16,
    },
    caption: {
      fontSize: 14,
    },
  },
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    background: '#121212',
    cardBackground: '#1e1e1e',
    text: '#ffffff',
    textSecondary: '#aaaaaa',
    border: '#333333',
    inputBackground: '#2d2d2d',
  },
};

export type Theme = typeof lightTheme;
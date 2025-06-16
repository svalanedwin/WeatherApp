import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, Theme } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import { darkTheme, lightTheme } from '../config/theme';
import { RootStackParamList } from '../types/navigation';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const { darkMode } = useSelector((state: RootState) => state.appSettings);
  const theme = darkMode ? darkTheme : lightTheme;

  // Create a React Navigation compatible theme object
  const navigationTheme: Theme = {
    dark: darkMode,
    colors: {
      primary: theme.colors.primary,
      background: theme.colors.background,
      card: theme.colors.cardBackground,
      text: theme.colors.text,
      border: theme.colors.border,
      notification: theme.colors.secondary,
    },
    // Add default fonts if needed
    fonts: {
      regular: {
        fontFamily: 'System',
        fontWeight: '400',
      },
      medium: {
        fontFamily: 'System',
        fontWeight: '500',
      },
      bold: {
        fontFamily: 'System',
        fontWeight: '700',
      },
      heavy: {
        fontFamily: 'System',
        fontWeight: '800',
      },
    },
  };

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.cardBackground,
          },
          headerTintColor: theme.colors.primary,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          contentStyle: {
            backgroundColor: theme.colors.background,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Weather App',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
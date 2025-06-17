// ThemeToggleButton.tsx (or same file, above AppNavigator)

import React from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import { useTheme } from '../../../context/ThemeContext';

const ThemeToggleButton = () => {
  const { toggleTheme, darkMode, theme } = useTheme();
  const switchAnim = React.useRef(new Animated.Value(darkMode ? 1 : 0)).current;

  const handlePress = () => {
    Animated.timing(switchAnim, {
      toValue: darkMode ? 0 : 1,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start(toggleTheme);
  };

  const trackWidth = 50;
  const thumbSize = 22;
  const thumbPadding = 2;

  const thumbPosition = switchAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [thumbPadding, trackWidth - thumbSize - thumbPadding],
  });

  return (
    <View style={styles.container}>
      <TouchableRipple
        onPress={handlePress}
        rippleColor={theme.colors.primary + '20'}
        borderless
        style={[
          styles.track,
          {
            backgroundColor: darkMode ? theme.colors.primary + '40' : theme.colors.border,
            width: trackWidth,
          },
        ]}
        accessibilityRole="switch"
        accessibilityState={{ checked: darkMode }}
        accessibilityLabel={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <Animated.View
          style={[
            styles.thumb,
            {
              backgroundColor: theme.colors.primary,
              width: thumbSize,
              height: thumbSize,
              transform: [{ translateX: thumbPosition }],
            },
          ]}
        />
      </TouchableRipple>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  track: {
    height: 26,
    borderRadius: 13,
    justifyContent: 'center',
  },
  thumb: {
    borderRadius: 11,
    position: 'absolute',
  },
});

export default ThemeToggleButton;

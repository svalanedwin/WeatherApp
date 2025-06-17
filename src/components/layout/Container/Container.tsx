import React from 'react';
import { View, StyleProp, ViewStyle, StyleSheet } from 'react-native';
import { useTheme } from '../../../context/ThemeContext';

interface ContainerProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  testID?: string;
}

const Container: React.FC<ContainerProps> = ({ children, style, testID }) => {
  const { theme } = useTheme();

  return (
    <View
      testID={testID}
      style={[
        styles.container,
        { backgroundColor: theme.colors.background },
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(Container);

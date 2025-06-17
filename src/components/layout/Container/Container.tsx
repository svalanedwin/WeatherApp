import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
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
        {
          flex: 1,
          backgroundColor: theme.colors.background,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default React.memo(Container);
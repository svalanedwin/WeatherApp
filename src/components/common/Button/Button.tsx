import React from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle, ActivityIndicator, TextStyle, StyleSheet } from 'react-native';
import styles from '../../../styles/components/Button.styles';
import { useTheme } from '../../../context/ThemeContext';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>; // Add textStyle prop
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  title, 
  onPress, 
  style, 
  textStyle,
  disabled = false, 
  loading = false 
}) => {
  const theme = useTheme();

  // Create dynamic text styles
  const textStyles = StyleSheet.create({
    buttonText: {
      color: '#fff', // Or use theme.colors.textOnPrimary if available
      ...StyleSheet.flatten(styles.buttonText),
      ...StyleSheet.flatten(textStyle),
    },
  });

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: theme.colors.primary },
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={textStyles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
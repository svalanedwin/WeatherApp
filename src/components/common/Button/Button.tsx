import React from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle, ActivityIndicator } from 'react-native';
import styles from '../../../styles/components/Button.styles';
import { useTheme } from '../../../context/ThemeContext';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, style, disabled = false, loading = false }) => {
  const theme = useTheme();

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
        <Text style={[styles.buttonText, { color: '#fff' }]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
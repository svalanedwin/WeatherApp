import React from 'react';
import {
  TextInput,
  StyleProp,
  TextStyle,
  ViewStyle,
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  TextInputEndEditingEventData,
} from 'react-native';
import styles from '../../../styles/components/Input.styles';
import { useTheme } from '../../../context/ThemeContext';

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  secureTextEntry?: boolean;
  onEndEditing?: (e: NativeSyntheticEvent<TextInputEndEditingEventData>) => void;
  returnKeyType?: ReturnKeyTypeOptions;
  placeholderTextColor?: string; // Add this line
  darkMode?: boolean; // Add this line
}

const Input: React.FC<InputProps> = ({
  value,
  onChangeText,
  placeholder,
  style,
  textStyle,
  secureTextEntry = false,
  onEndEditing,
  returnKeyType,
}) => {
  const theme = useTheme();

  return (
    <TextInput
      style={[
        styles.input,
        {
          backgroundColor: theme.colors.inputBackground,
          color: theme.colors.text,
          borderColor: theme.colors.border,
        },
        textStyle,
        style,
      ]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.textSecondary}
      secureTextEntry={secureTextEntry}
      onEndEditing={onEndEditing}
      returnKeyType={returnKeyType}
    />
  );
};

export default Input;

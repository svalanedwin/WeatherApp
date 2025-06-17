
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Input from '../src/components/common/Input/Input';

jest.mock('../src/context/ThemeContext', () => ({
  useTheme: () => ({
    colors: {
      inputBackground: '#ffffff',
      text: '#000000',
      border: '#cccccc',
      textSecondary: '#999999',
    },
  }),
}));

describe('<Input />', () => {
  it('renders correctly with placeholder and updates value on change', () => {
    const mockOnChangeText = jest.fn();
    const { getByPlaceholderText } = render(
      <Input
        value=""
        onChangeText={mockOnChangeText}
        placeholder="Enter text"
      />
    );

    // Check if the input is rendered with the correct placeholder
    const inputField = getByPlaceholderText('Enter text');
    expect(inputField).toBeTruthy();

    // Simulate text input change
    fireEvent.changeText(inputField, 'Hello World');

    // Verify that the onChangeText function was called with the correct arguments
    expect(mockOnChangeText).toHaveBeenCalledWith('Hello World');
  });

  it('renders correctly with secureTextEntry prop', () => {
    const { getByPlaceholderText } = render(
      <Input
        value=""
        onChangeText={() => {}}
        placeholder="Password"
        secureTextEntry={true}
      />
    );

    // Check if the input is rendered with the correct placeholder
    const inputField = getByPlaceholderText('Password');
    expect(inputField).toBeTruthy();
    
    // Check if the secureTextEntry prop is applied
    expect(inputField.props.secureTextEntry).toBe(true);
  });
});

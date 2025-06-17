import React from 'react';
import '../jestSetup'; // Include this import at the top
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../src/components/common/Button/Button'; // Adjust the path accordingly

describe('<Button />', () => {
  it('renders correctly and calls onPress when clicked', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<Button title="Test Button" onPress={onPressMock} />);
    
    const button = getByText('Test Button');
    fireEvent.press(button);
    
    expect(onPressMock).toHaveBeenCalledTimes(1)// Corrected to check that the function was called once
  });
});
